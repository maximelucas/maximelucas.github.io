---
layout: page
title: .js viz
description: 
img:
importance: 3
category: other
---

<script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"></script>

Page in evolution. Here, I test visuatlisations in p5.js and d3.js.. for now.


<div id="sketch1"> </div>
This is a first test. Play around with it!

<div id="sketch2"> </div>
This is a second test. Play around with it!



<script>
function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("sketch1");
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

<script>
function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("sketch2");
}

function draw() {
  if (mouseIsPressed) {
    fill("red");
    stroke(255 - color);
  } else {
    fill(255);
    stroke(0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
</script>
