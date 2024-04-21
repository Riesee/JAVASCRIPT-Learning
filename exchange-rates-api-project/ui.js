/* 
BENİM KODLARIM ÇALIŞIYOR!

function UI(){
    this.outputFirst = document.getElementById("outputFirst");
    this.outputSecond = document.getElementById("outputSecond");
    this.outputResult = document.getElementById("outputResult");
}


UI.prototype.changeUI = function (base,output) {
    this.outputFirst.innerHTML = base;
    this.outputSecond.innerHTML = output;

}

UI.prototype.displayResult = function(result) {
    this.outputResult.value = result;
}

 */

class UI {
    constructor(firstSelect,secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }

    changeFirst(){
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    }

    changeSecond(){
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;

    }

    displayResult(result){
        this.outputResult.value = result;
    }


}