/* 

BENİM KODLARIM ÇALIŞIYOR!.

function Currency (value,base,output) {
    this.apikey = "fca_live_XcJ8xhGa2BpvNCuWIoTxm3JzOFmvvXiR9mUrPykK"
    this.value = value;
    this.base = base;
    this.output = output;

    this.xhr = new XMLHttpRequest();
}

Currency.prototype.currencyExchange = function (value,callback) {

    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${this.apikey}&currencies=&base_currency=${this.base}`

    this.xhr.open("GET",url);

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const output = json.data[this.output]
            callback(null,value*output);




        }else{
            callback("Apide Hata oluştu.",null);
        }
    }

    this.xhr.send();
}

Currency.prototype.changeParameters = function(value,base,output) {
    this.value = value;
    this.base = base;
    this.output = output;
}

 */



class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.apikey = "fca_live_XcJ8xhGa2BpvNCuWIoTxm3JzOFmvvXiR9mUrPykK"
        this.url = `https://api.freecurrencyapi.com/v1/latest?apikey=${this.apikey}&currencies=&base_currency=`

        this.amount = null;
    }

    exchange(){
        return new Promise((resolve,reject) => {
        fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
            const parity = data["data"][this.secondCurrency]
            const amount2 = Number(this.amount);
            let total = parity * amount2;

            resolve(total);
        })
        .catch(err => reject(err));
        })
        
    }
    
    changeAmount(amount){
        this.amount = amount;
    }

    
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;

    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    
    }
}