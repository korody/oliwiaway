$(function() {
				$(".scrollable").scrollable({ mousewheel: true });

				$('.play').click(function() {
					$(".scrollable").scrollable().end(40000);
				});

				$('.controls a').click(function() {
					var currentIndex = ($(".scrollable").scrollable().getIndex());
					if (currentIndex === 0 ) {
						$('.play').css('visibility','visible')
					} else if (currentIndex > 0) {
						$('.play').css('visibility','hidden')
					}
				})

			});
