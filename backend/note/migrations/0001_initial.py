# -*- coding: utf-8 -*-
# Generated by Django 1.11.26 on 2019-11-06 09:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('body', models.TextField()),
                ('date_created', models.DateTimeField(auto_now=True)),
                ('date_editted', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]