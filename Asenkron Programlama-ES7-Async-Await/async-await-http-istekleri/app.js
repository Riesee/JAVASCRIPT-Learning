class Request {

    async get(url){ // Get Request

    const response = await fetch(url); // response object
    const data = response.json() // JSON object

    return data;



    }

    async post(url,data){

        const response = await fetch(url,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    }
                  }); // Response object
        const data2 = response.json();

        return data2;



    }


    async put(url,data){

        const response = await fetch(url,{
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    }
                  });
        const data2 = response.json();
        return data2;



    }


    async delete(url){

        const response = await fetch(url,{method: 'DELETE'});
        return "Veri silme işlemi başarılı";
    }

}


const request = new Request();


// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {
//     console.log(albums)
// })
// .catch(err => console.log(err));



// request.post("https://jsonplaceholder.typicode.com/albums",{
//       userId: 1,
//       title: 'RieseTitle'
//     })
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// // // console.log(albums) // Asenkron olduğu için yazdırmıyo




// request.put("https://jsonplaceholder.typicode.com/albums/1",{
//     userId:10,
//     title: "Tarkan Karma"
// })
// .then(changedAlbum => console.log(changedAlbum))
// .catch(err => console.log(err))




// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(message => console.log(message))
// .catch(err => console.log(err));
