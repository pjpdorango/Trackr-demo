from django.db.models import * 

# Create your models here.

class User(Model):
    # -----FIELDS-----
    name: CharField = CharField(max_length=25)

    def __str__(self) -> str:
        return self.name

class Subject(Model):
    # -----FIELDS-----
    name: CharField = CharField(max_length=25)
    grade: FloatField = FloatField()
    user: ForeignKey = ForeignKey(User, on_delete=CASCADE, null=True, related_name="subjects")


    # TODO add assignments

    def __str__(self) -> str:
        return self.name