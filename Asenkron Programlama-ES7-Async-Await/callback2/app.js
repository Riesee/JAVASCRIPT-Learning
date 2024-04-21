// Callback nedir ?

// Timeing - event - http istekleri


// callback - promise - async await

// callback bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkrona geçeriz.

function getName(callback) {
  setTimeout(() => {
    // Servisten ismimi getirdi.
    let name = "Hilmi" // web servisten geldi
    callback(name)


    
  }, 1000);
}

function getSurname(name,callback) {
  setTimeout(() => {
    let surname = "Özyurt" // name'e göre soyismi buldu servisten
    callback(surname)
    
  }, 500);
}



function getAge(name, surname , callback){
  setTimeout(() => {
    let age = 23; // ismi hilmi ve soyismi özyurt olanı servisten yaşını getirdi.
    callback(age);
  }, 3000);
}




// getName(getSurname);

getName((name) => {
  getSurname(name , (surname) => {
    getAge(name,surname, (age) => {
      console.log(name,surname,age);
    })
  })
})



// getSurname();