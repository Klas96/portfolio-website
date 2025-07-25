#!/bin/bash

# Google Cloud Platform Deployment Script
# This script deploys the Django application to Google App Engine

echo "Starting deployment to Google Cloud Platform..."

# Check if gcloud CLI is installed
if ! command -v gcloud &> /dev/null; then
    echo "Error: gcloud CLI is not installed. Please install it first."
    echo "Visit: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if user is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "Please authenticate with Google Cloud:"
    gcloud auth login
fi

# Set the project ID (replace with your actual project ID)
PROJECT_ID="personal-cloud-464604"
gcloud config set project $PROJECT_ID

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Run database migrations
echo "Running database migrations..."
python manage.py migrate

# Deploy to App Engine
echo "Deploying to App Engine..."
gcloud app deploy app.yaml --quiet

echo "Deployment completed!"
echo "Your app should be available at: https://$PROJECT_ID.appspot.com" 