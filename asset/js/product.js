$(".small-product-gallery").on("click", ".img-small-product-gallery", function () {
    let clickImg = this
    let targetImg = $(".img-big-product-gallery");
    targetImg.fadeOut("slow", () => {
        $(".img-small-product-gallery-active").removeClass("img-small-product-gallery-active");
        $(clickImg).addClass("img-small-product-gallery-active");
        targetImg.attr("src", clickImg.getAttribute("src")).fadeIn("slow")
    })
});