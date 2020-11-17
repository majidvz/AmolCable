// Dropdown Toggle
$(".dropdown-toggle").dropdown();

// Pages Header Background When Scrolled
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".g-header").addClass("scrolled");
  } else {
    $(".g-header").removeClass("scrolled");
  }
});

// Menu Actions
$(".g-header .menu-btn").on("click", function () {
  $(".g-overlay").addClass("active");
  $(".menu-links").addClass("active");
});

// Overlay Actions
$(".g-overlay").on("click", function () {
  $(this).removeClass("active");
  $(".menu-links").removeClass("active");
});
