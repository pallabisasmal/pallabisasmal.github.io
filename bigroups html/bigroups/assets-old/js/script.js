var controller = new ScrollMagic.Controller();

$(function () {
  //var tween = TweenMax.to(".block-list", 1, {className: "+=scrollend"});

  var $block_list = $('.block-list'),
    $block_item = $block_list.find('.block-list__item'),
    block_list_width = $block_list.outerWidth(),
    block_item_width = $block_item.outerWidth(),
    total_width = block_item_width * $block_item.length,
    travel_distance = total_width - block_list_width + 20;

  var scene = new ScrollMagic.Scene({
    triggerElement: "#second",
    duration: '200%',
    triggerHook: 0
  })
    .setPin('.block-list')
    //.setTween(tween)
    .addTo(controller);

  scene.on('progress', function (e) {
    var progress = e.progress,
      move = -travel_distance * progress + "px";
    $block_list.css({
      transform: "translateX(" + move + ")"
    });
  });
});

// ......................
// Smooth Scroll
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// Scroll Down - Button
document.addEventListener('DOMContentLoaded', function () {
  const scrollBtn = document.getElementById('scrollBtn');
  window.addEventListener('scroll', function () {
    const box = document.querySelector('.scrollBtn');
    if (window.scrollY > 0) {
      box.classList.add('move');
    } else {
      box.classList.remove('move');
    }
  });
});


// Preloader Text 
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  const firstText = document.getElementById('first-text');
  const secondText = document.getElementById('second-text');
  // Show the first text
  firstText.style.opacity = '1';
  // loading animation
  setTimeout(function () {
    firstText.style.opacity = '0';
    secondText.style.opacity = '1';
  }, 1000);
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 4000);
});


// Loader Video 
window.addEventListener('load', function () {
  document.body.classList.add('overflow-hidden'); // body - overflow hidden
  document.documentElement.classList.add('overflow-hidden'); // html - overflow hidden
  setTimeout(function () {
    const loaderVideo = document.getElementById('loaderVideo');
    loaderVideo.style.width = '90%';
    loaderVideo.style.height = '90%';
    loaderVideo.style.transform = 'translate(-50%, -50%)';
    loaderVideo.style.top = '50%';
    loaderVideo.style.left = '50%';
    loaderVideo.style.position = 'fixed';
    loaderVideo.style.borderRadius = '12px';

  }, 2000);
  setTimeout(() => {
    if (window.matchMedia('(max-width: 576px)').matches) {
      loaderVideo.style.width = '220px';
      loaderVideo.style.height = '220px';
      loaderVideo.style.top = '25%';
      loaderVideo.style.left = '24px';
      loaderVideo.style.right = 'auto';
      loaderVideo.style.transform = 'translate(0%, -25%)';
    } else if (window.matchMedia('(max-width: 767px)').matches) {
      loaderVideo.style.width = '220px';
      loaderVideo.style.height = '220px';
      loaderVideo.style.left = 'auto';
      loaderVideo.style.right = '40px';
      loaderVideo.style.transform = 'translate(0%, -50%)';
    } else if (window.matchMedia('(max-width: 991px)').matches) {
      loaderVideo.style.width = '310px';
      loaderVideo.style.height = '310px';
      loaderVideo.style.left = 'auto';
      loaderVideo.style.right = '40px';
      loaderVideo.style.transform = 'translate(0%, -50%)';
    } else if (window.matchMedia('(max-width: 1199px)').matches) {
      loaderVideo.style.width = '400px';
      loaderVideo.style.height = '400px';
      loaderVideo.style.left = 'auto';
      loaderVideo.style.right = '60px';
      loaderVideo.style.transform = 'translate(0%, -50%)';
    } else if (window.matchMedia('(max-width: 1399px)').matches) {
      loaderVideo.style.width = '450px';
      loaderVideo.style.height = '450px';
      loaderVideo.style.left = 'auto';
      loaderVideo.style.right = '80px';
      loaderVideo.style.transform = 'translate(0%, -50%)';
    } else {
      loaderVideo.style.width = '500px';
      loaderVideo.style.height = '500px';
      loaderVideo.style.top = '50%';
      loaderVideo.style.left = 'auto';
      loaderVideo.style.right = '100px';
      loaderVideo.style.transform = 'translate(0%, -50%)';
      loaderVideo.style.position = 'absolute';
    }
    document.body.classList.remove('overflow-hidden'); // body - overflow visible
    document.documentElement.classList.remove('overflow-hidden'); // html - overflow visible
  }, 3000); // Adjust the time as needed
});


// ScrollMagic
var controller = new ScrollMagic.Controller({ loglevel: 3 });
new ScrollMagic.Scene({
  triggerElement: "#section2",
  triggerHook: "onEnter",
  duration: "100%"
}).setPin("#section1 .pinWrapper", {
  pushFollowers: false
}).addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#section2",
  triggerHook: "onEnter",
  duration: "200%"
}).setPin("#section2 .pinWrapper", {
  pushFollowers: false
}).addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#section3",
  triggerHook: "onEnter",
  duration: "200%"
}).setPin("#section3 .pinWrapper", {
  pushFollowers: false
}).addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#section4",
  triggerHook: "onEnter",
  duration: "100%"
}).setPin("#section4 .pinWrapper", {
  pushFollowers: false
}).addTo(controller);

