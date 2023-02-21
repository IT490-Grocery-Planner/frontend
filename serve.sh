#!/bin/bash

sudo rm -rf /var/www/html && sudo cp -r -T ./frontend /var/www/html && sudo service apache2 restart