$('.navToggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('navToggleActive');
});


$(window).scroll(function(){
  if ($(this).scrollTop() > 10) {
    $('body').addClass('fixedHeader');
  } else {
    $('body').removeClass('fixedHeader');
  }
});


var swiper = new Swiper(".testimonialSwiper", {
  navigation: {
    nextEl: ".test-swiper-button-next",
    prevEl: ".test-swiper-button-prev",
  },
});


var swiper = new Swiper(".certificatesSlider", {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".cert-swiper-button-next",
    prevEl: ".cert-swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});

function toggleImage() {
  var image = document.getElementById('myImage');
  var imageText = document.getElementById('myImageText');
  if (image.style.display === 'none') {
    // If image is currently hidden, show it
    image.style.display = 'block';
    imageText.style.display = 'block';
  } else {
    // If image is currently visible, hide it
    image.style.display = 'none';
    imageText.style.display = 'none';
  }
}

function enlargeImage(src, altText) {
  var imageContainer = document.createElement('div');
  var imageWrapper = document.createElement('div');
  var image = new Image();
  var imageText = document.createElement('p');

  console.log(src);  
  image.src = src;
  image.classList.add('enlarged-image');
  imageText.textContent = altText;
  imageText.classList.add('image-text');

  image.addEventListener('click', function(){
    document.body.removeChild(imageContainer);
  });

  // Apply styles to ensure text appears directly below the image
  imageWrapper.style.display = 'block';
  imageText.style.display = 'block';
  imageText.style.marginTop = '10px'; // Optional: Add some space between image and text

  imageWrapper.appendChild(image);
  imageWrapper.appendChild(imageText);
  imageContainer.appendChild(imageWrapper);
  document.body.appendChild(imageContainer);
}

function filterArt() {
  // Get all checked filter values
  var checkedFilters = [];
  var checkboxes = document.querySelectorAll('input[name="filters"]:checked');
  checkboxes.forEach(function(checkbox) {
    checkedFilters.push(checkbox.value);
  });

  // Get all art items
  var artItems = document.querySelectorAll('#art-gallery .pColMain');
  
  artItems.forEach(function(item) {
    var link = item.querySelector('a');
    var dataType = link.getAttribute('data-type');
    
    // Show item if it matches any of the checked filters, or if no filters are checked
    if (checkedFilters.length === 0 || checkedFilters.includes(dataType)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Initialize filter when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the art page
  if (document.querySelector('#art-gallery')) {
    filterArt();
  }
});
