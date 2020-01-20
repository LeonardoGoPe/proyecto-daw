import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE","BaseDatos1.settings")

import django

django.setup()

import random
from MiApp.models import Foto, Regla, Persona, Lugar, Noticias, Comentario
from faker import Faker

fakegen = Faker()

def populate():
	url1="/Recursos/drpatas.jpg"
	url2="/Recursos/forestal.jpg"
	url3="/Recursos/malecon.jpg"
	url4="/Recursos/lineal.jpg"
	url5="/Recursos/linealK.jpg"
	url6="/Recursos/citypet.png"
	url7="/Recursos/machala.jpg"

	foto1 = Foto.objects.get_or_create(url=url1);
	foto2 = Foto.objects.get_or_create(url=url2);
	foto3 = Foto.objects.get_or_create(url=url3);
	foto4 = Foto.objects.get_or_create(url=url4);
	foto5 = Foto.objects.get_or_create(url=url5);
	foto6 = Foto.objects.get_or_create(url=url6);
	foto7 = Foto.objects.get_or_create(url=url7);

	regla1="recoger desechos"
	regla2="cerrado de noche"
	regla3="cerrado de mañana"
	regla4="solo razas pequeñas"

	reglaobj1=Regla.objects.get_or_create(descripcion=regla1)
	reglaobj2=Regla.objects.get_or_create(descripcion=regla2)
	reglaobj3=Regla.objects.get_or_create(descripcion=regla3)
	reglaobj4=Regla.objects.get_or_create(descripcion=regla4)

	rol1="admin" 
	rol2="usuario"

	"""
	cedula sera 1 auto increment
	direccion  a b c ...."""
	nombre1="Matheus"
	nombre2="Javier"
	nombre3="Leonardo"
	nombre4="Allan"
	nombre5="Cindy"

	"""correo sera nombre+@gmail.com
	"""
	correo="gmail.com"

	tipo1="Parque"
	tipo2="Veterinaria"
	tipo3="Tienda"
	""" descomentar al correr la primera vez
	persona1=Persona.objects.get_or_create(cedula="1", direccion=fakegen.address(), nombre_completo=nombre1, correo=nombre1+correo, contrasena=123)
	persona2=Persona.objects.get_or_create(cedula="2", direccion=fakegen.address(), nombre_completo=nombre2, correo=nombre2+correo, contrasena=123)
	persona3=Persona.objects.get_or_create(cedula="3", direccion=fakegen.address(), nombre_completo=nombre3, correo=nombre3+correo, contrasena=123)
	persona4=Persona.objects.get_or_create(cedula="4", direccion=fakegen.address(), nombre_completo=nombre4, correo=nombre4+correo, contrasena=123)
	persona5=Persona.objects.get_or_create(cedula="5", direccion=fakegen.address(), nombre_completo=nombre5, correo=nombre5+correo, contrasena=123)
	"""
	"""
	Parque
	Veterinaria
	Tienda

	"""
	lugar1=Lugar.objects.get_or_create(tipo="Veterinaria", descripcion="Dr. Patas, en donde atienden las 24 horas del día, con un servicio de calidad para nuestras mascotas", direccion=fakegen.address(), latitud=-2.210315,longitud=-79.891306,puntuacion=8);
	lugar1.foto_set(Foto.objects.get(id=1))
	descripcion=fakegen.text();

	direccion=fakegen.address();

	lat=random.randrange(9999);

	puntuacion=random.randrange(10);


	titulo=fakegen.name();

if __name__ =="__main__":
	print("populating")
	populate()
	print("complete")