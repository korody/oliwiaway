$(function() {
				$(".scrollable").scrollable({ mousewheel: true });

				$('.home').click(function() {
					$(".scrollable").scrollable().begin(1500);
				});

				$('.controls a').click(function() {
					var currentIndex = ($(".scrollable").scrollable().getIndex());
					if (currentIndex > 0) {
						$('.home').css('visibility','visible')
					} else if (currentIndex === 0) {
						$('.home').css('visibility','hidden')
					}
				})

			});

	