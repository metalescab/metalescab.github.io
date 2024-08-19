---
layout: post
title: perfil de cada miembro del grupo
date: 2024-08-18 00:32:13
description: perfil de cada miembro del grupo
tags: formatting 
categories: sample-posts
tabs: false
featured: true
---

Para procesar, ordenar y mostrar la imaformación de cada miembro del grupo tambien usamos texto en formato `markdown`. 
En este caso, el front matter tiene la siguiente forma:

```yml
---
first_name: "Adriana"
last_name: "Condó"
page_id: adriana-condo
picture: /assets/img/team/adriana-condo.jpg
layout: profile
lang: es
role: inv
position: "Investigadora Independiente del CONICET"
teaching: "Jefe de Trabajos Prácticos del Instituto Balseiro"
location:
  office: "505"
  building: "Edificio de Ciencia de Materiales, Centro Atómico Bariloche"
  address: "Av. Bustillo 9500"
  city: "San Carlos de Bariloche"
  state: "Río Negro"
  country: "Argentina"
  zip-code: R8402AGP
phone: "(+54) 0294 444 5290 interno: 5290"

social:
  email: adriana@cab.cnea.gov.ar
  x_username:
  linkedin_username:
  google_scholar_userid:
  github_username:
  gitlab_username:
  research_gate_profile:
  ordic_id:
  website:

education:
  - "Dra. en Física ... "
  - "Lic. en Física ... "  
---

Aquí describir la biografía

```
Pueden notar que el `page_id` esta compuesto por el primer nombre y el apellido. La imagen lleva como nombre el mismo el `page_id`. Este mismo, se usará en las líneas de investigación para mostrar automaticamente cada miembro de cada línea.

Debajo del `---` ponemos una mini-biografía en forma de texto. La idea es que sea descriptiva, y no el listado "frio" del CV. Pueden tomar una idea en el siguiente [ejemplo](https://metalescab.github.io/es/team/julio-azcarate/).