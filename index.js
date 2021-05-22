document.querySelector('.nav-item-1').addEventListener('click', () => switchTabs(1))
document.querySelector('.nav-item-2').addEventListener('click', () => switchTabs(2))
document.querySelector('.nav-item-3').addEventListener('click', () => switchTabs(3))

const switchTabs = (tabToDisplay) => {
  for (let i = 1; i < 4; i++) {
    if (!document.querySelector(`.page-${i}`).classList.contains('hidden')) {
      document.querySelector(`.page-${i}`).classList.add('hidden')
    }
  }
  document.querySelector(`.page-${tabToDisplay}`).classList.remove('hidden')
}