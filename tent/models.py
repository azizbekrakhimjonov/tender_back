from django.db import models

class Tender(models.Model):
    Description = models.CharField(max_length=255)
    Weight = models.DecimalField(max_digits=10, decimal_places=2)
    Volume = models.DecimalField(max_digits=10, decimal_places=2)
    VeicleType = models.CharField(max_length=100)
    Veicle = models.CharField(max_length=100)
    Value = models.DecimalField(max_digits=15, decimal_places=2)
    Origin = models.CharField(max_length=255)
    Destination = models.CharField(max_length=255)
    DeliveryDate = models.DateField()
    PickupDate = models.DateField()
    SpecialRequirements = models.TextField(blank=True, null=True)
    AditionalNotes = models.TextField(blank=True, null=True)
    Incoterms = models.CharField(max_length=100)

    def __str__(self):
        return self.Description