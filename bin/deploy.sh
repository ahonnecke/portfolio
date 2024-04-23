#!/bin/bash
pushd portfolio || exit
npm run build
rsync -az ./dist/* ahonnecke@honnecke.us:/home/ahonnecke/www/honnecke/
