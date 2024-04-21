//? ---------- PROMİSE ----------------

// let check = false;

// const promise1 = new Promise((resolve, reject) => {
//     if(check){
//         resolve("Promise Başarılı")
//     }
//     else {
//         reject("Promise başarısız...")
//     }
// })

// console.log(promise1);

// ASENKRON YAPILARI SENKRONA ÇEVİRMEK İÇİN KULLANILIR
// CALLBACK ALTERNATİFİ
// ES6

// let check = true;

// function createPromise() {
//   return new Promise((resolve, reject) => {
//     if (check) {
//       resolve("Promise de herhangi bir sıkıntı yok.");
//     } else {
//       reject("Sıkıntı büyük.");
//     }
//   });
// }

// createPromise()
//   .then((response) => 
//     console.log(response)
//   )
//   .catch((err) => 
//     console.log(err)
//   )
//   .finally(() => console.log("Her zaman çalışır."))





//? promise + xmlhttprequest




// function readStudents(url){
//     return new Promise((resolve,reject) => {
//         const xhr = new XMLHttpRequest();
//         try {
            
//             xhr.addEventListener("readystatechange",()=>{
//                 if(xhr.readyState === 4 && xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             })

//         } catch (error) {
//             reject(error)
//         }

//         xhr.open("GET",url);
//         xhr.send();

//     })
// }


// readStudents("students.json")
// .then((data)=> console.log(data))
// .catch((error) => console.log("Hata Oluştu" , error))




// function getUsers(url){
//     return new Promise((resolve,reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.addEventListener("readystatechange", () => {
//             try {
//                 if(xhr.status === 200 && xhr.readyState === 4){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             } catch (error) {
//                 reject(error)
//             }
//         })

//         xhr.open("GET",url);
//         xhr.send();
//     })
// }


// function commentsByUserID(url){
//     return new Promise((resolve,reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.addEventListener("readystatechange", () => {
//             try {
//                 if (xhr.status === 200 && xhr.readyState === 4) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             } catch (error) {
//                 reject(error)
//             }
//         })

//          xhr.open("GET",url);
//          xhr.send();
//     })
// }


// getUsers("https://jsonplaceholder.typicode.com/users/3")
// .then(data => {
//     console.log(data)
//     return commentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
// })
// .then(response => console.log(response))
// .catch((error)  => console.log(error))
// .finally(() => {
//     // mail atma kodlarını çalıştıabiliriz.
//     // veritabanı kapatabiliriz.
// })


// const p1 = Promise.resolve("Birinci Promise başarılı.");
// const p2 = Promise.resolve("ikinci Promise başarılı.");
// const p3 = new Promise((resolve, reject) => {
//     resolve("Üçüncü promise başarılı")
// })
// const p4 = Promise.reject("Dördüncü Promise Hatalı Reis.");


// Promise.all([p1,p2,p3,p4])
// .then(res => {
//     // console.log(res)
//     for(let value of res){
//         console.log(value)
//     }
// })
// .catch(err => console.log(err))