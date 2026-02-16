const mobileMenuToggle = document.getElementById('mobileMenuToggle')
const mobileMenuClose = document.getElementById('mobileMenuClose')
const navDrawer = document.getElementById('navDrawer')
const navBackdrop = document.getElementById('navBackdrop')

function openMenu() {
  navDrawer.classList.add('active')
  navBackdrop.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  navDrawer.classList.remove('active')
  navBackdrop.classList.remove('active')
  document.body.style.overflow = ''
}

mobileMenuToggle?.addEventListener('click', openMenu)
mobileMenuClose?.addEventListener('click', closeMenu)
navBackdrop?.addEventListener('click', closeMenu)

// закрывать меню при клике на любую ссылку в моб. меню
navDrawer?.querySelectorAll('a.nav-link--mobile').forEach((link) => {
  link.addEventListener('click', closeMenu)
})

// закрытие по Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu()
})
