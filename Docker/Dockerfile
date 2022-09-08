FROM php:8.1-fpm

ARG NODE_VERSION=16

# Install system dependencies
RUN apt-get update

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install NodeJs
RUN curl -sLS https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
  && apt-get install -y nodejs

# Set working directory
WORKDIR /var/www
