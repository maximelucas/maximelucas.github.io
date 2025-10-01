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

### [XGI](https://xgi.readthedocs.io/)
**XGI** (compleX Group Interactions) is a Python package for the analysis and modeling of networks with higher-order interactions, generalizing network science tools to hypergraphs and simplicial complexes.  

(*Co-creator and co-lead developer*)  

[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/xgi-org/xgi)  
[![PyPI](https://img.shields.io/pypi/v/xgi?color=blue&label=PyPI)](https://pypi.org/project/xgi/)  
[![Docs](https://img.shields.io/badge/Docs-Read-blue)](https://xgi.readthedocs.io/)  

---

### [HyperSync](https://github.com/maximelucas/hypersync)
**HyperSync** provides models and tools to study synchronization processes on hypergraphs, with a focus on higher-order generalizations of the Kuramoto model.  

(*Creator and lead developer*)  

[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/maximelucas/hypersync)  

---

### [Phasik](https://github.com/tbouab/phasik)
**Phasik** is a Python package for analyzing temporal protein–protein interaction networks and inferring cell-cycle phases.  

(*Creator and lead developer*)  

[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/tbouab/phasik)  
[![PyPI](https://img.shields.io/pypi/v/phasik?color=blue&label=PyPI)](https://pypi.org/project/phasik/)  

---

### [AMCOS Booklet](https://github.com/maximelucas/amcos_booklet)
**AMCOS Booklet** is a set of lecture notes and teaching material for nonlinear dynamics and complex systems, developed as part of the AMCOS network.

(*Creator*)  

[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)](https://github.com/maximelucas/amcos_booklet)  

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