class Contact{

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

    get firstName(){
        return this._firstName;
    }

    set firstName(firstName){
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName)){
            this._firstName = firstName;
        } else throw "Enter a valid first name!!!"
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName)){
            this._lastName = lastName;
        } else throw "Enter a valid last name!!!"
    }

    get address(){
        return this._address;
    }

    set address(address){
        let addressRegex = RegExp('^[A-Z][a-z]{4,}$');
        if(addressRegex.test(address)){
            this._address = address;
        } else throw "Enter a valid address!!!"
    }

    get city(){
        return this._city;
    }

    set city(city){
        let cityRegex = RegExp('^[A-Z][a-z]{4,}$');
        if(cityRegex.test(city)){
            this._city = city;
        } else throw "Enter a valid city name!!!"
    }

    get state(){
        return this._state;
    }

    set state(state){
        let stateRegex = RegExp('^[A-Z][a-z]{4,}$');
        if(stateRegex.test(state)){
            this._state = state;
        } else throw "Enter a valid state name!!!"
    }

    get zip(){
        return this._zip;
    }

    set zip(zip){
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(zip)){
            this._zip = zip;
        } else throw "Enter a valid ZIP Code!!!"
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber){
        let phonenumberRegex = RegExp('^[0-9]{2}[0-9]{10}$');
        if(phonenumberRegex.test(phoneNumber)){
            this._phoneNumber = phoneNumber;
        } else throw "Enter a valid phone number!!!"
    }

    get email(){
        return this._email;
    }

    set email(email){
        let emailRegex = RegExp('^[0-9a-zA-Z]+([+.-]([a-z0-9A-Z]+))*[@][a-zA-Z0-9]+[.][a-z]{2,4}[,]?([.][a-z]{2,4})?$');
        if(emailRegex.test(email)){
            this._email = email;
        } else throw "Enter a valid email ID!!!"
    }

    toString(){
        return (`First Name: ${this.firstName} \nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity : ${this.city}\nState : ${this.state}\nZip code : ${this.zip}\nPhone Number : ${this.phoneNumber}\nEmail ID: ${this.email}\n\n`)
    }
}
try{
    let addressBook =[];
    let newContact =new Contact("Sanjana","Guptha","Cottonpet","Bengaluru","Karnataka",563102,918794562371,"sanjana@gmail.com")
    let newContact2 =new Contact("Swathi","Shetty","Indiranagar","Bengaluru","Karnataka",563102,918794575981,"swathi@gmail.com")
    addressBook.push(newContact);
    addressBook.push(newContact2)
    console.log(addressBook.toString())
} catch(e){
    console.error(e);
}