#!/usr/bin/env bash

# Install Angular CLI
npm install -g @angular/cli

# Install project dependencies
npm install

# Build the Angular project using npx
npx ng build --configuration production
