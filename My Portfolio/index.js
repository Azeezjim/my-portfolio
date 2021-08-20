 function Myname(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
 }
 const me = new Myname('Abdul Azeez', 'Garuba')
 Myname.prototype.getMyFname = function() {
    return `My prestgious name is ${this.firstName} ${this.lastName}`
 }


console.log(me.getMyFname())