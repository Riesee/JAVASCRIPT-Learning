// async function test(data) {

//     // Promise return new Promise

//     // return data;

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Bu bir değerdir.");
//         }, 5000);
//     })

//     // 

//     let response = await promise; // 5 saniye bekleyecek.

//     console.log("Naber");
// }


// console.log(test("Merhaba"));

// test("Merhaba").then(res => console.log(res));






// async function test(data) {
//     // Promise return new Promise
//     // return data;  // -> bunu
//     // return new Promise((resolve,reject) => {
//     //     resolve(data);
//     // });  // ASYNC İLE BU FORMATA ÇEVİRİYOR. 



//     // ///////////////////////
//     let promise = new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Bu bir değerdir.");
//         }, 5000);
//     })

//     let response = await promise; // 5 saniye bekleyecek

//     return response;
// }


// test("Merhaba").then(res => console.log(res));











// async function testData(data){
    
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
            
//             if (typeof data === "string") {
//                 resolve(data)                
//             }
//             else {
//                 reject(new Error("Lütfen string bir değer girin!"));
//             }
//         }, 5000);
//     });


//     const response = await promise;

//     return response;
// }




// testData(12).then(data => console.log(data))
// .catch(err => console.error(err))






async function getCurrency(url) {

    const response = await fetch(url) // Response object    

    const data = await response.json(); // Json object

    return data;

}


getCurrency("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_XcJ8xhGa2BpvNCuWIoTxm3JzOFmvvXiR9mUrPykK&currencies=&base_currency=EUR")
.then(response => console.log(response))
































































































