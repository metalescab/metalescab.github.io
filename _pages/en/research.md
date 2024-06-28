---
page_id: research
lang: en
layout: page
title: research
permalink: /research/
description: Our group develop different research lines.
nav: true
nav_order: 4
# display_categories: [work, fun]
# horizontal: true
---






<ul class="post-list">
  {% assign research_lines = site.research %}
    
  {% for line in research_lines %}

  {% assign read_time = line.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
  
  {% assign tags = line.tags | join: "" %}
  {% assign categories = line.categories | join: "" %}
  {% assign people = line.people | join: "" %}

  <li>

  {% if line.thumbnail %}

  <div class="row">
    <div class="col-sm-9">
  {% endif %}
          <h3>
          {% if line.redirect == blank %}
            <a class="post-title" href="{{ line.url | relative_url }}">{{ line.title }}</a>
          {% elsif line.redirect contains '://' %}
            <a class="post-title" href="{{ line.redirect }}" target="_blank">{{ line.title }}</a>
          {% else %}
            <a class="post-title" href="{{ line.redirect | relative_url }}">{{ line.title }}</a>
          {% endif %}
        </h3>
        <p>{{ line.description }}</p>
        <p class="post-tags">
            {% if tags != "" %}
            &nbsp; &middot; &nbsp;
              {% for tag in line.tags %}
              <a href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl}}">
                <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a> &nbsp;
                {% endfor %}
            {% endif %}

            {% if categories != "" %}
              &nbsp; &middot; &nbsp;
              {% for category in line.categories %}
              <a href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl}}">
                <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a> &nbsp;
                {% endfor %}
            {% endif %}
          
            {% if people != "" %}
            &nbsp; &middot; &nbsp;
              {% for people in line.people %}
              <a href="{{ people | slugify | prepend: '/blog/category/' | prepend: site.baseurl}}">
                <i class="fa-solid fa-user-large fa-sm"></i> {{ people }}</a> &nbsp;
                {% endfor %}
            {% endif %}
      </p>

  {% if line.thumbnail %}

   </div>

   <div class="col-sm-3">
      <img class="card-img" src="{{line.thumbnail | relative_url}}" style="object-fit: cover; height: 90%" alt="image">
    </div>
  </div>
{% endif %}
    </li>

    {% endfor %}

  </ul>