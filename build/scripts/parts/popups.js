export default function initPopups() {
    $('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom',
        closeMarkup: '<button type="button" class="mfp-close"></button>',
    });
}
  