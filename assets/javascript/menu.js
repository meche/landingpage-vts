(function (){
	'use strict'

	var menu = document.querySelector('.menu-list')

	menu.addEventListener('click', function () {
		if (menu.classList.contains('hidden')) {
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
