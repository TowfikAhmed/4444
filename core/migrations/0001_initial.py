# Generated by Django 4.1.6 on 2023-03-22 08:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Bank',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account', models.CharField(max_length=200)),
                ('routing', models.CharField(max_length=200)),
                ('worker', models.CharField(max_length=200)),
                ('status', models.CharField(choices=[('LIVE', 'LIVE'), ('REUSE', 'REUSE'), ('USED', 'USED'), ('FAILED', 'FAILED')], default='READY', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Proof',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('APPROVE', 'APPROVE'), ('FAILED', 'FAILED'), ('PENDING', 'PENDING')], default='PENDING', max_length=20)),
                ('sc', models.ImageField(blank=True, null=True, upload_to='sc/')),
                ('bank', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.bank')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('ADMIN', 'ADMIN'), ('WORKER', 'WORKER')], default='WORKER', max_length=10)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='bank',
            name='group',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.group'),
        ),
        migrations.AddField(
            model_name='bank',
            name='history',
            field=models.ManyToManyField(to='core.profile'),
        ),
    ]
