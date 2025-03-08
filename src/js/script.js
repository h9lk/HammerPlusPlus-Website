import genNav from './modules/navbar.js'
import setSplitImages from './modules/images.js'
import animateImages from './modules/animate.js'
import addPatches from './modules/patches.js'
import '../sass/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  genNav();

  const patches = document.querySelectorAll('.patch')
  const splits = document.querySelectorAll('.img-split')

  if (splits) {
    setSplitImages(splits)
    animateImages()
  }
  if (patches) {
    addPatches(patches)
  }

})
