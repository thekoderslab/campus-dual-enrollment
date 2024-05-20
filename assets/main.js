$(document).ready(function () {
  $('.menu').on('click', function () {
    $('.sidebar').toggleClass('active')
  })
  $('.close').on('click', function () {
    $('.sidebar').toggleClass('active')
  })

  $('.student_experience_section_accordion_header').click(function () {
    var setsrc = $(this).attr('data-src')
    var imgSrc = $('.getsrc').attr('src', `./assets/images/section/${setsrc}`)
    if (
      $(this).parent('.student_experience_section_accordion').hasClass('active')
    ) {
      $('.student_experience_section_accordion_body').slideUp()
      $('.student_experience_section_accordion').removeClass('active')
      $(imgSrc).hide()
    } else {
      $('.student_experience_section_accordion_body').slideUp()
      $('.student_experience_section_accordion').removeClass('active')
      $(this).next('.student_experience_section_accordion_body').slideDown()
      $(imgSrc).show()
      $(this).parent('.student_experience_section_accordion').addClass('active')
    }
  })
})

$(() => {
  let stickyTop = 0,
    scrollTarget = false

  let timeline = $('.timeline__nav'),
    items = $('li', timeline),
    milestones = $('.timeline__section .milestone'),
    offsetTop = parseInt(timeline.css('top'))

  const TIMELINE_VALUES = {
    start: 190,
    step: 30,
  }

  $(window)
    .resize(function () {
      timeline.removeClass('fixed')

      stickyTop = timeline.offset().top - offsetTop

      $(window).trigger('scroll')
    })
    .trigger('resize')

  $(window)
    .scroll(function () {
      if ($(window).scrollTop() > stickyTop) {
        timeline.addClass('fixed')
      } else {
        timeline.removeClass('fixed')
      }
    })
    .trigger('scroll')

  items.click(function () {
    let li = $(this),
      index = li.index(),
      milestone = milestones.eq(index)

    if (!li.hasClass('active') && milestone.length) {
      scrollTarget = index

      let scrollTargetTop = milestone.offset().top - 150

      $('html, body').animate(
        { scrollTop: scrollTargetTop },
        {
          duration: 100,
          complete: function complete() {
            scrollTarget = false
          },
        }
      )
    }
  })

  $(window)
    .scroll(function () {
      let viewLine = $(window).scrollTop() + $(window).height() / 3,
        active = -1

      if (scrollTarget === false) {
        milestones.each(function () {
          if ($(this).offset().top - viewLine > 0) {
            return false
          }

          active++
        })
      } else {
        active = scrollTarget
      }

      items.filter('.active').removeClass('active')

      items.eq(active != -1 ? active : 0).addClass('active')
    })
    .trigger('scroll')
})

var swiper = new Swiper('#courses-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2.8,
      spaceBetween: 10,
    },
  },
})
