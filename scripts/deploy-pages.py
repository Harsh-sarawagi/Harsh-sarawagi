"""Publish a clean source checkout using Git's existing GitHub sign-in.

Credentials remain in memory; only the explicit source allowlist is published.
"""
from pathlib import Path
import json
import os
import shutil
import subprocess
import urllib.error
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
OWNER = 'Harsh-sarawagi'
NAME = 'Harsh-sarawagi'
REPO = f'{OWNER}/{NAME}'
REMOTE = f'https://github.com/{REPO}.git'
CHECKOUT = ROOT / '.deploy' / 'github-profile-pages'
process_env = os.environ.copy()
process_env.update(GCM_INTERACTIVE='never', GIT_TERMINAL_PROMPT='0')

def git(*args, cwd=CHECKOUT):
    result = subprocess.run(['git', *args], cwd=cwd, env=process_env, text=True, capture_output=True, timeout=120)
    if result.returncode:
        raise RuntimeError(result.stderr.strip())
    return result.stdout.strip()

credential = subprocess.run(['git', 'credential', 'fill'], input='protocol=https\nhost=github.com\n\n', text=True, capture_output=True, env=process_env, timeout=20, check=True)
fields = dict(line.split('=', 1) for line in credential.stdout.splitlines() if '=' in line)
token = fields['password']

def api(path, method='GET', payload=None):
    request = urllib.request.Request('https://api.github.com/' + path, method=method, data=json.dumps(payload).encode() if payload is not None else None, headers={'Authorization': 'Bearer ' + token, 'User-Agent': 'HarshPortfolioDeployment', 'Accept': 'application/vnd.github+json', 'Content-Type': 'application/json'})
    with urllib.request.urlopen(request, timeout=30) as response:
        body = response.read()
        return json.loads(body) if body else None

user = api('user')
assert user['login'].lower() == OWNER.lower(), 'Unexpected authenticated GitHub account'
repo = api('repos/' + REPO)
assert repo['owner']['login'].lower() == OWNER.lower()
CHECKOUT.mkdir(parents=True, exist_ok=True)
if not (CHECKOUT / '.git').exists():
    if any(CHECKOUT.iterdir()):
        raise RuntimeError('Deployment checkout must initially be empty.')
    if api(f'repos/{REPO}/branches'):
        raise RuntimeError('Remote repository gained content since review; preserve it before publishing.')
    git('init', '--initial-branch=main', '.')
    git('remote', 'add', 'origin', REMOTE)
assert git('remote', 'get-url', 'origin') == REMOTE
git('config', 'user.name', 'Harsh Sarawagi')
git('config', 'user.email', f'{user["id"]}+{user["login"]}@users.noreply.github.com')
for folder in ['src', 'public', 'tests', '.github']:
    shutil.copytree(ROOT / folder, CHECKOUT / folder, dirs_exist_ok=True)
(CHECKOUT / 'scripts').mkdir(exist_ok=True)
for file in ['build.mjs', 'dev.mjs', 'deploy-pages.py']:
    shutil.copy2(ROOT / 'scripts' / file, CHECKOUT / 'scripts' / file)
(CHECKOUT / 'docs').mkdir(exist_ok=True)
for file in ['credits.md', 'portfolio-content.md']:
    shutil.copy2(ROOT / 'docs' / file, CHECKOUT / 'docs' / file)
for file in ['package.json', 'package-lock.json', '.gitignore', 'README.md']:
    shutil.copy2(ROOT / file, CHECKOUT / file)
git('add', '--all')
if git('status', '--porcelain'):
    git('commit', '-m', 'Publish portfolio with GitHub Pages')
git('push', '--set-upstream', 'origin', 'main')
print('Portfolio source pushed to https://github.com/' + REPO, flush=True)
try:
    pages = api(f'repos/{REPO}/pages')
    if pages.get('build_type') != 'workflow':
        pages = api(f'repos/{REPO}/pages', 'PUT', {'build_type': 'workflow'})
except urllib.error.HTTPError as error:
    if error.code != 404:
        raise
    pages = api(f'repos/{REPO}/pages', 'POST', {'build_type': 'workflow'})
print('GitHub Pages enabled with GitHub Actions.', flush=True)
print('Expected website: https://' + OWNER.lower() + '.github.io/' + NAME + '/', flush=True)
