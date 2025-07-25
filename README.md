# Portfolio Website - Google Cloud Platform Deployment

This is a Django-based portfolio website configured for deployment on Google Cloud Platform.

## Features

- Django web application
- Static file serving with Google Cloud Storage
- PostgreSQL database with Google Cloud SQL
- Google App Engine deployment
- Responsive design with Bootstrap

## Prerequisites

1. **Google Cloud SDK**: Install the Google Cloud CLI
   ```bash
   # For Ubuntu/Debian
   curl https://sdk.cloud.google.com | bash
   exec -l $SHELL
   ```

2. **Python 3.11+**: Ensure you have Python 3.11 or higher installed

3. **Google Cloud Project**: Create a new project in Google Cloud Console

## Setup Instructions

### 1. Initialize Google Cloud Project

```bash
# Login to Google Cloud
gcloud auth login

# Create a new project (replace with your desired project ID)
gcloud projects create your-portfolio-project-id

# Set the project as default
gcloud config set project your-portfolio-project-id

# Enable required APIs
gcloud services enable appengine.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable cloudresourcemanager.googleapis.com
gcloud services enable sqladmin.googleapis.com
gcloud services enable storage.googleapis.com
```

### 2. Create Google Cloud SQL Database

```bash
# Create a PostgreSQL instance
gcloud sql instances create portfolio-db \
    --database-version=POSTGRES_14 \
    --tier=db-f1-micro \
    --region=us-central1 \
    --root-password=your-secure-password

# Create a database
gcloud sql databases create portfolio_db --instance=portfolio-db
```

### 3. Create Google Cloud Storage Bucket

```bash
# Create a storage bucket for static files
gsutil mb gs://your-portfolio-bucket-name

# Make the bucket publicly readable
gsutil iam ch allUsers:objectViewer gs://your-portfolio-bucket-name
```

### 4. Configure Environment Variables

Update the `app.yaml` file with your actual project details:

```yaml
env_variables:
  DJANGO_SETTINGS_MODULE: WebApp.settings
  GOOGLE_CLOUD_PROJECT: your-portfolio-project-id
  GS_BUCKET_NAME: your-portfolio-bucket-name
  DB_NAME: portfolio_db
  DB_USER: postgres
  DB_PASSWORD: your-secure-password
  DB_HOST: /cloudsql/your-portfolio-project-id:us-central1:portfolio-db
  SECRET_KEY: your-secure-secret-key
  DEBUG: False
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

### 6. Run Database Migrations

```bash
python manage.py migrate
```

### 7. Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

### 8. Deploy to Google App Engine

```bash
# Make the deployment script executable
chmod +x deploy.sh

# Run the deployment
./deploy.sh
```

Or deploy manually:

```bash
# Collect static files
python manage.py collectstatic --noinput

# Deploy to App Engine
gcloud app deploy app.yaml
```

## Local Development

For local development, the application will use SQLite and local static files:

```bash
# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

## Environment Variables

The application uses the following environment variables:

- `GOOGLE_CLOUD_PROJECT`: Your Google Cloud project ID
- `GS_BUCKET_NAME`: Google Cloud Storage bucket name
- `DB_NAME`: Database name
- `DB_USER`: Database username
- `DB_PASSWORD`: Database password
- `DB_HOST`: Database host (Cloud SQL connection string)
- `SECRET_KEY`: Django secret key
- `DEBUG`: Debug mode (True/False)

## File Structure

```
Portfolio-Website/
├── app.yaml                 # Google App Engine configuration
├── deploy.sh               # Deployment script
├── requirements.txt        # Python dependencies
├── manage.py              # Django management script
├── WebApp/                # Django project settings
├── PersonalWebsite/        # Django app
├── static/                # Static files
└── staticfiles/           # Collected static files
```

## Troubleshooting

### Common Issues

1. **Permission Denied**: Ensure your Google Cloud account has the necessary permissions
2. **Database Connection**: Verify your Cloud SQL instance is running and accessible
3. **Static Files**: Check that your storage bucket exists and is publicly readable
4. **Domain Issues**: Update `ALLOWED_HOSTS` in settings.py if using a custom domain

### Useful Commands

```bash
# View application logs
gcloud app logs tail -s default

# Check application status
gcloud app browse

# List all versions
gcloud app versions list

# Rollback to previous version
gcloud app versions migrate [VERSION_ID]
```

## Security Notes

- Never commit sensitive information like passwords or API keys
- Use environment variables for all sensitive configuration
- Enable HTTPS in production
- Regularly update dependencies for security patches

## Support

For issues related to:
- Google Cloud Platform: [Google Cloud Documentation](https://cloud.google.com/docs)
- Django: [Django Documentation](https://docs.djangoproject.com/)
- App Engine: [App Engine Documentation](https://cloud.google.com/appengine/docs)