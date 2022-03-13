---
layout: page
title: Higher-order sync
description: 
img: 
importance: 3
category: work
---


<script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"></script>

*Page under construction..* 

<div id="sketch"> </div>

*Synchronisation* is a well-known phenomenon that plays a key role in physics, biology, and neuroscience, to cite a few. A typical example is when people in an audience clap in unison, because of their (audio and visual) *interactions*, or when heart cells synchronise to make the heart beat. A lot of theoretical work exists on synchronisation, but mostly considers pairwise interactions. 

Evidence suggests, though, that *higher-order* interactions, i.e. between more than two units a time, are important to fully capture complex processes. To study this, we consider generalisations of the Kuramoto mode, where we include interactions terms between two or more oscilators. 

#### References

<div class="publications">
{% bibliography -f papers -q @*[project=higher-order_sync] %}
</div>

<script>
let width;
let height;
let N;
let net;
let d;

function setup() {

  width = 640;
  height = 480;
  let canvas = createCanvas(width, height);
  canvas.parent("sketch");

  net = new Network();
  N = 3; // initial number of nodes
  d = 100; // distance under which to connect nodes

  for (let i = 0; i <= 2; i++) {

    pos = createVector(random(0,width), random(0, height));
    node = new Node(pos);
    net.addNode(node);
  }

  net.update();
  net.display();
}

function draw() {
  background(20);

  if (random(0, 1) < 0.2) {
    net.addNode(new Node());
  }
  net.update();
  net.display();
}

function mouseReleased() {
  pos = createVector(mouseX, mouseY);
  node = new Node(pos);
  net.addNode(node);
  net.update();
  net.display();
}

function distance(node1, node2) {
  let x1 = node1.position.x,
    y1 = node1.position.y,
    x2 = node2.position.x,
    y2 = node2.position.y;
  return dist(x1, y1, x2, y2)
}


class Node {

  constructor() {
    let p = random(0, 1);
    let pos;
    if (p > height / width ) { // left
      pos = createVector(0, random(0, height));
    } else { // top
      pos = createVector(random(0, width), 0);
    }

    let v = random(0.5, 2);
    this.velocity = createVector(v + random(-0.5, 0.5), 2*v);
    this.position = pos;
    this.neighbors = [];

  }

  run() {
    this.position.add(this.velocity);
  }

  isOut() {
    if (this.position.x > width || this.position.y > height) {
      return true;
    } else {
      return false;
    }
  }

  display() {

    stroke("black");
    strokeWeight(1);
    fill(90);
    let r = 15;
    circle(this.position.x, this.position.y, r);
  }

}

class Edge {

  constructor(e1, e2) {
    this.node1 = e1;
    this.node2 = e2;
  }

  display() {
    let x1 = this.node1.position.x,
      y1 = this.node1.position.y,
      x2 = this.node2.position.x,
      y2 = this.node2.position.y;

    
    stroke(100, 100, 200,100);
    strokeWeight(3);
    line(x1, y1, x2, y2);
  }
}

class Triangle {

  constructor(e1, e2, e3) {
    this.node1 = e1;
    this.node2 = e2;
    this.node3 = e3;
  }

  display() {
    let x1 = this.node1.position.x,
      y1 = this.node1.position.y,
      x2 = this.node2.position.x,
      y2 = this.node2.position.y,
      x3 = this.node3.position.x,
      y3 = this.node3.position.y;
     
    strokeWeight(0);
    fill(0, 0, 255, 100);
    triangle(x1, y1, x2, y2, x3, y3);
    }

}

class Network {

  constructor() {
    this.nodes = [];
    this.edges = [];
    this.triangles = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  addTriangle(triangle) {
    this.triangles.push(triangle);
  }

  run() {
    for (let i = 0; i<=this.nodes.length-1; i++) {
      let node = this.nodes[i];
      node.run();

      if (node.isOut()) {
        this.nodes.splice(i, 1); // delete node
      }
    }
  }

  update() {

    // make nodes move
    this.run();

    // upate edges and triangles accordingly
    this.edges = [];
    this.triangles = [];

    // loop through all possible edges
    for (let i = 0; i<= this.nodes.length - 1; i++) {
      for (let j = 0; j < i; j++) {
        let node1 = this.nodes[i];
        let node2 = this.nodes[j];

        // if nodes are close enough, add edge
        if (distance(node1, node2) <= d) {
          let edge = new Edge(node1, node2);
          this.addEdge(edge);
        }

        // add triangles (not efficient)
        for (let k = 0; k < j; k++) {
            let node3 = this.nodes[k];

            let dist12 = distance(node1, node2);
            let dist23 = distance(node2, node3);
            let dist31 = distance(node3, node1);

            if (dist12 <= d && dist23 <=d && dist31 <=d) {
              let triangle = new Triangle(node1, node2, node3);
              this.addTriangle(triangle);
            }
        }       
      }
    }
  }

  display() {

    // draw triangles
    for (let i = 0; i <= this.triangles.length - 1; i++) {
      let triangle = this.triangles[i];
      triangle.display();
    }

    // draw edges
    for (let i = 0; i <= this.edges.length - 1; i++) {
      let edge = this.edges[i];
      edge.display();
    }
    // draw nodes
    for (let i = 0; i <= this.nodes.length - 1; i++) {
      let node = this.nodes[i];
      node.display();
    }


  }

}
</script>

