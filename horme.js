function calculate() {

	//assets
	let arr = document.querySelectorAll('.calc');
	let assets = 0;

	arr.forEach(arrs => {
		if (!arrs.value == '') {
			let currency = arrs.value.replace("$", "");
			let noCurrency = parseFloat(currency.replace(/,/g, ""));
			//alert(x);	
			if (noCurrency > 0)
				assets += noCurrency;
		}
	})

	document.getElementById("assets").innerHTML = formatter.format(assets);
	//debts
	let arr2 = document.querySelectorAll('.calc2');
	var liabilities = 0;

	arr2.forEach(arrs2 => {
		if (!arrs2.value == '') {
			let currency = arrs2.value.replace("$", "");
			var noCurrency = parseFloat(currency.replace(/,/g, ""));
			//alert(x);	
			if (noCurrency > 0)
			liabilities -= noCurrency;
		}
	})

	document.getElementById("liabilities").innerHTML = formatter.format(liabilities);
	document.getElementById("total").innerHTML = formatter.format(assets + liabilities);

	document.getElementById("total").style.fontSize = 'xx-large';
	document.getElementById("total").style.fontWeight = "bold";
	if (assets + liabilities < 0) {
		document.getElementById("total").style.color = '#cc2936';
	} else if (assets + liabilities >= 0) {
		document.getElementById("total").style.color = 'black';
	}
}

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'NGN',
	minimumFractionDigits: 0,
	// the default value for minimumFractionDigits depends on the currency
	// and is usually already 2
});

function resetform() {
	document.getElementById("assets").innerHTML = '0';
	document.getElementById("liabilities").innerHTML = '0';
	document.getElementById("total").innerHTML = '0';
	//location.reload();
}

function rejectNegatives(field) {
	let nocurrency = parseInt(field.value.replace("$", ""));

	if (nocurrency < 0) {
		alert("Please, enter a positive number!");
		field.value = "";
		field.focus();
	}
	calculate();
}