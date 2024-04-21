class Storage {


    static addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
    
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static getFilmsFromStorage(){
        let films;
    
        if (localStorage.getItem("films") === null){
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
        }
    
        return films;
    }
    
    static deleteFilmFromStorage(filmTitle) {
        let films = this.getFilmsFromStorage();
        
        films.forEach(function(film,index){
            if(film.title === filmTitle) {
                // Splice
                films.splice(index,1);
            }
        });
    
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static deleteAllFilmsFromStorage() {
        /*  BENİM YÖNTEM ÇALIŞIYOR.
         let films = this.getFilmsFromStorage();
    
        films = [];
    
        localStorage.setItem("films",JSON.stringify(films)); */
    
        localStorage.removeItem("films");
    
    }
    

}




