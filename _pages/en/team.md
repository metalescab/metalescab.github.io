---
page_id: team
layout: page
title: team
lang: en
permalink: /team/
# description: A growing collection of your cool team.
nav: true
nav_order: 3
display_roles: [inv, postdoc, doc, master, grado, tec]
toc:
  sidebar: right
---

{% include team_size.liquid %}

<!-- pages/team.md -->
<div class="projects">
  {% if site.enable_member_roles and page.display_roles %}
    <!-- Display categorized team -->
    {% for role in page.display_roles %}
      <a id="{{ site.data[site.active_lang].strings.roles[role] }}" href=".#{{ site.data[site.active_lang].strings.roles[role] }}">
        <h2 class="role">{{ site.data[site.active_lang].strings.roles[role] }}</h2>
      </a>
      {% assign categorized_team = site.team | where: "role", role %}
      {% assign sorted_team = categorized_team | sort: "role" %}
      <!-- Generate cards for each member -->
        <div class="grid">
          {% for member in sorted_team %}
            {% include team.liquid %}
          {% endfor %}
        </div>
    {% endfor %}
  {% else %}
    <!-- Display team without roles -->
    {% assign sorted_team = site.team | sort: "first_name" %}
    <!-- Generate cards for each member -->
      <div class="grid">
        {% for member in sorted_team %}
          {% include team.liquid %}
        {% endfor %}
      </div>
  {% endif %}
</div>
