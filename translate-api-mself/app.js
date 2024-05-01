const translateInput = document.getElementById('translateInput');
const translateBtn = document.getElementById('translateBtn');
const targetLanguage = document.getElementById('targetLanguage');
const translatedTextArea = document.getElementById('translatedTextArea');
const translateHeader = document.getElementById('translateHeader');
const baseLanguage = document.getElementById('baseLanguage');




eventListeners();

function eventListeners() {
    translateBtn.addEventListener('click', translate);
}


function translate(e) {
    console.log(translateInput.value);
    console.log(targetLanguage.value);
    translateHeader.textContent = `${baseLanguage[baseLanguage.selectedIndex].innerText} -> ${targetLanguage[targetLanguage.selectedIndex].innerText}`;

    gett(translateInput.value);




    e.preventDefault(); 
}


function gett(text){

    const data = JSON.stringify({
        q: text,
        source: baseLanguage.value,
        target: targetLanguage.value
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            let textt = JSON.parse(this.responseText).data.translations.translatedText;
            translatedTextArea.textContent = textt;
        }
    });

    xhr.open('POST', 'https://deep-translate1.p.rapidapi.com/language/translate/v2');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('X-RapidAPI-Key', 'f2618c82f6msha775b3e18420ef3p1a93fdjsn5c70a27124be');
    xhr.setRequestHeader('X-RapidAPI-Host', 'deep-translate1.p.rapidapi.com');

    xhr.send(data);
}
