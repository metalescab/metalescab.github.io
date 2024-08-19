---
layout: post
title: líneas de investigación
date: 2024-08-16 00:32:13
description: como poner inforación de una línea de investigación
tags: formatting code
categories: sample-posts
tabs: false
featured: true
---

Todos los archivos estan escritos en formato `markdown`, que básicamente es texto plano que permite facilmente ser formateado fácilmente. [(ver información sobre markdown)](https://www.markdownguide.org/basic-syntax/). Por ejemplo, Whapsapp o Telegram en los telefonos permiten escribir en este formato. Así, si queresmos escribir en **negrita** simplemente escribimos `**negrita**`, o en *cursiva* con un sólo asterisco `*cursiva*`. Se pueden escribir formulas matemáticas, tablas, listas, etc. Los archivos markdown llevan la extensión `.md` (nombre-del-archivo.md)

Por lo general, los archivos llevan un encabezado o "front matter". La líneas de ivestigación tiene un front matter con la siguiente estructura:

```yml
---
layout: research-line
page_id: fretting
title: "Fretting Damage"
lang: en
thumbnail: /assets/img/research/fretting-thumbnail.png
description: "Fretting is a mechanical condition where small amplitude movements between contacting parts cause localized damage like cracks, wear, and oxidation, reducing component lifespan. Research focuses on designing experimental devices and using microscopy and profilometry for damage characterization."
people:
  - sergio-soria
  - marcos-bergant
  - alejandro-yawny
techniques:
  - Mechanical testing with servohydraulic machines and devices developed in the division.
  - Optical interferometry profilometry.
  - Optical microscopy.
  - Scanning Electron Microscopy (SEM).
  - Transmission Electron Microscopy (TEM).
---
```
En este ejemplo, se puede ver que se define el layout, el título, la descripción, idioma, una imagen descriptiva, las personas que trabajan y las técnicas que se utilizan. Esta información es procesada en diferentes partes de la agina web. Por ejemplo, la versión en español e ingles deben tener el mismo `page_id`, y de esa manera al cambiar de idioma el sistema sabe que es lo que tiene que mostrar (usando el page_id). Noten que el nombre de las personas que trabajan en cada línea de investigación tiene la forma `nombre-apellido` y eso será el `page_id`de cada persona.

El front matter comienza y termina con `---`. Luego, el texto debajo será considerado como "contenido" y se mostrará en el cuerpo del texto. Las imágenes de de cada línea de investigación seran nombradas de acuerdo el `page_id` seguidas de un número (ej: si page_id: fretting, entonces las imagenes serán fretting-1.jpg, fretting-2.gif, fretting-3.png, etc). Para incluir imágenes debemos insertar un codigo como el siguiente:

```html
{% raw %}
<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid 
        loading="eager" 
        path="/assets/img/research/fretting-1.png" 
        class="img-fluid rounded z-depth-1" 
        zoomable=true %}
    </div>
</div>
<div class="caption">
    (a) Detail of the contact configuration in a _fretting_ test of an Inconel 690 tube against two pieces of type 304L stainless steel. (b) Wear in the tube observed by optical microscopy. (c) Cracks in the tube observed by scanning electron microscopy. In both cases the damage was originated in the same _fretting_ conditions but at different number of cycles.
</div>
{% endraw %}
```
En este ejemplo, se muestra una imagen con un texto de descripción debajo. En caso de poner más de una imagen, se puede poner de la siguiente manera:

```html
{% raw %}
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid 
        loading="eager" 
        path="/assets/img/research/fretting-2.png" 
        class="img-fluid rounded z-depth-1" 
        zoomable=true %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid 
        loading="eager" 
        path="/assets/img/research/fretting-3.png" 
        class="img-fluid rounded z-depth-1" 
        zoomable=true %}
    </div>
</div>
<div class="caption">
    Testo del caption
</div>
{% endraw %}
```
Pueden notar que en este ejemplo, hay dos imágenes y cada una se encuentra dentro de un `<div> </div>`. Respecto al tamaño de las imágenes, el sistema divide el ancho del texto en 12 columnas. Asi, en el último ejemplo la primer imagen fretting-2.png ocupa 8 de las 12 colunas y se lo indicamos con `col-sm-8`, mientras que la imagen fretting-3.png ocupa las 4 restantes y se lo indicamos con `col-sm-4`. En el primer ejemplo, notarán que la imagen ocupaba solamente 9 de las 12 columnas y en ese caso lo indicabamos con `col-sm-9`. En ese caso, la imagen no ocupa el ancho total del texto. IMPORTANTE: em caso de colocar dos o mas imagenes, es importante considerar que tengan el mismo alto, y el ancho sea proporcional a 1/12. Pueden ver mas información de la imagenes en el siguiente post [imagenes]({% post_url en/2024-08-15-more-img %})
