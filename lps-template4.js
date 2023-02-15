//Slider//

var splide = new Splide('.splide', {
  // Desktop on down
  perPage: 1,
  drag: false,
  perMove: 1,
  focus: 0, // 0 = left and 'center' = center
  type: 'slide', // 'loop' or 'slide'
  gap: '2em', // space between slides
  arrows: 'slider', // 'slider' or false
  pagination: false, // 'slider' or false
  speed: 600, // transition speed in miliseconds
  dragAngleThreshold: 30, // default is 30
  autoWidth: false, // for cards with differing widths
  rewind: false, // go back to beginning when reach end
  rewindSpeed: 400,
  waitForTransition: false,
  updateOnMove: true,
  trimSpace: false, // true removes empty space from end of list
  breakpoints: {
    991: {
      // Tablet
    },
    767: {
      // Mobile Landscape
    },
    479: {
      // Mobile Portrait
    },
  },
}).mount()
splide.on('move', function () {
  var numItems = $('.splide__slide').length
  var activeslide = $('.splide__slide.is-active').index() + 1
  var percentage = Math.round((activeslide / numItems) * 100) + '%'
  $('.form_progress-fill').css('width', percentage)
})

//Assign value to inputs//
$('.splide__slide').each(function () {
  let content = $(this).find('.placeholder').text()
  let name = $(this).find('.inputname').text()
  let group = $(this).find('.group-name').text()
  let idbox = $(this).find('.id-selectbox').text()
  let maxnum = $(this).closest('.splide__slide').find('.input-max').text()
  let minnum = $(this).closest('.splide__slide').find('.input-min').text()
  $(this)
    .find('.radio-item input[type=radio]')
    .each(function () {
      $(this).attr('name', group)
      $(this).attr('data-name', group)
      let selectinputvalue = $(this).closest('.radio-item').find('.text-selectinput').text()
      $(this).attr('value', selectinputvalue)
    })

  $(this)
    .find('.radionumber_wrapper')
    .each(function () {
      $(this).find('.radio-item-number input[type=radio]').attr('name', group)
      $(this).attr('data-name', group)
      let selectinputnumbervalue = $(this).find('.valeur').text()
      $(this).find('.radio-item-number input[type=radio]').attr('value', selectinputnumbervalue)
    })
  $(this).find('.input-field').attr('placeholder', content)
  $(this).find('.input-field').attr('name', name)
  $(this).find('.input-field').attr('data-name', name)
  $(this).find('.number-field').attr('min', minnum)
  $(this).find('.number-field').attr('max', maxnum)
  $(this).find('.number-field').attr('name', name)
  $(this).find('.number-field').attr('data-name', name)
  $(this).find('.number-field').attr('placeholder', content)
  $(this).find('.form_field.select').attr('id', idbox)
  $(this).find('.form_field.select').attr('name', name)
  $(this).find('.form_field.select').attr('data-name', name)
  $(this).find('.petit').append(minnum)
  $(this).find('.grand').append(maxnum)
  $(this).find('.placeholder').hide()
  $(this).find('.valeur').hide()
  $(this).find('.inputname').hide()
  $(this).find('.group-name').hide()
  $(this).find('.step-name').hide()
  $(this).find('.input-min').hide()
  $(this).find('.input-max').hide()
  $(this).find('.error-number').hide()
  $(this).find('.select-item').hide()
})
//prepare button//
$('.button-return').eq(0).hide()
$('.next-button-form').css('margin-left', 'auto')

//Return click//
$('.button-return').on('click', function () {
  $('.splide__arrow.splide__arrow--prev').click()
})

//Hidden Input//

let entry = Cookies.get('entry_point')
$('#entry_point').val(entry)

//Input-allownav//
$('.radio-item').on('click', function () {
  $('.not-clickable').removeClass('not-clickable')
})
$('.radio-item-number').on('click', function () {
  $('.not-clickable').removeClass('not-clickable')
})
// Select Input - Data + Next //
$('.next-button-form.select').on('click', function () {
  let question = $(this).closest('.splide__slide').find('.text-label').text()
  let slide = $(this).closest('.splide__slide').index() + 1
  let stepname = $(this).closest('.splide__slide').find('.step-name').text()
  let reponse = $(this)
    .closest('.splide__slide')
    .find('.radius-wrapper input[type=radio]:checked')
    .val()
  dataLayer.push({
    event: 'question',
    content: {
      position: slide,
      Question: question,
      reponse: reponse,
      type: 'select',
      name: stepname,
    },
  })
  $('.splide__arrow.splide__arrow--next').click()
  $('.next-button-form').addClass('not-clickable')
})

