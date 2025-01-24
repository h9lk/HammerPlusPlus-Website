/**
 * Generates the navbar based on the current page.
 */
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

export default genNav
