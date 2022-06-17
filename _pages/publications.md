---
layout: page
permalink: /publications/
title: publications
description: 
nav: true
order: 2
---
<!-- _pages/publications.md -->

The symbol '\*' indicates that the authors contributed equally.  

## preprints

<div class="publications">
{% bibliography -f papers -q @unpublished %}
</div>

## journal articles

<div class="publications">
{% bibliography -f papers -q @article %}
</div>

## book chapters

<div class="publications">
{% bibliography -f papers -q @incollection %}
</div>

## theses

<div class="publications">
{% bibliography -f papers -q @phdthesis @mastersthesis %}
</div>


