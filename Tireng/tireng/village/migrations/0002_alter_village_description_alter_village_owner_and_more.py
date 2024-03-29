# Generated by Django 4.2.6 on 2024-01-09 18:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('village', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='village',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='village',
            name='owner',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='village',
            name='price_per_day',
            field=models.PositiveIntegerField(blank=True),
        ),
    ]
