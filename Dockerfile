FROM php:8.2-apache

# Enable apache mod_rewrite
RUN a2enmod rewrite

# Install required PHP extensions for curl (curl is usually pre-installed in this image, but we ensure it works)
RUN apt-get update && apt-get install -y libcurl4-openssl-dev \
    && docker-php-ext-install curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /var/www/html

# Copy project files to the container
COPY . /var/www/html/

# Update permissions
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
