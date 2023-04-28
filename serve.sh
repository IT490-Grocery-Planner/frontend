#!/bin/bash
sudo rm -rf /var/www/html && sudo cp -r -T /home/gc348/git/IT490-Project/frontend /var/www/html && sudo service apache2 restart