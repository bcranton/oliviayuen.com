/* activate the carousel */
$("#carouselArt").carousel({ interval: false });

/* change modal title when slide changes */
$("#artModal").on("slid.bs.carousel", function () {
    $(".modal-footer").html($(this).find(".active img").attr("alt"));
})

$(".img-thumbnail").click(function () {
    $(".modal-footer").html($(this).attr("alt"));
})
