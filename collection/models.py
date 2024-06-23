from django.db.models import * 

# Create your models here.
class Subject(Model):
    # -----FIELDS-----
    name: CharField = CharField(max_length=25)
    grade: FloatField = FloatField()
    # TODO add assignments

    def __str__(self) -> str:
        return self.name