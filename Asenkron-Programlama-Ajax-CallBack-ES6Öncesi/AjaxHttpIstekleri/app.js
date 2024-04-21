// Ajax, Callback, Http requests

class Request {
    constructor(){
        this.xhr = new XMLHttpRequest();

    }
    // Get Request

    get(url,callback){

        this.xhr.open("GET",url) // Bağlantı açık

        this.xhr.onload = () => {

            if (this.xhr.status === 200){
                callback(null,this.xhr.responseText); // İsteğimiz bitti
            }
            else {
                // Hata durumu
                callback("Get Request: bir hata oluştu.",null);
            }
        };

        this.xhr.send();
    }


    // POST Request

    post(url,data,callback){
        this.xhr.open("POST",url);

        this.xhr.setRequestHeader("Content-Type", "application/json"); // JSON Verisi

        this.xhr.onload = () => {
            if (this.xhr.status === 201){
                // Başarılı
                callback(null,this.xhr.responseText);

            }
            else {
                callback("Post Request: bir hata oluştu",null);
            }
        }

        this.xhr.send(JSON.stringify(data));

    }


    // PUT Request

    put(url,data,callback){
        this.xhr.open("PUT",url);

        this.xhr.setRequestHeader("Content-Type", "application/json");

        this.xhr.onload = () => {
            if (this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Put Request: bir hata oluştu",null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }


    // DELETE Request

    delete(url,callback){

        this.xhr.open("DELETE",url) // Bağlantı açık

        this.xhr.onload = () => {

            if (this.xhr.status === 200){
                callback(null,"Veri silme işlemi başarılı."); // İsteğimiz bitti
            }
            else {
                // Hata durumu
                callback("DELETE Request: bir hata oluştu.",null);
            }
        };

        this.xhr.send();
    }


}

const request = new Request();

//  request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if (err === null){
//         // Başarılı
//         console.log(response);
//     }
//     else {
//        console.log(err); 
//     }
// });

// request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
//     if (err === null){
//         // Başarılı
//         console.log(response);
//     }
//     else {
//        console.log(err); 
//     }
// });



// request.post("https://jsonplaceholder.typicode.com/albums",{userId: 2,title:"Riese"},function (err,album){
//     if (err === null) {
//         // Başarılı
//         console.log(album);

        
//     }
//     else {
//         // Hata Oluştu
//         console.log(err);
//     }
// })


// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId: 143,title:"Riese Albümü"},function (err,album){
//     if (err === null) {
//         // Başarılı
//         console.log(album);

        
//     }
//     else {
//         // Hata Oluştu
//         console.log(err);
//     }
// })

 request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if (err === null){
        // Başarılı
        console.log(response);
    }
    else {
       console.log(err); 
    }
});