---
layout: page
title: collab net
description: Interactive visualisation of my collaboration network
img:
importance: 4
category: other
---


{{ site.url }}assets/viz_collab_net/forceLayoutTooltip.js"


<style>

.links line {
  stroke: #999;
  stroke-opacity: 0.6;
}

.nodes circle {
  stroke: #000;
  stroke-width: 1.5px;
}


div.tooltip {
    position: absolute;
    text-align: center;
    padding: 2px;
    font: 20px sans-serif;
    background: lightgray;
    border: 0px;
    border-radius: 8px;
    pointer-events: none;
}


}

</style>

<!--into this svg the illustration will be drawn -->


<svg width="500" height="500"></svg>


<!--  we call the d3 library -->
<script src="https://d3js.org/d3.v4.min.js"></script>
<!-- <script type="text/javascript" src="../assets/viz_collab_net/d3.v4.min.js"></script> -->


<!--  this script does all the actual work -->
<script type="text/javascript" src="{{ site.url }}assets/viz_collab_net/forceLayoutTooltip.js"></script>


### did it work? 