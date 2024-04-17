---
page_id: research
lang: es
layout: page
title: investigación
permalink: /investigacion/
description: Nuestro grpo desarrolla diferentes líneas de investigación.
nav: true
nav_order: 4
# display_categories: [work, fun]
# horizontal: true
---

<div class="post">
    {%- for line in site.research -%}
        <h4><a href="{{ line.name }}">{{ line.name }}</a></h4>
    {%- endfor -%}
</div>