$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  items: 1,
  loop: true,
  smartSpeed: 5000,
  // margin: 5,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,

});
$('.admin_slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  items: 1,
  loop: true,
  smartSpeed: 5000,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,


});
$('.ais_auditing').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  items: 1,
  loop: true,
  smartSpeed: 5000,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});
$('.reports_slide').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  items: 1,
  loop: true,
  smartSpeed: 5000,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});

$('.admin_slider_mobile').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  items: 1,
  loop: true,
  smartSpeed: 5000,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});
$('.ais_auditing_mobile').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  items: 1,
  loop: true,
  smartSpeed: 5000,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});
$('.reports_slide_mobile').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  items: 1,
  loop: true,
  smartSpeed: 5000,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});


//////////////////////////////////////////////////////
// $(".pop-up-image").hide()
let imageSlider = false

function closethis() {
  $(".pop-up-image").hide()
  $("#fullBody").css({ filter: "blur(0px)" });
  $("html").css({ overflow: "auto" });
  $("#footer").show()
  imageSlider = false

}
function imag_show(src) {

  $(".pop-up-image").show()

  $("#fullBody").css({ filter: "blur(6px)" });
  $("html").css({ overflow: "hidden" });
  $("#footer").hide()
  imageSlider = true

}
$(document).ready(() => {
  $('.carousel').carousel({
      interval: 2000,
      keyboard: true
  })
})
//////////////////////////////////////////////////////
function closethis1() {
  $(".pop-up-image-report").hide()
  $("#fullBody").css({ filter: "blur(0px)" });
  $("html").css({ overflow: "auto" });
  imageSlider = false

}

function imag1() {

  $(".pop-up-image-report").show()

  $("#fullBody").css({ filter: "blur(6px)" });
  $("html").css({ overflow: "hidden" });
  imageSlider = true
}
$(document).ready(() => {
  $('.carousel').carousel({
      interval: 2000,
      keyboard: true
  })
})


$(document).keyup(function (e) {

  if (imageSlider === true) {
      if (e.key === "Escape") { // escape key maps to keycode `27`
          closethis1()
          closethis()
          imageSlider = false

      }
  }
});


function onTabsClick(type) {
  console.log(type)
  if (type == 'admin') {
      onAdminClick();
  } else if (type == 'super') {
      onSuperClick();
  } else if (type == 'deliver') {
      onDeliveryClick();
  } else if (type == 'customer') {
      onCustomerClick();
  }
};

function onAdminClick() {
};

function onDeliveryClick() {
  document.getElementById('tabber').innerHTML = `
<div class="row">
  <div class="col-12 text-center">
      <img src="./assets/mobile_app_image.png" class="img-fluid d-block text-center w-50 mx-auto" alt="">
  </div>
  <div class="col-12 mt-3">
      <p class="lead"> <i class="fa fa-check"></i>Assign auditee from user list</p>
  <p class="lead"> <i class="fa fa-check"></i> Check and manage status of in - progress Audits</p>
  <p class="lead"> <i class="fa fa-check"></i>Audit execution</p>
  <p class="lead"> <i class="fa fa-check"></i>View details of available as well as archived audit</p>
  </div>


</div>`;

}


function onCustomerClick() {
  document.getElementById('tabber').innerHTML = `
<div class="row">
  <div class="col-12 text-center">
      <img src="./assets/Reports.png" class="img-fluid d-block text-center w-50 mx-auto" alt="">
  </div>
  <div class="col-12 mt-3">
      <p class="lead"> <i class="fa fa-check"></i> Generate and view reports </p>
  <p class="lead"> <i class="fa fa-check"></i> Overall Audit Summary</p>
  <p class="lead"> <i class="fa fa-check"></i> Departmental Charts</p>
  <p class="lead"> <i class="fa fa-check"></i> Clause Charts</p>
  <p class="lead"> <i class="fa fa-check"></i> Evidence Reviewr</p>
  </div>
</div>
`;
}

onAdminClick();

var url = window.location.href;
var activeTab = url.substring(url.indexOf("#") + 1);


$("#adminPhone").click(() => {
  $(".m_hide_admin ").show()
  $(".hide_mobile_app").hide();
  $(".report_panel").hide();
  $("#adminPhone").addClass("show active");
  $("#mobilePhoneApp").removeClass("show active");
  $("#reportsPhonePanel").removeClass("show active");
});
$("#mobilePhoneApp").click(() => {
  $(".hide_mobile_app").show();
  $(".report_panel").hide();
  $(".m_hide_admin ").hide()
  $("#mobilePhoneApp").addClass("show active");
  $("#adminPhone").removeClass("show active");
  $("#reportsPhonePanel").removeClass("show active");
});
$("#reportsPhonePanel").click(() => {
  $(".report_panel").show();
  $(".m_hide_admin ").hide()
  $(".hide_mobile_app").hide();
  $("#reportsPhonePanel").addClass("show active");
  $("#mobilePhoneApp").removeClass("show active");
  $("#adminPhone").removeClass("show active");
})


