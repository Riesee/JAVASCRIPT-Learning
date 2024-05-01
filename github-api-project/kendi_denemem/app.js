const githubForm = document.getElementById("github-form");
const githubName = document.getElementById("githubname");
const clearHistory = document.getElementById("clear-last-users");
const lastUsersList = document.getElementById("last-users");

const github = new Github();
const ui = new UI();

eventListeners()


function eventListeners(){
    githubForm.addEventListener("submit",searchUser);
    document.addEventListener("DOMContentLoaded",getHistory);
    clearHistory.addEventListener("click",clearAllHistory);
    
    
}



function searchUser(e){
    github.getData(githubName.value)
    .then(response => {

        if (response.user.message === "Not Found"){
            ui.showError("Kullanıcı Bulunamadı");
            console.log("girdi");
        }else{
            const user = response.user;
            const repo = response.repo;
            ui.showProfile(user)
            ui.showRepos(repo)
            ui.AddHistory(githubName.value)
            Storage.addUserDataToStorage(githubName.value)
            ui.clearInput()
        }
   
    })
    .catch(error => ui.showError(error))




    e.preventDefault();
}


function getHistory(){
    ui.getHistoryFromUI();
}

function clearAllHistory(){
    Storage.clearAllDataFromStorage();
    ui.deleteHistory();

}