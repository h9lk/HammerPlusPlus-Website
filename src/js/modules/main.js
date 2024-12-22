/**
 * Generates the navbar based on the current page.
 */
function main() {
  const splits = document.querySelectorAll('.img-split')
  const patches = document.querySelectorAll('.patch')

  function genNav() {
    const nav = document.querySelector('.navbar')
    if (!nav) return

    const current = location.pathname.split('/').pop().replace('.html', '')

    const pages = ['index', 'features', 'updates', 'download', 'credits']

    pages.forEach((page) => {
      const link = document.createElement('a')

      link.href = `${page}.html`
      link.innerText = page
      link.className = page === current ? 'selected' : ''

      nav.appendChild(link)
    })
  }

  /**
   * Sets the listener to all the splitted images.
   */
  function setSplitImages() {
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

  /**
   * Sets the listeners to all the patch notes.
   */
  function addPatches() {
    // The first patch note will be be active by default
    patches[0].classList.toggle('active')

    patches.forEach((patch) => {
      patch.querySelector('h1').addEventListener('click', () => {
        patches.forEach((p) => {
          if (p === patch) {
            p.classList.toggle('active')
          } else {
            p.classList.remove('active')
          }
        })
      })

      // Use spaces instead of tabs for the notes
      const pre = patch.querySelector('pre')
      pre.innerHTML = pre.innerHTML.replaceAll('\t', '   ')
    })
  }

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

  if (splits.length > 1) {
    setSplitImages()
    animateImages()
  } else if (patches.length > 1) {
    addPatches()
  }

  genNav()
}
export default main
