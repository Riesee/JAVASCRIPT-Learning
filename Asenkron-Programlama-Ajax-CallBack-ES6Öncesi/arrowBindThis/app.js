const person = {
    age:25,

    // tellAge : function(){

    //     // This - person
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)

    tellAge : () => {
        console.log(this);
        console.log(this.age);
    }

    // this - window

    
}

person.tellAge();