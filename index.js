//EX1  A new dealership needs 100 cars before they can open.

class DealerShip {
  constructor(company) {
    this.company = company
    this.freighter = []
  }
  makeCar() {
    for (let i = 0; i < 100; i++) {
      const newCar = new Car(this.freighter.length, Car.pickTheManufacturer(), Car.pickTheColor());
      this.freighter.push(newCar);
    }
  }
}


class Car {
  constructor(vin, maker, color) {
    this.vin = vin
    this.maker = maker
    this.color = color
  }
  static pickTheColor() {
    const colorSet = ['red', 'blue', 'yellow', 'white', 'green', 'black', 'gray'];
    return colorSet[Math.floor(Math.random() * colorSet.length)]
  }
  static pickTheManufacturer() {
    const manufacturerSet = ['Audi', 'BMW', 'Ford', 'Honda', 'Ferrari', 'Mazda', 'Lexus'];
    return manufacturerSet[Math.floor(Math.random() * manufacturerSet.length)]
  }
}

const carvana = new DealerShip('Carvana')
carvana.makeCar();
// console.log(carvana.freighter)
// console.log(carvana.freighter.length)



// EX2  There is only one Governor in the state, add static methods and properties

class Governor {
  static name = "John"
  static age = 45
  gender = 'male'

  static manageAgencies() {
    console.log("Agencies like the Department of Health or the state police report to the governor.")
  }
  static approvalOfStateBudget() {
    console.log('New urgent funding for wellness support programs')
  }
  static attendPublicEvents() {
    console.log('CNN interviews')
  }
}


// Governor.attendPublicEvents()
// Governor.manageAgencies()
// Governor.approvalOfStateBudget()
// console.log("Governor " + Governor.name + " is " + Governor.age)


// EX3 Inheritance

class Person {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  hateYoutubeAdds() {
    console.log('We really should be thanking Google for the "Skip button"')
  }
  read() {
    console.log('Always get confused between “Pull” and “Push” options of gate in public places.')
  }
  eat() {
    console.log('If you’re not a fan of hot buttered toast, are you even human?')
  }
}

class PostalWorker extends Person {
  constructor(name, age, gender) {
    super(name, age, gender);
  }
  deliverMails() {
    console.log('Your Mail is Here')
  }
  moveCart() {
    console.log('Now delivering...')
  }
  sellPostalProduct() {
    console.log("The 10 different photographs featured in the booklet of 20 postage stamps are on sale")
  }
}

class Chef extends Person {
  constructor(name, age, gender, experienceYears) {
    super(name, age, gender)
    this.experienceYears = experienceYears
  }
  cook() {
    console.log('Cook food in a timely manner')
  }
  prepIngredients() {
    console.log('Monitor food stock and place orders')
  }
  typeOfChef() {
    if (this.experienceYears > 5) {
      console.log('Head Chef');
    } else {
      console.log('Second Chef');
    }
  }
}


// const postalWorker1 = new PostalWorker('Max', 28, 'male')
// console.log(postalWorker1)
// postalWorker1.moveCart()
// postalWorker1.deliverMails()
// postalWorker1.sellPostalProduct()

// const postalWorker2 = new PostalWorker('Ann', 50, 'female') 
// console.log(postalWorker2)
// postalWorker2.read()
// postalWorker2.hateYoutubeAdds()



// const chef1 = new Chef('Laura', 59, 'female', 10) 
// console.log(chef1)
// chef1.cook()
// chef1.prepIngredients()
// chef1.eat()
// chef1.typeOfChef()

// const chef2 = new Chef('Fernando', 23, 'male', 1) 
// console.log(chef2)
// chef2.typeOfChef()
// chef2.hateYoutubeAdds()




//EX4 BankAccount 

class BankAccount {
  constructor(ownerName, balance, acctNum) {
    this.ownerName = ownerName
    this.balance = balance
    this.acctNum = acctNum
  }
  deposit() {
    return 'Your account has been credited'
  }
  withdraw() {
    return 'Choose the amount: $50, $100 or Other'
  }
}


class CheckingAccount extends BankAccount {
  constructor(ownerName, balance, acctNum, overdraftEnabled = true) {
    super(ownerName, balance, acctNum)
    this.overdraftEnabled = overdraftEnabled
  }
  withdraw() {
    console.log('You have a $900 overdraft')
  }
}


class SavingsAccount extends BankAccount {
  constructor(ownerName, balance, acctNum) {
    super(ownerName, balance, acctNum)
  }
  withdraw() {
    console.log('Withdrawal is not effective')
  }
}


const chaseBank = new BankAccount('Dan Li', 12000, Math.round(Math.random() * 100000))
console.log(chaseBank)
console.log(chaseBank.withdraw())

const chaseCheckingAccount = new CheckingAccount('Dan Li', 12000, Math.round(Math.random() * 100000))
console.log(chaseCheckingAccount)
chaseCheckingAccount.withdraw()

const chaseSavingAccount = new SavingsAccount('Dan Li', 12000, Math.round(Math.random() * 100000))
console.log(chaseSavingAccount)
chaseSavingAccount.withdraw()