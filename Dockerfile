FROM nginx:alpine

RUN apk add --no-cache bash sed

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files
COPY . /usr/share/nginx/html

# Make script executable
RUN chmod +x /docker-entrypoint.d/*.sh 2>/dev/null || true

EXPOSE 80

# Entrypoint script to inject environment variables at runtime
RUN echo '#!/bin/bash\n\
sed -i "s|{{GROQ_API_KEY}}|${GROQ_API_KEY:-}|g" /usr/share/nginx/html/js/env-config.js\n\
sed -i "s|{{WHATSAPP_NUMBER}}|${WHATSAPP_NUMBER:-}|g" /usr/share/nginx/html/js/env-config.js\n\
sed -i "s|{{SITE_URL}}|${SITE_URL:-}|g" /usr/share/nginx/html/index.html\n\
exec docker-entrypoint.sh nginx -g "daemon off;"' > /entrypoint.sh && chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
