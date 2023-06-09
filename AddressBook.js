//UC1
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

    //UC2
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

class AddressBook{
    addressBook ;

    constructor(addressBook){
        this.addressBook = addressBook;
    }

    //UC3
    addContact(contact){

        //UC7
        let status = false
        for(let i=0 ; i < this.addressBook.length ; i++){
            if(contact.firstName == this.addressBook[i].firstName){
                status = true
            }
        } 
        if(status){
            console.log("Contact already exists in the Address Book")
        } else {
            this.addressBook.push(contact);
        }
        console.log("Address Book after adding conatcts: ")
        console.log(this.addressBook.toString())
    }

    //UC4
    editContact(name,newLastName){
        for(let i=0 ; i < this.addressBook.length ; i++){
            if(name == this.addressBook[i]._firstName){
                this.addressBook[i].lastName = newLastName
            }
        }
        console.log("Address Book after editng the last name using first name: ")
        console.log(this.addressBook.toString())
    }

    //UC5
    deleteContact(name){
        for(let i=0 ; i < this.addressBook.length ; i++){
            if(name == this.addressBook[i]._firstName){
                delete this.addressBook[i]
            }
        }
        console.log("Address Book after deleting the contact using first name: ")
        console.log(this.addressBook.toString())    
    }

    //UC6
    noOfContacts(){
        let noOfContacts = this.addressBook.reduce((noOfContacts,contact) => {
            return noOfContacts += 1
        },0);
        console.log("Number of Contacts in the Address Book: " +noOfContacts)
        return noOfContacts;
    }

    //UC8
    searchByCity(cityName){
        let cityList = []
        cityList = this.addressBook.filter(contact => contact.city == cityName);

        //UC9
        console.log("Contacts in the Address Book whose city is " +cityName+ ": ")
        console.log(cityList.toString())
    }

    //UC8
    searchByState(stateName){
        let stateList = []
        stateList = this.addressBook.filter(contact => contact.state == stateName);

        //UC9
        console.log("Contacts in the Address Book whose state is " +stateName+ ": ")
        console.log(stateList.toString())
    }

    //UC10
    countByCity(cityName){
        let cityCount = this.addressBook.filter(contact => contact.city == cityName).reduce((cityCount,contact) =>{
            return cityCount += 1
        },0);
        console.log("Number of Contacts in the Address Book whose city is " +cityName+ " : " +cityCount+ "\n")
    }

    countByState(stateName){
        let stateCount = this.addressBook.filter(contact => contact.state == stateName).reduce((stateCount,contact) =>{
            return stateCount += 1
        },0);
        console.log("Number of Contacts in the Address Book whose city is " +stateName+ " : " +stateCount+ "\n")
    }

    //UC11
    sortByName(){
        let sortedList = []
        sortedList = this.addressBook.sort((a,b) => {
            if(a.firstName < b.firstName){
                return -1;
            }
            if(a.firstName > b.firstName){
                return 1;
            }
            return 0;
        });
        console.log("Contacts in the Address Book sorted by their first names: ")
        console.log(sortedList.toString())
    }

    //UC12
    sortByCity(){
        let sortedList = []
        sortedList = this.addressBook.sort((a,b) => {
            if(a.city < b.city){
                return -1;
            }
            if(a.city > b.city){
                return 1;
            }
            return 0;
        });
        console.log("Contacts in the Address Book sorted by their cities: ")
        console.log(sortedList.toString())
    }

    sortByState(){
        let sortedList = []
        sortedList = this.addressBook.sort((a,b) => {
            if(a.state < b.state){
                return -1;
            }
            if(a.state > b.state){
                return 1;
            }
            return 0;
        });
        console.log("Contacts in the Address Book sorted by their states: ")
        console.log(sortedList.toString())
    }

    sortByZip(){
        let sortedList = []
        sortedList = this.addressBook.sort((a,b) => {
            if(a.zip < b.zip){
                return -1;
            }
            if(a.zip > b.zip){
                return 1;
            }
            return 0;
        });
        console.log("Contacts in the Address Book sorted by their ZIP Codes: ")
        console.log(sortedList.toString())
    }

}

try{
    //Implementing UC3
    let addressBook = [];
    let newAddressBook = new AddressBook(addressBook);

    //Implementing UC1 and UC2
    let newContact = new Contact("Sanjana","Guptha","Cottonpet","Bengaluru","Karnataka",563102,918794562371,"sanjana@gmail.com")
    let newContact1 = new Contact("Brundha","Shetty","Indiranagar","Bengaluru","Karnataka",563102,918794575981,"swathi@gmail.com")
    let newContact2 = new Contact("Malvika","Gowda","Gulpet","Chittor","Andhrapradesh",552412,915632478564,"malvika@gmail.com")
    newAddressBook.addContact(newContact)
    newAddressBook.addContact(newContact1)
    newAddressBook.addContact(newContact2)

    //Implementing UC4
    newAddressBook.editContact("Sanjana","Srinivasa")

    //Implementing UC7
    let newContact4 = new Contact("Sanjana","Guptha","Cottonpet","Bengaluru","Karnataka",563102,918794562371,"sanjana@gmail.com")
    newAddressBook.addContact(newContact4)

    //Implementing UC8 and UC9
    newAddressBook.searchByCity("Bengaluru")
    newAddressBook.searchByState("Karnataka")

    //Implementing UC10
    newAddressBook.countByCity("Bengaluru")
    newAddressBook.countByState("Karnataka")

    //Implementing UC11
    newAddressBook.sortByName()

    //Implementing UC12
    newAddressBook.sortByCity()
    newAddressBook.sortByState()
    newAddressBook.sortByZip()

    //Implementing UC5
    newAddressBook.deleteContact("Brundha")

    //Implementing UC6
    newAddressBook.noOfContacts();

} catch(e){
    console.error(e);
}