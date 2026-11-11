# CloudTech Solutions — Interview Demo Website

A responsive multi-section static website for **Project 1: Git + Jenkins + Web Server**.

## Files
- `index.html` — website content and page structure
- `css/style.css` — responsive design and styling
- `js/main.js` — mobile navigation and dynamic footer year
- `assets/favicon.svg` — site icon
- `Jenkinsfile` — starter declarative Jenkins pipeline
- `nginx.conf.example` — optional Nginx server configuration

## Preview locally
Open `index.html` in a browser, or run from this directory:
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Manual deployment to an Nginx server
For Amazon Linux/RHEL-style Nginx:
```bash
sudo mkdir -p /var/www/cloudtech
sudo cp -r index.html css js assets /var/www/cloudtech/
sudo nginx -t
sudo systemctl reload nginx
```
For Ubuntu/Debian, the Nginx worker account is commonly `www-data` rather than `nginx`; adjust file ownership if required. Configure Nginx document root as `/var/www/cloudtech`. See `nginx.conf.example`.

## Project 1 workflow
1. Create a Git repository and push this website source.
2. Create a Jenkins Pipeline job connected to that repository.
3. Install/configure Nginx on the web server.
4. Configure secure SSH access from the Jenkins agent to the web server.
5. Set `WEB_SERVER_HOST` and `WEB_SERVER_USER` in Jenkins.
6. Run the pipeline and verify the website in a browser.

The included Jenkinsfile is a **starter template**, not a universal plug-and-play deployment. It assumes the Jenkins agent has `tar`, `ssh` and `scp`; SSH credentials are securely configured; the remote user has suitable restricted sudo permissions; Nginx serves `/var/www/cloudtech`; and network rules permit HTTP (TCP 80) and trusted SSH access. For a stronger production pipeline, use Jenkins Credentials binding, pinned SSH host keys, least-privilege sudo, approval and rollback steps.

## Important presentation note
CloudTech Solutions is a fictional demonstration brand. Service descriptions and example engagements are illustrative portfolio content, not claims of real customers, completed client projects, certifications or measured business outcomes. Present it honestly as a website you built and deployed as part of your learning project. Replace the sample email before sharing publicly.
