---
layout: page
permalink: /publications/
title: publications
description: 
years: [2019, 2018, 2014]
---

## Preprints



## Publications in peer-reviewed journals

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

## Theses

{% bibliography -f theses %}
