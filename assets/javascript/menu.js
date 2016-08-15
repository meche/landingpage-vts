(function (){
	'use strict'

	var menu = document.querySelector('.menu-list')

	menu.addEventListener('click', function (element) {
		if (menu.classList.contains('hidden')) {
		  // The box that we clicked has a class of bad so let's remove it and add the good class
		  setTimeout(function () {
			  menu.classList.remove('hidden')
			  menu.classList.add('active')
		  }, 250)

		} else {
			setTimeout(function () {
				menu.classList.remove('active')
				menu.classList.add('hidden')
			}, 250)
		}
	})

})()
