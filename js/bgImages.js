const images = ["i1.jpg", "i2.jpg", "i3.jpg", "i4.jpg", "i5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;
