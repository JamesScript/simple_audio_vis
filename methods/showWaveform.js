function showWaveform(waveform) {
  noFill();
  beginShape();
  stroke('#D9FFF8');
  strokeWeight(2);
  for (let i = 0; i < waveform.length; i++){
    const x = map(i, 0, waveform.length, 0, width);
    const y = map( waveform[i], -1, 1, height * 0.25, height * 0.75);
    vertex(x,y);
  }
  endShape();
}