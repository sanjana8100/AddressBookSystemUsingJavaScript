class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    toString(){
        return (`First Name: ${this.firstName} \nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity : ${this.city}\nState : ${this.state}\nZip code : ${this.zip}\nPhone Number : ${this.phoneNumber}\nEmail ID: ${this.email}`)
    }
}
let newContact =new Contact("Sanjana","Guptha","Cottonpet","Bengaluru","Karnataka",563102,8794562371,"sanjana@gmail.com")
console.log(newContact.toString())