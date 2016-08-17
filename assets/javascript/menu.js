(function (){
	'use strict'

	var menu = document.querySelector('.menu-list')
	var menuGlobal = document.querySelector('.header-menu')

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

	window.onscroll = function () {
		if (window.pageYOffset > 200) {
			menuGlobal.classList.add('menu-fixed')
		} else {
			menuGlobal.classList.remove('menu-fixed')
		}
	}
})();
