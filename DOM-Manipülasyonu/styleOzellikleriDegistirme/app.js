const element = document.querySelector("#clear-todos");


// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);


// Style ve Element özelliklerini değiştirme

// element.className = "denemedeğişti değişti-mi";
// element.style.color = "red";
// element.style.marginLeft = "175px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";
// element.textContent = "Silin";
// element.innerHTML = "<span style='color:blue' >Silin</span>";

let element2 = document.querySelector("li:nth-child(2)")

element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(element => {
    element.style.background = "#ccc";
    element.style.color = "red"
});


// const elements = document.querySelectorAll(".list-group-item");  // Node List

// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee"
// });



console.log(element2);



// console.log(element);

