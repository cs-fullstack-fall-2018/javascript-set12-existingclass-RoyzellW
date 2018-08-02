class Account{

    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }

    deposit(amount)
    {
        this.accountBalance += amount;
    }

    balance()
    {
        return this.accountBalance;
    }
}

//my code is self-documenting (._.) lol
//problem number 29 and 30 are together
/******  HAHA! FUNNY MAN ******/
function main() {

    var Matt = new Account("Matt", 1000);
    var MyAccount = new Account("My Account", 0);
    var Bob = new Account("Bob", 100);

    Bob.withdrawal(20);

    Matt.withdrawal(100);

    MyAccount.deposit(100);

    alert("Remaining Balance: " + Matt.balance());
    alert("Remaining Balance: " + MyAccount.balance());


}

main();