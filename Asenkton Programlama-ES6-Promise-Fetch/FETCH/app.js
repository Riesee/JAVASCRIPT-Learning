function getTextFile(){ // Text Dosyası

    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}


function getJsonFile(){ // Localdeki Json dosyasından veri almak

    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

}


// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_XcJ8xhGa2BpvNCuWIoTxm3JzOFmvvXiR9mUrPykK&currencies=&base_currency=EUR


function getExternalAPI(){
    
    fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_XcJ8xhGa2BpvNCuWIoTxm3JzOFmvvXiR9mUrPykK&currencies=&base_currency=EUR")
    .then(response => response.json())
    .then(data => console.log(data.data.TRY))
    .catch(err => console.log(err))
}




// getTextFile();
// getJsonFile();
getExternalAPI();