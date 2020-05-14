const audioData = {};
let mic;

function setup() {
  mic = new p5.AudioIn();
  mic.start();
  audioData.fft = new p5.FFT(0.8, 512);
  audioData.fft.setInput(mic);
  const cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.parent('container');
  rectMode(CENTER);
  background(10);
}

function draw() {
  background(0, 0, 0, 30);
  const spectrum = audioData.fft.analyze();
  const waveform = audioData.fft.waveform();
  showSpectrum(spectrum);
  showWaveform(waveform);
}