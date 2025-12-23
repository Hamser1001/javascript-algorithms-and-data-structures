class User {
    static userCount = 0;
    constructor(username) {
        this.username = username;
        User.userCount++;
    }
    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello() {
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("Hamza");
const user2 = new User("Hamid");
const user3 = new User("Tarek");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);

user1.sayHello();
User.getUserCount();