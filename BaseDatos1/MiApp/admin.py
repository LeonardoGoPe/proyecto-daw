from django.contrib import admin

# Register your models here.
from .models import Foto, Regla, Rol, Persona, Lugar, Noticias, Comentario

# Register your models here.

admin.site.register(Foto)
admin.site.register(Regla)
admin.site.register(Rol)
admin.site.register(Persona)
admin.site.register(Lugar)
admin.site.register(Noticias)
admin.site.register(Comentario)
