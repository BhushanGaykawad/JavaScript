class Account
{
    constructor(name,amt)
    {
        this.name=name;
        this.balance=amt;
        alert(typeof Account);
        alert(typeof this.constructor);


    }

    get Aname()
    {
        return this.name;
    }
    set Aname(name)
    {
        this.name=name;
    }

    get Bbalance()
    {
        return this.balance;
    }
    set Bbalance(amt)
    {
        this.balance=amt;
    }


    deposit(amt)
    {
        this.balance=this.balance+amt;
        //document.write(this.balance);
    }
    withdraw(amt)
    {
        this.balance=this.balance-amt;
      
    }
    display()
    {
        document.write("Balance for the account of"+this.name+" is "+this.balance);
       // console.log(this.balance);
    }
   toString()
   {
    return (this.name+"  "+this.balance);
   }

}
 var ob=new Account("Bhushan",20000);
// document.write(ob);
// document.write("</hr>");
// document.write(ob instanceof Account);
// document.write(ob.name+" "+ob.balance);
// ob.deposit(1000);
// document.write("\n");
// ob.display();

// // class methods are not ienumerable.
// for(let pp in ob)
// {
//     if(typeof ob[pp] == "function"|| typeof ob[pp]=='property')
//     {
//         document.write(ob[pp]);
//         console.log(ob[pp]);
//     }
// }

class Saving extends Account
{
    constructor(acc,fname,balance)
    {
        super(fname,balance);
        this.typeACc=acc;
    }

    withdraw(amt)
    {
        const minBal=1000;
        if(amt>this.Bbalance-minBal)
        {
            throw new TypeError("Insufficient Balance");
          
        }
        this.Bbalance=this.Bbalance-amt;
    }

}


document.write(ob);
//calling get and set method.
ob.Aname="Sriram";
ob.Bbalance=40000;
document.write("\n"+ob);
var res=ob.Bbalance;
document.write(res);
console.log(ob);
//inheritence :child obj creation
var sav=new Saving("saving","Nikhil",90000);
console.log(sav);
document.write("\n"+sav.typeACc+sav);
try
{
    sav.withdraw(10000000);
}
catch(e)
{
    console.log(e);
}
document.write(sav);