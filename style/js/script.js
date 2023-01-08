window.onload=()=> {
  const $ = document.querySelector.bind(document)
  const $All = document.querySelectorAll.bind(document)

  $('#hamburger__btn').onclick=()=> {
    $('#hamburger__btn').classList.toggle('transform')
    $('.header__main-left').classList.toggle('transform')
    $('.line_1').classList.toggle('rotate_1')
    $('.line_2').classList.toggle('rotate_2')
    $('.line_3').classList.toggle('rotate_3')
    window.addEventListener('scroll', e => {
      window.scrollTo({top: 0})
    })
  }
}