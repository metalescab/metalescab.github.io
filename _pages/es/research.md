---
page_id: research
lang: es
layout: page
title: investigación
permalink: /research/
description: Nuestro grupo desarrolla diferentes líneas de investigación.
nav: true
nav_order: 4
# display_categories: [work, fun]
horizontal: true
---

<!-- pages/research.md -->
<div class="projects">
{% if site.enable_line_categories and page.display_categories %}
  <!-- Display categorized research -->
  {% for category in page.display_categories %}
  <a id="{{ site.data[site.active_lang].strings.categories[category] }}" href=".#{{ site.data[site.active_lang].strings.categories[category] }}">
    <h2 class="category">{{ site.data[site.active_lang].strings.categories[category] }}</h2>
  </a>
  {% assign categorized_research = site.research | where: "category", category %}
  {% assign sorted_research = categorized_research | sort: "importance" %}
  <!-- Generate cards for each line -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1">
    {% for line in sorted_research %}
      {% include research_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for line in sorted_research %}
      {% include research.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display research without categories -->

{% assign sorted_research = site.research | sort: "importance" %}

  <!-- Generate cards for each line -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1">
    {% for line in sorted_research %}
      {% include research_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for line in sorted_research %}
      {% include research.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
