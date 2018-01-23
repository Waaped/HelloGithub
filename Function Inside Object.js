/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function accountPrint(amount){
        return "Welcome!\nYour balance is currently $"+savingsAccount.balance
        +" and your interest rate is "+savingsAccount.interestRatePercent+"%.";
        }// your code goes here
};

console.log(savingsAccount.printAccountSummary());

//Got the correct ouput, instead of seperating with "Welcome!\n" for a paragraph break
//i added a console.log
//figured this out, remembered my <br> in HTML and realized there was a similar method in
//Javascript
