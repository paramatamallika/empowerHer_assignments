function createCounter() {
  let count = 0; 

  return {
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    },
    getCount() {
      console.log("Current count:", count);
    }
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();
counter.getCount();  






function createBankAccount() {
  let balance = 0; 
  let transactionHistory = []; 

  return {
    deposit(amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        transactionHistory.push(`Failed withdrawal attempt: ${amount}`);
      } else {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      }
    },

    checkBalance() {
      console.log(`Current Balance: ${balance}`);
    },

    getHistory() {
      console.log("Transaction History:", transactionHistory);
    }
  };
}


const account = createBankAccount();

account.deposit(500);   
account.withdraw(200);   
account.withdraw(400);   
account.checkBalance();  
account.getHistory();    

console.log(account.balance); 
console.log(account.transactionHistory); 

