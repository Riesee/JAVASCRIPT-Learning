// PROTOTYPE AJAX CALLBACK

eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    // Change
    document.getElementById("language").addEventListener("change",bayrak);
    

}

const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);


function translateWord(e){
    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    translate.translateWord(function(err,response){
        if (err){
            console.log(err);
        }else{
            ui.displayTranslate(response)
        }
    });



    e.preventDefault();
}

const ui = new UI();



function bayrak(e){
    // Arayüz işlemleri
    ui.changeUI();




    e.preventDefault()
}


