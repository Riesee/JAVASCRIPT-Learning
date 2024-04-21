// function getData(data) {
//   // Promise objesi döndüren fonksiyon
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         // Olumlu
//         resolve(data);
//       } else {
//         // Olumsuz
//         reject(new Error("Lütfen string bir değer girin."));
//       }
//     }, 5000);
//   });
// }

// // console.log(getData("Merhaba")); // Biz

// getData(12)
//   .then((data) => console.log("Gelen Değer",data))
//   .catch((err) => console.error(err));



function addTwo(number){

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if (typeof number === "number"){
                resolve(number + 2);
            }
            else {
                reject(new Error("Lütfen bir sayı girin"));
            }
        }, 3000);
    });
}


addTwo("Merhaba")
.then(response => {
    console.log(response);
    return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.error(err))
// Yalnızca 1 tane catch kullanacaksın - 1den çok then kullanılarbilir
// birden fazla then = Promise Chain
