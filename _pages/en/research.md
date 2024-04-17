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

<div class="post">
    {%- for line in site.research -%}
        <h4><a href="{{ line.name }}">{{ line.name }}</a></h4>
    {%- endfor -%}
</div>