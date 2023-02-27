#!/bin/bash

sudo rm -rf ./frontend/app/ && sudo cp -r -T ./client/build ./frontend/app/ &&
sudo rm -rf /var/www/html && sudo cp -r -T ./frontend /var/www/html && sudo service apache2 restart