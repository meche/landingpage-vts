(function () {
	'use strict'

	document.getElementById("upload-resume").onchange = function () {
    document.getElementById("resume-file").value = this.value.split('\\').pop()
	}

	var button = document.getElementById('validate')
	button.addEventListener('click', validate, true)

	function validate () {
		/**
		 * Fields to validate
		 */
		var errors			= document.getElementById('errors')
		var name 				= document.getElementById('your-name').value
		var email 			= document.getElementById('your-email').value
		var ddd 				= document.getElementById('your-phone-ddd').value
		var phone 			= document.getElementById('your-phone').value
		var experience 	= document.getElementsByName('experience')
		var interest 		= document.getElementsByName('interest')
		var resume 			= document.getElementById('resume-file').value

		while (errors.firstChild) {
			errors.removeChild(errors.firstChild);
		}

		validation_name(name)
		validation_email(email)
		validation_telephone(ddd, phone)
		validation_experience(experience)
		validation_interest(interest)
		validation_resume(resume)
	}

	function messages (text) {
		var parent = document.getElementById('errors')
		var li = document.createElement('li')
		li.textContent = text
		parent.appendChild(li)
	}

	function validation_name (name) {
		if (name < 5) {
			messages("O campo nome precisa ser preenchido")
			return false
		}
		return true
	}

	function validation_email (email) {
		var regexEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
		if (!regexEmail.test(email)) {
			messages("O email informado não é válido!")
			return false
		}
		return true
	}

	function validation_telephone (ddd, phone) {
		if (ddd < 2 || phone < 8) {
			messages("Varifique o campo telefone algo está errado!")
			return false
		}
		return true
	}

	function validation_experience (experience) {

		var checkCount = 0;
		for (var i = 0; i < experience.length; i++) {
			if (experience[i].checked) {
				checkCount++;
			}
		}
		if (checkCount < 1) {
			messages("Selecione um grau de experiência!")
			return false;
		}
		return true;
	}

	function validation_interest (interest) {
		var checkCount = 0;
		for (var i = 0; i < interest.length; i++) {
			if (interest[i].checked) {
				checkCount++;
			}
		}
		if (checkCount < 1) {
			messages("Selecione pelo menos uma área de interesse!")
			return false;
		}
		return true;
	}

	function validation_resume (resume) {
		if (resume === '') {
			messages("Você precisa anexar seu currículo. Clique em BUSCAR para navegar entre seus arquivos!")
			return false
		}
		return true
	}

})();
