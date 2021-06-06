let res;
let rows, cols;
let img1, img2, img3, img4;
let inputW, inputH, inputSize, input1, input2, input3, input4;
let runButton;
let cWidth, cHeight;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(230);
  noStroke();
  for (let i = 0; i < width/24+1; i++) {
    for (let j = 0; j < height/24+1; j++) {
      let col = random(20, 30);
      fill(col);
      rect(i*24, j*24, 24, 24);
    }
  }
  fill(255, 240);
  rect(0, 0, 400, height);
  let ypos = 80;
  let xpos = 80;
  fill(20);
  textSize(20);
  textStyle(BOLD);
  text('Zufallsmuster', xpos, ypos);
  ypos += 40;
  textSize(12);
  textStyle(NORMAL);
  text('Bildformat: JPG oder PNG', xpos, ypos, 240);
  ypos += 30;
  // File upload
  input1 = createFileInput(handleFile1);
  input1.position(xpos, ypos);
  ypos += 40;
  input2 = createFileInput(handleFile2);
  input2.position(xpos, ypos);
  ypos += 40;
  input3 = createFileInput(handleFile3);
  input3.position(xpos, ypos);
  ypos += 40;
  input4 = createFileInput(handleFile4);
  input4.position(xpos, ypos);
  ypos += 70;
  // Size of tiles
  text('Seitenlänge der Kacheln (px)', xpos, ypos);
  ypos += 10;
  inputSize = createInput("29");
  inputSize.position(xpos, ypos);
  inputSize.size(60);
  ypos += 70;
  // Width of canvas
  text('Breite (px)', xpos, ypos);
  text('Höhe (px)', xpos+100, ypos);
  ypos += 10;
  inputW = createInput("1600");
  inputW.position(xpos, ypos);
  inputW.size(60);
  inputH = createInput("800");
  inputH.position(xpos+100, ypos);
  inputH.size(60);
  ypos += 70;
  // Run button
  runButton = createButton('Bild generieren');
  runButton.position(xpos, ypos);
  runButton.size(240, 40);
  runButton.mousePressed(drawMap);
}

function drawMap() {
  createCanvas(inputW.value(), inputH.value());
  res = inputSize.value();
  input1.hide();
  input2.hide();
  input3.hide();
  input4.hide();
  inputSize.hide();
  inputW.hide();
  inputH.hide();
  runButton.hide();
  rows = ceil(height/res);
  cols = ceil(width/res);
  for (let i=0; i < cols; i++) {
    for (let j=0; j < rows; j++) {
      let val = floor(random(0, 4));
      if (val == 0) {
        image(img1, i*res, j*res);
      } else if (val === 1) {
        image(img2, i*res, j*res);
      } else if (val === 2) {
        image(img3, i*res, j*res);
      } else {
        image(img4, i*res, j*res);
      }
    }
  }
}

function keyPressed() {
  switch (key) {
    case "s":
      save();
      break;
    case "n":
      nSeed = random(0, 10000);
      noiseSeed(nSeed);
      drawMap();
      break;
  }
}

function handleFile1(file) {
  if (file.type === 'image') {
    img1 = createImg(file.data, '');
    img1.hide();
  } else {
    img1 = null;
  }
}

function handleFile2(file) {
  if (file.type === 'image') {
    img2 = createImg(file.data, '');
    img2.hide();
  } else {
    img2 = null;
  }
}

function handleFile3(file) {
  if (file.type === 'image') {
    img3 = createImg(file.data, '');
    img3.hide();
  } else {
    img3 = null;
  }
}

function handleFile4(file) {
  if (file.type === 'image') {
    img4 = createImg(file.data, '');
    img4.hide();
  } else {
    img4 = null;
  }
}