function Translate (word,language) {
    this.apikey = "0eeb9ba9063997e6e4811a21ecb1fd0753817fc7";
    this.word = word;
    this.language = language;
    

    // XHR object

    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function (callback) {
    // Ajax işlemleri

    const data = JSON.stringify({
        text: this.word,
        source: 'tr',
        target: this.language
    });


    this.xhr.open('POST', 'https://translate-plus.p.rapidapi.com/translate',true);
    this.xhr.setRequestHeader('content-type', 'application/json');
    this.xhr.setRequestHeader('X-RapidAPI-Key', 'f2618c82f6msha775b3e18420ef3p1a93fdjsn5c70a27124be');
    this.xhr.setRequestHeader('X-RapidAPI-Host', 'translate-plus.p.rapidapi.com');

    this.xhr.onload = () =>{
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);

            const text = json.translations.translation;

            callback(null,text);

        }
        else {
            callback("Bir hata oluştu",null);
        }
    }

    this.xhr.send(data);
}; 



Translate.prototype.changeParameters = function(newWord,newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}