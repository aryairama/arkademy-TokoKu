import "./jquery.min.js";
import "./owl.carousel.min.js";
import "https://cdn.tiny.cloud/1/ye3sivj2b6om6cs63viibjhwr9hkpy3j4wxc1zrjag2g2adv/tinymce/5/tinymce.min.js";
// Carousel
$("#carousel-trend").owlCarousel({
  nav: true,
  center: true,
  items: 3,
  loop: true,
  margin: 30,
  dotsClass: "owl-dots text-start",
  navContainerClass: "owl-nav position-relative",
  navClass: [
    "owl-prev shadow carousel-trend-btn-prev",
    "owl-next shadow carousel-trend-btn-next",
  ],
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.5,
    },
    576: {
      items: 1.5,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2.5,
    },
  },
});

$("#carousel-category").owlCarousel({
  nav: true,
  dots: false,
  loop: true,
  margin: 30,
  dotsClass: "owl-dots text-start",
  navContainerClass: "owl-nav position-relative",
  navClass: [
    "owl-prev shadow carousel-category-btn-prev",
    "owl-next shadow carousel-category-btn-next",
  ],
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 2.4,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
// Carousel
//sidebar
$(document).on("click", ".sidebar-toggler", function () {
  $(".sidebar").toggleClass("sidebar-active");
  $(".main-panel").toggleClass("w-100");
});
// sidebar
//modal add new address
if ($("#add-new-address").length > 0) {
  const modalAddNewAddress = new bootstrap.Modal($("#add-new-address"));
  if ($("#choose-another-address").length > 0) {
    const modalChooseAnotheAddress = new bootstrap.Modal(
      $("#choose-another-address")
    );
    $(".add-new-address").on("click", function () {
      modalAddNewAddress.show();
      modalChooseAnotheAddress.hide();
    });
  }
  $(".add-new-address").on("click", function () {
    modalAddNewAddress.show();
  });
}
//modal add new address
// Product gallery
$(".small-product-gallery").on(
  "click",
  ".img-small-product-gallery",
  function () {
    let clickImg = this;
    let targetImg = $(".img-big-product-gallery");
    targetImg.fadeOut("slow", () => {
      $(".img-small-product-gallery-active").removeClass(
        "img-small-product-gallery-active"
      );
      $(clickImg).addClass("img-small-product-gallery-active");
      targetImg.attr("src", clickImg.getAttribute("src")).fadeIn("slow");
    });
  }
);
// Product gallery
// text-editor
tinymce.init({
  selector: "#description",
  height: 300,
  menubar: false,
  plugins: [
    "advlist autolink lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table paste code help wordcount",
  ],
  toolbar:
    "undo redo | formatselect | " +
    "bold italic backcolor | alignleft aligncenter " +
    "alignright alignjustify | bullist numlist outdent indent | " +
    "removeformat | help",
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
});
// text-editor
