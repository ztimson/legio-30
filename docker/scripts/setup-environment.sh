#!/usr/bin/env sh

if [ -n "$ANALYTICS" ]; then sed -i -e "s/:[[:space:]]\?['\"]{{ANALYTICS}}['\"]/:'$ANALYTICS'/g" /usr/share/nginx/html/main*.js; fi
