const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearFilms = document.getElementById("clear-films");

// UI Objesi Başlama
const ui = new UI();

// Storage Objesi Üret
const storage = new Storage();

// Tüm Eventleri Yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clearFilms.addEventListener("click",clearAllFilms);
}


function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" | director === "" | url === ""){
        // Hata
        ui.displayMessages("Yüm Alanları doldurun...","danger");
        console.log("hata");

    }
    else{
        // Yeni Film
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); // Arayüze film Ekleme
        storage.addFilmToStorage(newFilm); // Storageye film Ekleme
        ui.displayMessages("Film başarıyla eklendi...","success")
    }


    ui.clearInput(titleElement,directorElement,urlElement);
    
    e.preventDefault();
}

function deleteFilm(e){

    if (e.target.id === "delete-film"){
        // UI'dan silme
        ui.deleteFilmFromUI(e.target);
        
        // LocalHosttan Slme
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme işlemi Başarılı...","success");
        
    }
    
}

function clearAllFilms(){
    if ( confirm("Emin misiniz ?")) {
        // UI'dan silme
        ui.deleteAllFilmsFromUI();

        // LocalHosttan Silme
        storage.deleteAllFilmsFromStorage();

        ui.displayMessages("Tüm Filmlerin Silme işlemi Başarılı...","success");
    }
    


}