// ............................
$(function () {

  // Define window variables

  var winScrollTop = $(window).scrollTop();
  var winHeight = window.innerHeight;
  var winWidth = window.innerWidth;

  // Define scene classes.
  var sceneClass = 'scene';
  var sceneActiveClass = sceneClass + '--active';
  var sceneEndedClass = sceneClass + '--ended';

  $(window).on('resize', function () {
    winHeight = window.innerHeight;
    winWidth = window.innerWidth;
  });

  // Scene classes function.
  function setScene($el) {

    // Get bounding values from section.
    var bounding = $el.data('elDom').getBoundingClientRect();

    if (bounding.top > winHeight) {

      // Section is below the viewport.
      // Section has not ended or started, therefore remove classes.
      $el.find('.scene').removeClass(sceneActiveClass);
      $el.find('.scene').removeClass(sceneEndedClass);

    } else if (bounding.bottom < 0) {

      // Section is above the viewport.
      // Section has ended, therefore remove classes.
      $el.find('.scene').addClass(sceneEndedClass);
      $el.find('.scene').removeClass(sceneActiveClass);

    } else {

      // We're now inside the section, not below or above.
      // If top of section is at top of viewport, add class active.
      if (bounding.top <= 0) {
        $el.find('.scene').addClass(sceneActiveClass);
      }

      // If top of section is below top of viewport, remove class active.
      if (bounding.top > 0) {
        $el.find('.scene').removeClass(sceneActiveClass);
      }

      // If bottom of section is at bottom of viewport, add class ended.
      if (bounding.bottom <= (winHeight)) {
        $el.find('.scene').addClass(sceneEndedClass);
      }

      // If bottom of section is not at bottom of viewport, remove class ended.
      if (bounding.bottom > (winHeight)) {
        $el.find('.scene').removeClass(sceneEndedClass);
      }
    }
  }

  // This function sets up the horizontal scroll. This applies data attributes to the section for later use.
  function setUpHorizontalScroll($el) {

    var sectionClass = $el.attr('class');

    // Set content wrapper variables & data attributes.
    var $contentWrapper = $el.find('.' + sectionClass + '__content-wrapper');
    var contentWrapperDom = $contentWrapper.get(0);
    $el.data('contentWrapper', $contentWrapper);
    $el.data('contentWrapperDom', contentWrapperDom);

    // Set content wrapper scroll width variables & data attributes.
    var contentWrapperScrollWidth = $el.data('contentWrapperDom').scrollWidth;
    $el.data('contentWrapperScrollWidth', contentWrapperScrollWidth);

    // Set right max variables & data attributes.
    var rightMax = $el.data('contentWrapperScrollWidth') - winWidth;
    var rightMaxMinus = -(rightMax);
    $el.data('rightMax', Number(rightMaxMinus));

    // Set initialized data variable to false do incidate scrolling functionality doesn't work yet.
    $el.data('initalized', false);

    // Set height of section to the scroll width of content wrapper.
    $el.css('height', $el.data('contentWrapperScrollWidth'));

    // Set data attribute for outerHeight.
    $el.data('outerHeight', $el.outerHeight());

    // Set data attribute for offset top.
    $el.data('offsetTop', $el.offset().top);

    // Set data initialized data variable to true to indicate ready for functionality.
    $el.data('initalized', true);

    // Set data variable for transform X (0 by default)
    $el.data('transformX', '0');

    // Add class of init
    $el.addClass($el.attr('class') + '--init');
  }

  function resetHorizontalScroll($el) {


    // Update data attribute for content wrapper scroll width.

    var contentWrapperScrollWidth = $el.data('contentWrapperDom').scrollWidth;
    $el.data('contentWrapperScrollWidth', contentWrapperScrollWidth);


    // Update rightMax variables & data attributes.
    rightMax = $el.data('contentWrapperScrollWidth') - winWidth;
    rightMaxMinus = -(rightMax);
    $el.data('rightMax', Number(rightMaxMinus));

    // Update height of section to the scroll width of content wrapper.
    $el.css('height', $el.data('contentWrapperScrollWidth'));

    // Update data attribute for outerHeight.
    $el.data('outerHeight', $el.outerHeight());

    // Update data attribute for offset top.
    $el.data('offsetTop', $el.offset().top);

    // If transform is smaller than rightmax, make it rightmax.
    if ($el.data('transformX') <= $el.data('rightMax')) {
      $el.data('contentWrapper').css({
        'transform': 'translate3d(' + $el.data('rightMax') + 'px, 0, 0)',
      });
    }
  }

  var $horizontalScrollSections = $('.horizontal-scroll-section');
  var $horizontalScrollSectionsTriggers = $horizontalScrollSections.find('.trigger');

  // Each function - set variables ready for scrolling functionality. Call horizontal scroll functions on load and resize.
  $horizontalScrollSections.each(function (i, el) {

    var $thisSection = $(this);

    $(this).data('elDom', $(this).get(0));

    // Set up horizontal scrolling data attributes and show section all have been computed.
    setUpHorizontalScroll($(this));

    // Now we're ready, call setScene on load that adds classes based on scroll position.
    setScene($(this));

    // Resize function
    $(window).on('resize', function () {
      // Reset horizontal scrolling data attributes and transform content wrapper if transform is bigger than scroll width.
      resetHorizontalScroll($thisSection);
      // Reset scene positioning.
      setScene($thisSection);
    });

  });

  function setupHorizontalTriggers($el, section) {
    var parent = $el.parent();
    var positionLeft = parent.position().left;
    var positionLeftMinus = -(positionLeft);
    var triggerOffset = $el.data('triggerOffset');
    triggerOffset = !triggerOffset ? 0.5 : triggerOffset = triggerOffset;
    $el.data('triggerOffset', triggerOffset);
    $el.data('triggerPositionLeft', positionLeftMinus);
    $el.data('triggerSection', section);
  }

  function useHorizontalTriggers($el) {
    if ($el.data('triggerSection').data('transformX') <= ($el.data('triggerPositionLeft') * $el.data('triggerOffset'))) {
      $el.data('triggerSection').addClass($el.data('class'));
    } else {
      if ($el.data('remove-class') !== false) {
        $el.data('triggerSection').removeClass($el.data('class'));
      }
    }
  }

  $horizontalScrollSectionsTriggers.each(function (i, el) {
    setupHorizontalTriggers($(this), $(this).closest('.horizontal-scroll-section'));
  });

  function transformBasedOnScrollHorizontalScroll($el) {

    // Get amount scrolled variables.
    var amountScrolledContainer = winScrollTop - $el.data('offsetTop');
    var amountScrolledThrough = (amountScrolledContainer / ($el.data('outerHeight') - (winHeight - winWidth)));

    // Add transform value variable based on amount scrolled through multiplied by scroll width of content.
    var toTransform = (amountScrolledThrough * $el.data('contentWrapperScrollWidth'));

    // Add transform value for minus (as we're transforming opposite direction).
    var toTransformMinus = -(toTransform);

    // If transform value is bigger or equal than 0, set value to 0.
    toTransformMinus = Math.min(0, toTransformMinus);

    // If transform value is smaller or equal than rightMax, set value to rightMax.
    toTransformMinus = Math.max(toTransformMinus, $el.data('rightMax'));

    // Update transformX data variable for section.
    $el.data('transformX', Number(toTransformMinus));

    // If section has been initalized, apply transform.
    if ($el.data('initalized') == true) {
      $el.data('contentWrapper').css({
        'transform': 'translate3d(' + $el.data('transformX') + 'px, 0, 0)'
      });
    }
  }

  // 
  $(window).on('scroll', function () {

    // Get window scroll top.
    winScrollTop = $(window).scrollTop();

    // Each function in horizontal scroll sections.
    $horizontalScrollSections.each(function (i, el) {
      transformBasedOnScrollHorizontalScroll($(this));
      setScene($(this));
    });

    // Each function for horizontal scroll section triggers.
    $horizontalScrollSectionsTriggers.each(function (i, el) {
      useHorizontalTriggers($(this));
    });

  });

});

