# Startcode frontend

## In deploy.sh, change:

PROJECT_NAME="{subdirectory}"

DROPLET_URL="{droplet IP}"

## Ubuntu
### SSH into droplet

### Change directory
"cd /var/www/"

### Make new subdirectory folder
"mkdir {subdirectory}"

### Grant read/write permissions to new folder
"chmod -R 777 {subdirectory}"

### Edit NGINX config
"nano /etc/nginx/sites-enabled/default"

## Create new location in NGINX config
        location / {
                root /var/www/{subdirectory}/;
        }

        location /tomcat/ {
                proxy_pass http://tomcat/;
                include proxy_params;
        }

#### Save + exit
#### Git Bash from front-end directory

## Run deploy.sh from terminal

./deploy.sh

## Ubuntu

### SSH into droplet

#### Check config file for errors

"nginx -t"

#### Restart NGINX service

"service nginx restart"
# RacecarFrontend
