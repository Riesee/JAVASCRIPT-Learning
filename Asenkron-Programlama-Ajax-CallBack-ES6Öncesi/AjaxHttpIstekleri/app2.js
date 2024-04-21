class Request {
    constructor(){
        this.xhr = new XMLHttpRequest();

    };
    get(url,callback) {
        this.xhr.open("GET",url)

        this.xhr.onload = () => {
            if (this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Bir hata oluştu.",null);
            }
        };

        this.xhr.send()

    }
    
}


const request = new Request();

request.get("https://jsonplaceholder.typicode.com/posts",function(err,response){
    if (err === null){
        console.log(response);
    }
    else {
        console.log(err);
    }
})