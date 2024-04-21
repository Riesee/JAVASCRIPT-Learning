const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearFilms = document.getElementById("clear-films");


// Tüm Eventleri Yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
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
        UI.displayMessages("Yüm Alanları doldurun...","danger");
        console.log("hata");

    }
    else{
        // Yeni Film
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); // Arayüze film Ekleme
        Storage.addFilmToStorage(newFilm); // Storageye film Ekleme
        UI.displayMessages("Film başarıyla eklendi...","success")
    }


    UI.clearInput(titleElement,directorElement,urlElement);
    
    e.preventDefault();
}

function deleteFilm(e){

    if (e.target.id === "delete-film"){
        // UI'dan silme
        UI.deleteFilmFromUI(e.target);
        
        // LocalHosttan Slme
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Silme işlemi Başarılı...","success");
        
    }
    
}

function clearAllFilms(){
    if ( confirm("Emin misiniz ?")) {
        // UI'dan silme
        UI.deleteAllFilmsFromUI();

        // LocalHosttan Silme
        Storage.deleteAllFilmsFromStorage();

        UI.displayMessages("Tüm Filmlerin Silme işlemi Başarılı...","success");
    }
    


}