$('.slider-wrapper').slick();

const program = document.querySelectorAll('.program')

program.forEach(item => {
  let header = item.querySelector('.program__header')
  let content = item.querySelector('.program__content')
  let icon = item.querySelector('.program__icon')
  header.addEventListener('click', () => {

    content.classList.toggle('active')

    if (content.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px'
      icon.style.rotate = '45deg'
      item.style.paddingBottom = '1.5rem'
    } else {
      content.style.maxHeight = 0
      icon.style.rotate = '0deg'
      item.style.paddingBottom = 0
    }
  })
})