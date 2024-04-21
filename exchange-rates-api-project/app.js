


eventListeners();




function eventListeners(){

	document.getElementById("amount").addEventListener("input",exchangeValue);
	document.getElementById("firstCurrency").addEventListener("change",chanUI);
	document.getElementById("secondCurrency").addEventListener("change",chanUI);
}


currency = new Currency(document.getElementById("amount").value,document.getElementById("firstCurrency").value,document.getElementById("secondCurrency").value)

function exchangeValue(e){

    currency.changeParameters(document.getElementById("amount").value,document.getElementById("firstCurrency").value,document.getElementById("secondCurrency").value);
	
	currency.currencyExchange(e.target.value,function(err,response){
		if (err){
			console.log(err)
		}else{
			ui.changeUI(document.getElementById("firstCurrency").value, document.getElementById("secondCurrency").value,response)
			ui.displayResult(response)
		}
	})

	e.preventDefault();

}

const ui = new UI();

function chanUI(e){
    currency.changeParameters(document.getElementById("amount").value,document.getElementById("firstCurrency").value,document.getElementById("secondCurrency").value);
	

	currency.currencyExchange(document.getElementById("amount").value,function(err,response){
		if (err){
			console.log(err)
		}else{
			ui.changeUI(document.getElementById("firstCurrency").value, document.getElementById("secondCurrency").value,response)
			ui.displayResult(response)
		}
	})

	
	
	
	ui.changeUI(document.getElementById("firstCurrency").value, document.getElementById("secondCurrency").value);




    e.preventDefault();
}


