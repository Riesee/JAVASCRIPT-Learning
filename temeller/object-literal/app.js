let value;

const programmer = {
    name : "Muhammed Hilmi Özyurt",
    age : 24,
    email : "hilmi.ozyrt@gmail.com",
    langs : ["Python", "Java", "Javascript"],

    adress : {
        city : "Ankara",
        street : "Bahçelievler"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    },

}


value = programmer;

value = programmer.email; // Genel olarak
value = programmer["email"];

value = programmer.langs;

value = programmer.adress.city;


programmer.work();


const programmers = [
    {name : "Muhammed Hilmi", age : 25},
    {name : "Sezgin", age : 22}
]



value = programmers[0].name;




console.log(value);

