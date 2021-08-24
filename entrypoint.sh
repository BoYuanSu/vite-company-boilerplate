#!/bin/sh
for file in /app/assets/*.js;
do
  if [ ! -f $file.tmpl.js ]; then
    cp $file $file.tmpl.js
  fi
  envsubst '$VITE_BACKEND_HOST' < $file.tmpl.js > $file
done
echo "Starting Nginx"
nginx -g 'daemon off;'