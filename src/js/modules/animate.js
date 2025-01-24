
function animateImages() {
  const container = document.querySelectorAll('.container')

  container.forEach((image) => {
    image.addEventListener('mouseover', (evt) => {
      const target = evt.target.parentNode
      const png = target.children[0]
      const gif = target.children[1]

      png.classList.remove('image', 'active')
      png.classList.add('static')

      gif.classList.remove('static')
      gif.classList.add('image', 'active')
    })
  })

  container.forEach((image) => {
    image.addEventListener('mouseout', (evt) => {
      const target = evt.target.parentNode
      const png = target.children[0]
      const gif = target.children[1]

      png.classList.remove('static')
      png.classList.add('image', 'active')

      gif.classList.remove('image', 'active')
      gif.classList.add('static')
    })
  })
}

export default animateImages
