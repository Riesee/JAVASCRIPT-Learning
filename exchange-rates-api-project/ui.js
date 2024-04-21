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