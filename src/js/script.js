import genNav from './modules/navbar.js'
import addPatches from './modules/patches.js'
import setSplitImages from './modules/images.js'
import animateImages from './modules/animate.js'
import '../sass/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  genNav();

  const patches = document.querySelectorAll('.patch')
  const splits = document.querySelectorAll('.img-split')

  if (splits.length > 1) {
    setSplitImages(splits)
    animateImages()
  } else if (patches.length > 1) {
    addPatches(patches)
  }

})