// Select Inputnumber - Data + Next //
$('.next-button-form.select-number').on('click', function () {
  let question = $(this).closest('.splide__slide').find('.text-label').text()
  let slide = $(this).closest('.splide__slide').index() + 1
  let stepname = $(this).closest('.splide__slide').find('.step-name').text()
  let reponse = $(this)
    .closest('.splide__slide')
    .find('.radionumber_wrapper input[type=radio]:checked')
    .val()
  dataLayer.push({
    event: 'question',
    content: {
      position: slide,
      Question: question,
      reponse: reponse,
      type: 'select',
      name: stepname,
    },
  })
  $('.splide__arrow.splide__arrow--next').click()
  $('.next-button-form').addClass('not-clickable')
})

//number input validation//
$('.number-field').on('change', function () {
  let question = $(this).closest('.splide__slide').find('.text-label').text()
  let slide = $(this).closest('.splide__slide').index() + 1
  let stepname = $(this).closest('.splide__slide').find('.step-name').text()
  let maxnum = $(this).closest('.splide__slide').find('.input-max').text()
  let minnum = $(this).closest('.splide__slide').find('.input-min').text()
  let reponse = $(this).val()

  if (reponse > maxnum) {
    $('.error-number').show()
    $(this).closest('.splide__slide').find('.next-button-form').addClass('not-clickable')
  }
  if (reponse < minnum) {
    $('.error-number').show()
    $(this).closest('.splide__slide').find('.next-button-form').addClass('not-clickable')
  } else {
    $('.error-number').hide()
    $('.next-button-form').removeClass('not-clickable')
    dataLayer.push({
      event: 'question',
      content: {
        position: slide,
        Question: question,
        reponse: reponse,
        type: 'number',
        name: stepname,
      },
    })
    reponse = null
    $('.splide__arrow.splide__arrow--next').click()
  }
})
//Text input - Data + text
$('.next-button-form.text').on('click', function () {
  let question = $(this).closest('.splide__slide').find('.text-label').text()
  let slide = $(this).closest('.splide__slide').index() + 1
  let reponse = $(this).closest('.splide__slide').find('.input-field').val()
  let stepname = $(this).closest('.splide__slide').find('.step-name').text()

  dataLayer.push({
    event: 'question',
    content: {
      Question: question,
      position: slide,
      reponse: reponse,
      type: 'Text',
      name: stepname,
    },
  })
  $('.splide__arrow.splide__arrow--next').click()
})

//selectbox input - Data + text
$('.form_field.select').on('change', function () {
  let question = $(this).closest('.splide__slide').find('.text-label').text()
  let slide = $(this).closest('.splide__slide').index() + 1
  let stepname = $(this).closest('.splide__slide').find('.step-name').text()
  let reponse = $(this).closest('.splide__slide').find('.input-field').val()
  dataLayer.push({
    event: 'question',
    content: {
      Question: question,
      position: slide,
      reponse: reponse,
      type: 'select-box',
      name: stepname,
    },
  })
  $('.splide__arrow.splide__arrow--next').click()
})

//text input - Enter = next //
$('.next-button-form.text').keypress(function (event) {
  if (event.keyCode == 13) {
    event.preventDefault()
    if ($(this).closest('.splide__slide').find('input-field') > 1) {
      $('.splide__arrow.splide__arrow--next').click()
    }
  }
})

//CP Input //

