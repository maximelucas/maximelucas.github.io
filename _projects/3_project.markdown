---
layout: page
title: Project 3
description: The cell cycle as a temporal network 
img:
---

<script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"></script>


My current project at Aix-Marseille University. 

<div id="sketch"> </div>


Test 8


<script>
function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("sketch");
  let color = 0;
}

function draw() {
  if (mouseIsPressed) {
  	color += deltaTime / 30;
    fill(color);
    stroke(255 - color);
  } else {
  	color = 0;
    fill(255);
    stroke(0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
</script>
