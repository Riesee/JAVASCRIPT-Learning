class UI{
    constructor(){
        this.profile = document.getElementById("profile");
        this.repos = document.getElementById("repos");
        this.cardBody = document.querySelector(".card-body");
        this.historyList = document.getElementById("last-users");
        this.githubName = document.getElementById("githubname");


    }

    clearInput(){
        this.githubName.value = "";
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${user.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${user.name}</strong></div>
                         <hr>
                         <div id="bio">${user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${user.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="email">${user.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>
        
        `
    }

    showRepos(repos){
        
        repos.forEach(repo => {
            repos.innerHTML += `
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <div class="col-md-6">  
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                    
                        </div>
                </div>

            </div>
            
            `
            
        });
 
    }

    showError(message){
        const div = document.createElement("div");
        div.className = "alert alert-danger";
        div.innerHTML = message;
        this.cardBody.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 2000);

    }

    AddHistory(username){
        let users = Storage.getUsersFromStorage();
        if (users.indexOf(username) === -1){
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = username

            this.historyList.appendChild(li)
        }
    }

    deleteHistory(){
        while (this.historyList.firstElementChild !== null){
            this.historyList.removeChild(this.historyList.firstElementChild)
        }
    }

    getHistoryFromUI(){
        let users = Storage.getUsersFromStorage();
        users.forEach(user => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = user

            this.historyList.appendChild(li)           
        });
    }
}