---
layout: page
title: Time-varying sync
description: sync with time-varying parameters
img: /assets/img/logo_tv_sync.png
importance: 5
category: work
---

*Synchronisation* is a well-known phenomenon that plays a key role in physics, biology, and neuroscience, to cite a few. A typical example is when people in an audience clap in unison, because of their (audio and visual) *interactions*, or when heart cells synchronise to make the heart beat. A lot of theoretical work exists on synchronisation, but mostly considers the frequencies of each unit to be constant. In nature, and in living systems in particular, however, *frequencies change all the time*. Imagine how our heartbeat changes when we are calm, stressed, or scared. 

This is what motivates our studies on *synchronisation* between oscillators *with time-varying parameters*. In particular, in different studies, we consider time-varying frequencies, coupling strenghts, and network structure. 

More formally, an example system we considered is the following: a network driven by an oscillator with a time-varying frequency,

$$ \dot \theta_i = \omega + D \sum_{j=1}^N A_{ij} \sin(\theta_j - \theta_i) + \gamma \sin(\theta_i - \theta_0(t)) , $$ 

which we analysed by doing performing a linear stability analysis, among other things.

This was my PhD project, and you can find more information about it in the references below. 

#### References

##### Journal articles

<div class="publications">
{% bibliography -f papers -q @article[project=nonautonomous_sync] %}
</div>

##### Book chapters 

<div class="publications">
{% bibliography -f papers -q @incollection[project=nonautonomous_sync] %}
</div>

##### PhD thesis

<div class="publications">
{% bibliography -f papers -q @phdthesis[project=nonautonomous_sync] %}
</div>
