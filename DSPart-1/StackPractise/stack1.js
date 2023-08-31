class Stack{
    constructor(){
        this.item = [];

    }


    AddItem(element){
        this.item.push(element);

    }

    RemoveItem(element){
        this.item.pop(element);
    }

    TOpOfStack(){
         if(this.IsStackEmpty()){

            console.log("Top can not be Shown because Your Stack is empty");

        }

        else{
            let LastIndex = this.item.length-1;
            let TopElement = this.item[LastIndex];
            console.log("Top Elemnt of your Stack is "+ TopElement);

        }
        
    }

    IsStackEmpty(){ 

        let Stacklength = this.item.length;
        if(Stacklength ==0){
            return true;

       
        } else{
            return false;

        }
    }

    SizeofStack(){
        let Stacklength = this.item.length;

        console.log("Your stack Size is : "+Stacklength);
    }

    ClearStack(){
        this.item = [];
    }


    PrintStack(){
        console.log(this.item);
    }



    





}   


const Stackobj = new Stack;

Stackobj.AddItem("Ramesh")
Stackobj.AddItem("Raja")
Stackobj.AddItem("Sunidhi")
Stackobj.AddItem("sahil")
Stackobj.RemoveItem();


console.log(Stackobj.SizeofStack());
console.log(Stackobj.TOpOfStack())
console.log(Stackobj.IsStackEmpty())
console.log(Stackobj.PrintStack());


Stackobj.ClearStack();




console.log(Stackobj.SizeofStack());
console.log(Stackobj.TOpOfStack())
console.log(Stackobj.IsStackEmpty())
console.log(Stackobj.PrintStack());

