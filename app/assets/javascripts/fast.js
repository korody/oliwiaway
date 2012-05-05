$(function() {
				$(".scrollable").scrollable({ mousewheel: true });

				$('.fast').click(function() {
					$(".scrollable").scrollable().end(3000);
				});

				$('.controls a').click(function() {
					var currentIndex = ($(".scrollable").scrollable().getIndex());
					if (currentIndex > 0) {
						$('.fast').css('visibility','visible')
					} else if (currentIndex > 20) {
						$('.fast').css('visibility','hidden')
					}
				})

			});

	