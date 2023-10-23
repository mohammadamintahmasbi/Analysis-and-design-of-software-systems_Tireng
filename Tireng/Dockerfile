# Use an official Python runtime as the base image
FROM python:3.9

# Set the working directory to /app
WORKDIR /app

# Copy the requirements.txt file to the container
COPY requirements.txt .

# Install the project dependencies
RUN pip install -r requirements.txt

# Copy the rest of the project files to the container
COPY . .

# Expose the port that your Django application will run on
EXPOSE 8000

# Specify the command to run your Django application
CMD python manage.py makemigrations && python manage.py migrate && python manage.py runserver 127.0.0.1:8000