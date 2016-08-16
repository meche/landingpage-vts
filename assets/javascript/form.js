(function () {
	'use strict'

	document.getElementById("upload-resume").onchange = function () {
    document.getElementById("resume-file").value = this.value.split('\\').pop()
	}
})();