$('.input-cp').on('change', function () {
  if (document.getElementById('zipcode_auto').innerHTML.length == 5) {
    let question = $(this).closest('.splide__slide').find('.text-label').text()
    let slide = $(this).closest('.splide__slide').index() + 1
    let stepname = $(this).closest('.splide__slide').find('.step-name').text()
    let reponse = document.getElementById('zipcode_auto').innerHTML
    $('.error-number').hide()
    $('.next-button-form.cp').removeClass('not-clickable')
    dataLayer.push({
      event: 'question',
      postalcode: reponse,
      content: {
        Question: question,
        position: slide,
        reponse: reponse,
        type: 'codepostal',
        name: stepname,
      },
    })
    $('.splide__arrow.splide__arrow--next').click()
	  console.log("yes, response : " + response);
  } else {
    $('.error-number').show()
    $('.next-button-form.cp').addClass('not-clickable')
	  console.log("no : " + document.getElementById('zipcode_auto').innerHTML + " (" + document.getElementById('zipcode_auto').innerHTML.length + ")");
  }
})
/*
$('#zipcode_auto').on('change', function () {
  let reponse = document.getElementById('zipcode_auto').innerHTML
  let maxnum = $(this).closest('.splide__slide').find('.input-max').text()
  let minnum = $(this).closest('.splide__slide').find('.input-min').text()

  if (reponse > maxnum) {
    $('.error-number').show()
    $(this).closest('.splide__slide').find('.next-button-form').addClass('not-clickable')
  }
  if (reponse < minnum) {
    $('.error-number').show()
    $(this).closest('.splide__slide').find('.next-button-form').addClass('not-clickable')
  }
})*/
//Text input - Data + text

$('.next-button-form.number').on('click', function () {
  $('.splide__arrow.splide__arrow--next').click()
})

let click = 0
$('.bouton-cta').on('click', function () {
  localStorage.setItem('click', (click += 1))
  if (click === 1) {
    dataLayer.push({
      event: 'ctaclick',
    })
  }
})
// fill hidden fields//

// POST REQUEST
const form = document.getElementById('petite-copro')

const processForm = e => {
  if (e.preventDefault) e.preventDefault()

  const formData = new FormData(e.target)
  const prospect = {}
  const data = [...formData.entries()]
  dataLayer.push({
    event: 'conv',
  })
  data.forEach(v => {
    prospect[v[0]] = v[1]
  })

  const xhttp = new XMLHttpRequest()
  xhttp.open('POST', 'https://api-hubspot.matera.eu/prospects', true)
  xhttp.setRequestHeader('Content-Type', 'application/json')
  xhttp.setRequestHeader('Accept', 'application/json')

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4) {
      if (xhttp.status == 200) {
        const res = xhttp.responseText
        const { result } = JSON.parse(res)
        const { demo_request_key, awin_id, owner_type, former_management } = result
        window.location.replace(
          `/fr/demo-extra-details?demo_request_key=${demo_request_key}&awin_id=${awin_id}&owner_type=${
            owner_type || ''
          }&former_management=${former_management || ''}`,
        )
      } else {
        document.getElementsByClassName('w-form-fail')[0].style.display = 'block'
      }
    }
  }
  // mandatory parameter
  prospect.market = 'fr'
  prospect.origin = 'demo'
  prospect.entry_point = Cookies.get('entry_point')
  prospect.utm_term = Cookies.get('utm_term')
  prospect.utm_campaign = Cookies.get('utm_campaign')
  prospect.utm_source = Cookies.get('utm_source')
  prospect.utm_medium = Cookies.get('utm_medium')
  prospect.ad_group = Cookies.get('ad_group')

  xhttp.send(JSON.stringify({ prospect }))

  return false
}

// Prevent slider navigation with enter + arrow
form.addEventListener('submit', processForm)

document.getElementById('email-form').addEventListener(
  'keydown',
  function (e) {
    if (
      ['Space', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1
    ) {
      e.preventDefault()
      e.stopPropagation()
    }
  },
  true,
)


// Asking for the address with autocompletion

var searchInput = 'zipcode';

$(document).ready(function () {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
    });
	
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();

        for (var i = 0; i < near_place.address_components.length; i++) {
          for (var j = 0; j < near_place.address_components[i].types.length; j++) {
            if (near_place.address_components[i].types[j] == "postal_code") {
              document.getElementById('zipcode_auto').innerHTML = near_place.address_components[i].long_name;
		    console.log("near_place.address_components[i].long_name");
		    console.log(near_place.address_components[i].long_name);
            }
          }
        }

        document.getElementById('loc_lat').value = near_place.geometry.location.lat();
        document.getElementById('loc_long').value = near_place.geometry.location.lng();
    });
});

