#!/bin/bash
pushd portfolio || exit
npm build
rsync -az ./dist/* ahonnecke@honnecke.us:/home/ahonnecke/www/honnecke/
