const user ={
    username : "Surabhi",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the world of JS`);// here this keyword is used to refer the username property of the object 
        console.log(this);
        
    }
}
  user.welcomeMessage(); // Surabhi welcome to the world of JS
// In the above code, we have created an object user with properties username and price.
// We have also created a method welcomeMessage that uses the this keyword to refer to the username property of the object.
// The this keyword is used to refer to the current object in which the method is defined.
// In this case, the this keyword refers to the user object.

user.username = "sam";
user.welcomeMessage();
