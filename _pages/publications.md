---
layout: page
permalink: /publications/
title: publications
description: 
years: [2021, 2020, 2019, 2018, 2014]
---

## preprints

{% bibliography -f papers -q @unpublished %}

## publications

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @article[year={{y}}]* %}
{% endfor %}

## theses

{% bibliography -f papers -q @phdthesis %}
