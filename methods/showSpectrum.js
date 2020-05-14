function showSpectrum(spectrum) {
  noStroke();
  const lighterBlue = color('#57B8FF');
  const darkerBlue = color('#2176AE');
  const white = color('#FFFFFF');
  const darkGrey = color('#334455');
  for (let i = 0; i < spectrum.length; i++) {
    const fractionOfTotal = i / spectrum.length;
    const interpolatedColor = lerpColor(lighterBlue, darkerBlue, fractionOfTotal);
    const interpolatedGrey = lerpColor(white, darkGrey, fractionOfTotal);
    fill(interpolatedColor);
    const frequency = spectrum[i];
    const diameter = ceil(width * 0.003);
    const halfWidth = width / 2;
    const quarterHeight = height / 4;
    const halfHeight = height / 2;
    const fractionOfWidth = halfWidth / spectrum.length;
    const xDistFromMiddle = i * fractionOfWidth;
    const xPos = halfWidth - xDistFromMiddle;
    const xMirror = halfWidth + xDistFromMiddle;
    const yDistFromMiddle = map(frequency, 0, 255, 0, quarterHeight);
    const greyerBallDiameter = map(frequency, 0, 255, 0, diameter);
    const yPos = halfHeight - yDistFromMiddle;
    const yMirror = halfHeight + yDistFromMiddle;
    const yDouble = halfHeight - yDistFromMiddle * 2;
    const yMirrorDouble = halfHeight + yDistFromMiddle * 2;
    rect(xPos, halfHeight, diameter, yDistFromMiddle * 2);
    rect(xMirror, halfHeight, diameter, yDistFromMiddle * 2);
    ellipse(xPos, yPos, diameter);
    ellipse(xMirror, yPos, diameter);
    ellipse(xPos, yMirror, diameter);
    ellipse(xMirror, yMirror, diameter);
    fill(interpolatedGrey);
    ellipse(xPos, yDouble, greyerBallDiameter);
    ellipse(xMirror, yDouble, greyerBallDiameter);
    ellipse(xPos, yMirrorDouble, greyerBallDiameter);
    ellipse(xMirror, yMirrorDouble, greyerBallDiameter);
  }
}