document.getElementById("change").addEventListener("click",change);

function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://v6.exchangerate-api.com/v6/44bdf5f22582edd09e359f9b/latest/EUR",true);


    xhr.onload = function(){
        if (this.status == 200) {
            const response = JSON.parse(this.responseText);
            // console.log(this.responseText);

            const rate = response.conversion_rates.TRY
            const amount = Number(document.getElementById("amount").value);
            
            document.getElementById("tl").value = amount * rate;

            
        }
    }

    xhr.send()

}