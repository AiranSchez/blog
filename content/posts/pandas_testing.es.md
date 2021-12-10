+++
date = 2021-12-10T00:00:00Z
description = "Pequeña introducción a snapshot testing y a cómo testear pandas con pytest"
draft = true
featuredImage = ""
slug = "/pandas /testing "
tags = ["python", "pytest", "testing", "pandas"]
template = "blog post"
title = ""

+++
## Introducción

En mi corta experiencia en el desarrollo de software he aprendido que la mejor información es aquella que puedes leer sin mucho esfuerzo y entenderla.

Por ello me he decidido a hacer una mini introducción a lo que hacemos casi a diario en Clarity.AI con el stack tecnológico que manejamos (Python, Pandas y pytest)

### Pandas y snapshot testing

Pandas es una librería de python con la que podemos crear estructuras de datos (Dataframes) y realizar todo tipo de operaciones que se nos ocurran. 

    animales = ['perro','gato','cocodrilo']
    acciones = ['lame','muerde','ignora']
    
    dataframe = pd.Dataframe({"habitantes": animales, "acciones": acciones })

Con esto ya tenemos definida una estructura de columnas y filas con las que podemos hacer de todo. 

Generalmente a la hora de trabajar con miles de datos es posible que quieras comprobar en más de una ocasión si hay algunos valores que de la noche a la mañana te han cambiado porque el proveedor de datos ha tocado lo que no tenía que tocar o no notifica. Para ello existen varias estrategias y una de ellas es el snapshot testing.

Snapshot testing como su nombre indica es comparar si el resultado actual encaja con el resultado que esperas de unos datos correctos. 

     class TestUtils: 
    	def replace_values_in_columns(self):
        	

### Test básico con pytest 

    class TestUtils: 
    	def replace_values_in_columns(self):
        	

### Parametrize 

### Patch y fixture