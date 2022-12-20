const images = ["1.jpeg", "2.jpeg", "3.jpeg"];
const chosenImages =images[Math.floor(Math.random() * images.length)]
const bgImage = document.createElement("img");
bgImage.className = "background"
bgImage.src =  `img/${chosenImages}`;
document.body.appendChild(bgImage);