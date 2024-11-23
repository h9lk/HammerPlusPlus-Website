const FOCUS_IMG = document.querySelector("#focus-img");
const FOCUS_CONTAINER = document.querySelector("#focus-container");
const IMGS = Array.from(document.querySelectorAll(".image:not(.img-split)"));
let currentImage = 0;	// current image index on focus



function setFocusImage(image) {
	IMGS[currentImage].classList.remove("focused")	// remove the fucused state of the last image
	FOCUS_CONTAINER.classList.add("focused")

	originalImage = image.cloneNode(true)	// clone the image to be focused

	// In case we are dealing with a video, show media controls
	originalImage.setAttribute("controls", "true")
	originalImage.setAttribute("autoplay", "true")

	FOCUS_IMG.innerHTML = ""
	FOCUS_IMG.appendChild(originalImage)	// add the new image to the focus container
	currentImage = IMGS.indexOf(image)

	image.classList.add("focused")
}

function nextImage() {	// focus the next image, if its the last, focus the first
	if (currentImage == IMGS.length-1)
		setFocusImage(IMGS[0])
	else
		setFocusImage(IMGS[currentImage+1])
}

function previousImage() {	// focus the previous image, if its the first, focus the last
	if (currentImage == 0)
		setFocusImage(IMGS[IMGS.length-1])
	else
		setFocusImage(IMGS[currentImage-1])
}



// add events to the left and right arrows
document.querySelector("#focus-arrow-right").addEventListener("click", nextImage)
document.querySelector("#focus-arrow-left").addEventListener("click", previousImage)

// Add the event listeners to all the images in the gallery
IMGS.forEach((e) => {e.addEventListener("click", () => {setFocusImage(e)})})

// add event to container, only triggereable by container
FOCUS_CONTAINER.addEventListener("click", event => {
	if (event.target !== FOCUS_CONTAINER) return;
	FOCUS_CONTAINER.classList.remove("focused")
	IMGS.forEach(e => e.classList.remove("focused"))	// remove the fucused state to all images
})