// ...............................
$("#banner-caro").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 0,
  responsiveClass: true,
  smartSpeed: 800,
  nav: true,
  dots: true,
  animateOut: 'fadeOut',
  // animateIn: 'fadeIn',
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }
  }
});

// ................
// script.js
document.addEventListener('scroll', function () {
  const fifth = document.getElementById('fifth');
  const rect = fifth.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

  if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
    fifth.classList.add('highlight');
  } else {
    fifth.classList.remove('highlight');
  }
});

// .......................
// script.js
document.addEventListener('scroll', function () {
  const sixth = document.getElementById('sixth');
  const rect = sixth.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

  if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
    sixth.classList.add('highlight');
  } else {
    sixth.classList.remove('highlight');
  }
});

// .........................
// script.js
document.addEventListener('scroll', function () {
  const ninth = document.getElementById('ninth');
  const rect = ninth.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

  if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
    ninth.classList.add('highlight');
  } else {
    ninth.classList.remove('highlight');
  }
});

// .................
$(document).ready(function () {
  // grab the initial top offset of the navigation 
  var stickyNavTop = $('.nav').offset().top;

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function () {
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) {
      $('.nav').addClass('sticky');
    } else {
      $('.nav').removeClass('sticky');
    }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function () {
    stickyNav();
  });
});

// ...............
$(".menuController").click(function () {
  $(".menu-div").addClass("intro");
});
$(".overlayClose").click(function () {
  $(".menu-div").removeClass("intro");
});

// ...................
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});



// loader
$(function() {
  setTimeout(function() { $("#hideDiv").fadeOut(2000); }, 2500)
  })