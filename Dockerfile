FROM nginx:alpine

# Install required packages
RUN apk add --no-cache bash wget curl

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files
COPY . /usr/share/nginx/html

# Create entrypoint script
RUN echo '#!/bin/bash\n\
set -e\n\
\n\
# Replace environment variables in env-config.js\n\
if [ -f /usr/share/nginx/html/js/env-config.js ]; then\n\
  if [ -n "$GROQ_API_KEY" ]; then\n\
    sed -i "s|{{GROQ_API_KEY}}|$GROQ_API_KEY|g" /usr/share/nginx/html/js/env-config.js\n\
  fi\n\
  if [ -n "$WHATSAPP_NUMBER" ]; then\n\
    sed -i "s|{{WHATSAPP_NUMBER}}|$WHATSAPP_NUMBER|g" /usr/share/nginx/html/js/env-config.js\n\
  fi\n\
  if [ -n "$SITE_URL" ]; then\n\
    sed -i "s|{{SITE_URL}}|$SITE_URL|g" /usr/share/nginx/html/js/env-config.js\n\
  fi\n\
fi\n\
\n\
# Start nginx\n\
exec nginx -g "daemon off;"' > /entrypoint.sh && chmod +x /entrypoint.sh

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

ENTRYPOINT ["/entrypoint.sh"]
