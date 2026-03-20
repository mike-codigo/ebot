FROM nginx:alpine

RUN apk add --no-cache bash

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files
COPY . /usr/share/nginx/html

# Create entrypoint script
RUN echo '#!/bin/bash\n\
if [ -n "$GROQ_API_KEY" ]; then\n\
  sed -i "s|{{GROQ_API_KEY}}|$GROQ_API_KEY|g" /usr/share/nginx/html/js/env-config.js\n\
fi\n\
if [ -n "$WHATSAPP_NUMBER" ]; then\n\
  sed -i "s|{{WHATSAPP_NUMBER}}|$WHATSAPP_NUMBER|g" /usr/share/nginx/html/js/env-config.js\n\
fi\n\
if [ -n "$SITE_URL" ]; then\n\
  sed -i "s|{{SITE_URL}}|$SITE_URL|g" /usr/share/nginx/html/js/env-config.js\n\
fi\n\
exec docker-entrypoint.sh nginx -g "daemon off;"' > /entrypoint.sh && chmod +x /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
