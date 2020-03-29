---
layout: page
title: Project 1
description: Synchronisation with time-varying parameters
img: 
---

*Page under construction...*



This page is about my work on synchronisation of networks of oscillators with time-varying parameters. Living systems need to interact and exchange with their environment in order to stay alive: they are thermodynamically open. In addition, this exchange is not constant. As an example, considering how our whole body depends on the blood circulation, which is driven by the ever-chaning frequency of our heartbeat. The time-variability of natural rhythms, and how living systems cope with it to stay alive, motivated our studies. This was my PhD project, and you can find more information about it in the references below. 

More formally, an example system we considered is the following:
$$ \dot \theta_i = \omega + D \sum_{j=1}^N A_{ij} \sin(\theta_j - \theta_i) + \gamma \sin(\theta_i - \theta_0(t)) $$ 

which we analysed by doing performing a linear stability analysis, among other things.

#### References

{% bibliography -f papers -q @*[project=nonautonomous_sync] %}
