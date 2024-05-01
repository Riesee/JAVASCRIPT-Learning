class Storage {
    static getUsersFromStorage(){
        let users;
        
        if (localStorage.getItem("users") === null){
            users = []
        } else {
            users = JSON.parse(localStorage.getItem("users"));
        }

        return users;
    }

    static addUserDataToStorage(username){
        let users = this.getUsersFromStorage();
        if(users.indexOf(username) == -1){
            users.push(username);
        }
        localStorage.setItem("users",JSON.stringify(users))
    }

    static clearAllDataFromStorage(){
        localStorage.removeItem("users");
    }
}