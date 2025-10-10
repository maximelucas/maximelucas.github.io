---
layout: page
permalink: /repositories/
title: code
description: 
nav: true
nav_order: 4
---

Open and reproducible code is crucial for open science. All code associated with my published research is available on my [GitHub](https://github.com/maximelucas) or through the associated papers. In addition, I contribute to several open-source projects, in particular:  

---

### [xgi](https://xgi.readthedocs.io/)
XGI (compleX Group Interactions) is a Python package for the analysis and modeling of networks with higher-order interactions, generalizing network science tools to hypergraphs and simplicial complexes.  

(*Co-creator and co-lead developer*)  

[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/xgi-org/xgi) 
[![Docs](https://img.shields.io/badge/Docs-Read-blue)](https://xgi.readthedocs.io/) 
![GitHub forks](https://img.shields.io/github/forks/xgi-org/xgi) 
![GitHub Repo stars](https://img.shields.io/github/stars/xgi-org/xgi)

---

### [hypersync](https://github.com/maximelucas/hypersync)
HyperSync is Python code that provides models and tools to study synchronization processes on hypergraphs, with a focus on higher-order generalizations of the Kuramoto model. It builds on the XGI's capabilities for higher-order networks. 

(*Creator and lead developer*)  

[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/maximelucas/hypersync)  

---

### [phasik](https://gitlab.com/habermann_lab/phasik)
Phasik is a Python package designed to infer temporal phases in temporal networks. It also provides functions to build, analyse, and visualise temporal networks from time series data.   

(*Creator and lead developer*)  

[![GitLab](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://gitlab.com/habermann_lab/phasik) 
[![Docs](https://img.shields.io/badge/Docs-Read-blue)](https://phasik.readthedocs.io) 

---

### [amcos_booklet](https://github.com/maximelucas/amcos_booklet)
AMCOS Booklet is a LaTeX template for scientific conference booklet, or obok of abstracts. It is also available on [latextemplates.com](https://www.latextemplates.com/template/conference-booklet) with the option to open it directly in Overleaf.

(*Creator*)  

[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/maximelucas/amcos_booklet) 
![GitHub forks](https://img.shields.io/github/forks/maximelucas/amcos_booklet) 
![GitHub Repo stars](https://img.shields.io/github/stars/maximelucas/amcos_booklet)

---



<!-- {% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---
{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
 -->