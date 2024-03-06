// Event Bubbling

// document.querySelector(".container").addEventListener("click",function(){
//   console.log("Div Container");
// });
// document.querySelector(".card.row").addEventListener("click",function(){
//   console.log("Card Row Container");
// });
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//   console.log("Card body Container");
// });



// Event Capturing - Olay Yakalama - Delegation

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click",run);


function run(e){
  if(e.target.className === "fa fa-remove"){
    console.log("Silindi");
  }
  if (e.target.id === "filter"){
    console.log("Filtreleme İşlemi");
  }
  if (e.target.id === "clear-todos"){
    console.log("Tüm Taskları Temizleyin işlemi");
  }
  console.log(e.target);
}
