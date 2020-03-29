---
layout: page
permalink: /publications/
title: publications
description: 
years: [2019, 2018, 2014]
---

## preprints

{% bibliography -f preprints %}

## publications

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

## theses

{% bibliography -f theses %}
