from django.db import models

class Contact(models.Model):
    ROOM_CHOICES = [
        ('6-Bed Shared Dorm', '6-Bed Shared Dorm'),
        ('4-Bed Shared Dorm', '4-Bed Shared Dorm'),
        ('2-Bed Shared Dorm', '2-Bed Shared Dorm'),
        ('Private Single Room', 'Private Single Room'),
        ('Need Guidance', 'Need Guidance'),
    ]

    full_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True, null=True)
    district = models.CharField(max_length=100)
    room_type = models.CharField(max_length=100, choices=ROOM_CHOICES)
    move_in_date = models.DateField(blank=True, null=True)
    message = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name