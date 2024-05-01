// Elementleri seçme

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");

const github = new Github();
const ui = new UI();


eventListeners()



function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}


function getData(e){

    let username = nameInput.value.trim(); // trim gereksiz boşlukları siliyo

    if (username === ""){
        alert("Lütfen geçerli bir kullanıcı adı giriniz.");
    } else {
        github.getGithubData(username)
        .then(response => {
            if (response.user.message === "Not Found"){
                ui.showError("Kullanıcı Bulunamadı.");
            } else {

                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);

                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
                
            }
        })
        .catch(err => ui.showError(err));
    }

    ui.clearInput(); // İnputu temizleme



    e.preventDefault();
}

function clearAllSearched(){
    // Tüm arananları temizleme işlemi


    if(confirm("Emin misiniz ?")){
        // Silme
        Storage.clearAllSearchedUsersFromStorage(); // Storagedan Temizlemek
        ui.clearAllSearchedFromUI();
    }


}

function getAllSearched(){
    // Arananları storageden al uiya ekle

    let users = Storage.getSearchedUsersFromStorage();
    let result = ""

    users.forEach(user => {

        result += `<li class="list-group-item">${user}</li>`
    });

    lastUsers.innerHTML = result;

    
}