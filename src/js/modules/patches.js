  /**
   * Sets the listeners to all the patch notes.
   */
  function addPatches(patches) {
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

export default addPatches
