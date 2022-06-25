FROM php:8.0.6-apache

# Install Packages
RUN apt-get update -y && apt-get install -y \
    libonig-dev \
  && docker-php-ext-install pdo_mysql mysqli

# Config
COPY ./config/php/php.ini /usr/local/etc/php/
