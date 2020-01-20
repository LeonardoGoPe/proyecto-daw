from django.db import models

# Create your models here.

class Foto (models.Model):
    url = models.CharField(max_length=200, help_text="Ingrese el URL de la imagen")

    def __str__(self):
        """
        String que representa al objeto Rol
        """
        return self.url
    
class Regla (models.Model):

    descripcion = models.CharField(max_length=150, help_text="Ingrese su descripcion")
    def __str__(self):
        """
        String que representa al objeto Rol
        """
        return self.descripcion



class Persona(models.Model):

    cedula = models.CharField(max_length=10, primary_key=True)
    direccion= models.CharField(max_length=100, help_text="Ingrese su direccion")
    nombre_completo = models.CharField(max_length=100 , help_text="Ingrese su nombre completo")
    correo = models.EmailField(max_length=100, help_text="Ingrese su direccion")
    fecha_registro = models.DateField(null=True, blank=True)
    contrasena =  models.CharField(max_length=30 , )

    rol = models.CharField(max_length=20, default="usuario", help_text="Aqui van los Roles")

    def __str__(self):
        """
        String que representa al objeto Persona
        """
        return self.nombre_completo



class Lugar(models.Model):

    tipo = models.CharField(max_length=10, primary_key=True)
    descripcion= models.CharField(max_length=100, help_text="Ingrese su direccion")
    direccion = models.CharField(max_length=100 , help_text="Ingrese su nombre completo")

    latitud = models.IntegerField()
    longitud =  models.IntegerField()
    puntuacion = models.IntegerField()
    """
    regla = models.ManyToManyField(Regla,null=True, help_text="Seleccione una regla para este Lugar")
    """
    foto = models.ManyToManyField(Foto, help_text="Seleccione una regla para este Lugar")

    def __str__(self):
        """
        String que representa al objeto Lugar
        """
        return self.direccion

class Noticias(models.Model):

    titulo = models.CharField(max_length=50, help_text="Ingrese el titulo de la noticia")
    descripcion = models.CharField(max_length=800, help_text="Ingrese su descripcion")
    fecha = models.DateField(null=True, blank=True)

    persona = models.ForeignKey(Persona, on_delete=models.SET_NULL, null=True)
    lugar = models.ForeignKey(Lugar, on_delete=models.SET_NULL, null=True)

    foto = models.ManyToManyField(Foto, help_text="Seleccione una regla para este Lugar")



    def __str__(self):
        """
        String que representa al objeto Rol
        """
        return self.titulo


class Comentario(models.Model):

    fecha = models.DateField(null=True, blank=True)
    descripcion = models.CharField(max_length=200, help_text="Ingrese su descripcion")

    persona = models.ForeignKey(Persona, on_delete=models.SET_NULL, null=True)
    lugar = models.ForeignKey(Lugar, on_delete=models.SET_NULL, null=True)

    foto = models.ManyToManyField(Foto, help_text="Seleccione una regla para este Lugar")

    def __str__(self):
        """
        String que representa al objeto Rol
        """
        return self.descripcion