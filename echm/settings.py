from pathlib import Path
from django.contrib import messages
from django.utils.translation import gettext_lazy as _

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'fd-8ics3jtnx_=9c7b(sf@^joe08zepk(4hg0=*r7%2%)a(wlfp4$'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ('localhost', 'web',)
CSRF_TRUSTED_ORIGINS = ('http://test.ad.cz.conti.de', 'https://test.ad.cz.conti.de')

# Application definition

INSTALLED_APPS = [
    # 'modeltranslation',  # http://django-modeltranslation.readthedocs.io/en/latest/registration.html
    # po migraci DB, pouzit "python manage.py update_translation_fields"

    'echm',
    'i00',
    # 'i10',

    'formset',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'echm.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'echm.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    # { 'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', }, { 'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator', }, { 'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator', }, { 'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator', },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/
LANGUAGES = (
    ('cs', _('Czech')),
    ('en', _('English')),
)
LANGUAGE_CODE = 'cs'
USE_I18N = True
USE_L10N = True
USE_TZ = True
TIME_ZONE = 'Europe/Prague'
NUMBER_GROUPING = 3
THOUSAND_SEPARATOR = ' '
DECIMAL_SEPARATOR = ','
USE_THOUSAND_SEPARATOR = True
DATE_FORMAT = 'd.m.y'
DATETIME_FORMAT = 'd.m.Y - H:i'
SHORT_DATE_FORMAT = 'Y-m-d'
DATETIME_INPUT_FORMATS = ['%d.%m.%Y %H:%M']

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'static'
MEDIA_URL = 'media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Sets the minimum message level that will be recorded by the messages framework
# https://docs.djangoproject.com/en/4.1/ref/settings/#message-level
MESSAGE_LEVEL = messages.DEBUG

# This sets the mapping of message level to message tag, which is typically rendered as a CSS class in HTML.
# https://docs.djangoproject.com/en/4.1/ref/settings/#message-tags
MESSAGE_TAGS = {
    messages.DEBUG: "text-bg-secondary",
    messages.INFO: "text-white bg-info",
    messages.SUCCESS: "text-bg-success",
    messages.WARNING: "text-bg-warning",
    messages.ERROR: "text-bg-danger",
}

SELECT2_THEME= 'bootstrap-5'  # https://apalfrey.github.io/select2-bootstrap-5-theme/