//? ASYNC AWAİT

// Promise Then zinciri

// then(){
//     then(){
//         then(){
//             console.log("sadsad");
//         }
//     }
// }


// async function hello(){
//     return "Hello world"
// }


// console.log(hello())


// hello()
// .then(res => console.log(res))



// document.querySelector("#button").addEventListener("click",()=> {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(post => {
//         console.log(post.title)
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then(res => res.json())
//         .then(comments => console.log(comments))
//     })
// })


// ASYNC AWAİT İLE YAPILIŞI
document.querySelector("#button").addEventListener("click", async ()=> {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const comments = await ( await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(post, comments)

})
