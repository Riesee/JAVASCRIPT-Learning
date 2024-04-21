/* 
BENİM KODLARIM ÇALIŞIYOR!

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


 */



// Elementleri seçme

const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect);

eventListeners();


function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function () {
		currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
		ui.changeFirst();

    };
    secondSelect.onchange = function () {
		currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
		ui.changeSecond();

    };
}

function exchangeCurrency(){

	currency.changeAmount(amountElement.value);
	
    currency.exchange()
	.then(result => ui.displayResult(result))
	.catch(err => console.log(err));

}
