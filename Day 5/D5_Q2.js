class User {
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in`);

    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}
let user1 = new User(`mayuri`,20,`m@gmail.com`);
user1.login();
let user2 = new User(`nimesh`,60,`nimesh@gmail.com`);
let user3 = new User(`vaidehi`,26,`vaidehi@gmail.com`);
let user4 = new User(`rishi`,30,`rishi@gmail.com`);

class Moderator extends User{
    
    AddCoins(u){
        u.coins++;
        console.log(`coins of ${u.name} are ${u.coins}`);
    }
    removeCoins(u){
        u.course--;
        console.log(`coins of ${u.name} are ${u.coins}`);
    }
}
var mod =new Moderator("rohan",18,"rohan@gmail.com");

mod.AddCoins(user1);

class Admin extends Moderator{
    
    
    addCourse(user,course)
    {
        user.courses.push(course);
        console.log(user);
        return this;
    }
    deleteCourse(user){
        users=users.filter(u=>u.courses != user.courses);
    }
}
let adm= new Admin(`Neha`,22,`n@gmail.com`);

let users=[user1,user2,user3,user4,adm,mod];
console.log(users);
adm.addCourse(user1,"java");
//adm.deleteCourse(user1);

mod.AddCoins(user1);
mod.AddCoins(user1);
console.log(user1);
mod.removeCoins(user1);
console.log(user1);

console.log(users);


