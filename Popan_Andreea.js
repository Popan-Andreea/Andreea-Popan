var images = document.querySelectorAll('#slideshow img');
var currentIndex = 0;
var interval;
var button=document.getElementById("button")

button.addEventListener("dblclick", startSlideshow)

function startSlideshow()
 {
  const slideshow = document.getElementById("slideshow");
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
  let index = 0;


  setInterval(() => {
    index++;
    if (index === images.length) {
      index = 0;
    }

    slideshow.innerHTML = `<img src="${images[index]}" alt="Imagine ${index + 1}">`;
}, 3000);
	

}