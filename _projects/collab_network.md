---
layout: page
title: collab net
description: interactive visualisation of my collaboration network
img:
importance: 1
category: other
---

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

In this visualisation, my academic publications are represented by red nodes and my co-authors by grey nodes. 
Each person is linked to the publications they are a co-author of.

This was inspired by [Florian Klimm's code](https://github.com/floklimm/collaborationNetworkIllustration).

<!--into this svg the illustration will be drawn -->
<svg width="500" height="500"></svg>


<!--  we call the d3 library -->
<script src="https://d3js.org/d3.v4.min.js"></script>
<!-- <script type="text/javascript" src="../assets/viz_collab_net/d3.v4.min.js"></script> -->


<!--  this script does all the actual work -->
<script type="text/javascript" src="/assets/viz_collab_net/forceLayoutTooltip.js"></script>
