# Como estamos organizando el sitio de metales

Cuando se hacen cambios y se suben a GitHub, se sube todo a la rama `maim`. Luego, automaticamente cuando se genera el sitio web, se sobreescribe la rama`gh-pages`.


# Estructra del sitio

Dado que tenemos el sitio en español y en ingles, las carpetas LANG corresponden a cada idioma: es, en. Así, el contenido debe estar duplicado en cada idioma.

```txt
.
├── 📂 assets/: contains the assets that are displayed in the website
│   └── 📂 json/
│       └── 📄 resume_LANG.json: CV in JSON format (https://jsonresume.org/)
├── 📂 _bibliography/
│   └── 📄 papers.bib: bibliography in BibTeX format
├── 📄 _config.yml: the configuration file of the template
├── 📂 _data/: contains some of the data used in the template
│   ├── 📂 LANG/: data for the LANG version. Must have one for each language defined in _config.yml
│   │   ├── 📄 cv.yml: CV in YAML format, used when assets/json/resume_LANG.json is not found
|   |   └── 📄 strings.yml: localized variables (placeholders). Must have one for each language defined in _config.yml
│   └── 📄 repositories.yml: users and repositories info in YAML format
├── 📂 _includes/: contains code parts that are included in the main HTML file
│   └── 📄 news.liquid: defines the news section layout in the about page
├── 📂 _layouts/: contains the layouts to choose from in the frontmatter of the Markdown files
├── 📂 _news/: the news that will appear in the news section in the about page
│   └── 📂 LANG/: must have one for each language defined in _config.yml
├── 📂 _pages/: contains the pages of the website
│   └── 📂 LANG/: must have one for each language defined in _config.yml
|       └── 📄 404.md: 404 page (page not found)
├── 📂 _posts/: contains the blog posts
│   └── 📂 LANG/: must have one for each language defined in _config.yml
├── 📂 _projects/: contains the projects
│   └── 📂 LANG/: must have one for each language defined in _config.yml
└── 📂 _sass/: contains the SASS files that define the style of the website
    ├── 📄 _base.scss: base style of the website
    ├── 📄 _cv.scss: style of the CV page
    ├── 📄 _distill.scss: style of the Distill articles
    ├── 📄 _layout.scss: style of the overall layout
    ├── 📄 _themes.scss: themes colors and a few icons
    └── 📄 _variables.scss: variables used in the SASS files
```

# Blog - Posts

Los posts, en la sección blog, están ordenados automaticamente por fecha, y el nombre debe ser del estilo: `yyyy-mm-dd-text.md`

# permalink, page_id y lang

Al usar el plugin `jekyll-polyglot` para manejar los idiomas, es bueno usar en el front matter del documento que querramos que se ajuste el permalink al momento de cambiar el idioma los siguientes `key:values`. Con `lang: es` o `lang: en` esta claro que definimos el idioma el idioma. Con `page_id` le indicamos que use se refiera al documento en el otro idioma. Ej:

```yml
---                       
layout: default           
page_id: fretting         
title: "Daño por Fretting"
lang: es                  
people:                   
  - sergio-soria          
  - marcos-bergant        
  - alejandro-yawny       
---                       
```

```yml
---                       
layout: default           
page_id: fretting         
title: "Fretting Damage"  
lang: en                  
people:                   
  - sergio-soria          
  - marcos-bergant        
  - alejandro-yawny       
---                       
```

Notar que cambia el `lang`y el `title`, pero ambas tienen el mismo `page_id`

# Collections

Las colecciones, a diferencia de los posts no siguen un orden automático. Debemos indicarlo nosotros. Por ejemplo, en `config.yml` configuramos las collecciones. En nuestro caso, las carpetas `_team`y `_research` son colecciones que contienen a los miembros del grupo y a las lineas de investigación.

## Team y Members

Cada miembro del grupo tiene un archivo .md con su información, en cada carpeta de idioma. En el encabezado o frontmatter queda algo así:

```yml
---
name: "Adriana Condó"
page_id: adriana-condo
picture: /assets/img/team/adriana-condo.jpg
layout: profile
lang: en
role: inv
position: "Researcher Independiente del CONICET"
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
email: adriana@cab.cnea.gov.ar

social:
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



### Research Lines

{% include research-line-in-people.liquid %}


### Publications
```
Noten el formato de `page_id`, que es igual al nombre de la imagen. Esto lo usaremos luego para asociar cada miembro con una linea de investigación y viceversa. Tambien es importante el key `role`, donde puede tner valores como inv, doc, tec. (esto lo podriamos mejorar) Con esto lo podemos agrupar los miembros del grupo.
En `social:` podemos poner esas u otras redes sociales. En `config.yml` estan las diferentes opciones para el sitio en general, pero tambien las podriamos usar para cada miembro. En la carpeta `_includes` está el archivo `social.liquid` donde estan los iconos y las direcciones de las redes soportadas, y de manera similar se pueden agregar las que se necesiten.

Para relacionar a cada miembro con las diferentes lineas de investigación incluimos la linea de codigo:

```
{% include research-line-in-people.liquid %}
``` 

## Research Lines

Dentro de la carpeta `_research` estan cada una de las líneas de investigación. Cada una, tiene un front matter como:

```yml
---
layout: default
page_id: aceros-base-fe-mn
title: "Transformaciones martensíticas en aceros con base Fe-Mn"
lang: es
thumbnail: 
people:
  - adriana-condo
  - armando-guillermet
  - lina-guerrero
  - paulo-laroca
  - marcos-sade
---                     
```
Notemos que cada linea tiene el listao de las personas que trabajan en esa línea. Aquí, el nombre lo ponemos de la misma forma que el `page_id` de cada miembro (Ej, `adriana-condo`).
En `thumbnail` podemos poner una imagen para mostrar en el listado general de líneas.
En el cuerpto del texto, incluimos la siguiente linea para mostrar los miembros del grupo que trabajan en cada línea de investigación:
```
{% include people-in-research-line.liquid %}
```
``
## Relación Research-Team

Para poder relacionar cada miembro del grupo con cada linea de investigación, usamos los key `people` en linea de investigación y `page_id` en cada miembro.

Para listar las linea de investigación de cada persona usabamos
```
{% include research-line-in-people.liquid %}
``` 
Ese archivo esta dentro de `_includes`, y de manera simplificada tiene la forma:
```
{% assign research_lines = site.research %}

<ul>
  {% for research_line in research_lines %}
    {% for person in research_line.people %}
      {% if person == page.page_id %}
        <li>{{ research_line.title }}</li>
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>
```
Con esto, solamente se muestra el nombre de cada línea ... hay que mejorarlo!

Para mostrar las personas que trabajan en cada linea usando 
```
{% include people-in-research-line.liquid %}
```
similar al anterior, se encuentra en `_includes` y tiene la forma:

``` 
{% assign members = site.team %}
{% assign people_working = page.people %}

<div class="projects">
    <div class="grid">
        {% for person in people_working %}
            {% for member in members %}
              {% if person == member.page_id %}
                {% include team.liquid %}
              {% endif %}
            {% endfor %}
          {% endfor %}
    </div>
</div>
```
Aquí ya lo tenemos mas elaborado, y mostramos de manera similar a como lo hacemos en listado general del grupo.

