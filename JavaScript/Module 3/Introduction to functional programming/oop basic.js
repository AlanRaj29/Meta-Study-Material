
//1)Another style is object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.
    //For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:

    var virtualPet = {
        sleppy : true,
        nap:function(){
            this.sleppy = false;//The keyword this refers to the current object that the method belongs to
        }
    }
    console.log(virtualPet.sleppy)
    virtualPet.nap()
    console.log(virtualPet.sleppy)
     