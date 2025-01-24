/**
 * Sets the listener to all the splitted images.
 */
function setSplitImages(splits) {

  splits.forEach((split) => {
    split.addEventListener('click', () => {
      if (split.classList.contains('active')) {
        split.classList.remove('active')
        split.classList.add('inactive')
      } else if (split.classList.contains('inactive')) {
        split.classList.remove('inactive')
        split.classList.add('active')
      } else {
        split.classList.add('active')
      }
    })
  })
}

export default setSplitImages
