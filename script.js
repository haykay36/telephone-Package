// Observer Settings
class Observer {
  update(phoneNumber) {
    // to be executed by actual observers
  }
}

// Actual first Observer
class PrintPhoneNumberObserver extends Observer {
  update(phoneNumber) {
    console.log(" ");
    console.log(`Phone Number: ${phoneNumber}`);
  }
}

// Actual second observer
class CustomMessageObserver extends Observer {
  update(phoneNumber) {
    console.log(" ");
    console.log(`Now Dialing: ${phoneNumber}`);
  }
}

// Subject (Telephone) with Observer Pattern
class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => {
      observer.update(phoneNumber);
    });
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    const index = this.phoneNumbers.indexOf(phoneNumber);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  // Observer is being notified of a dialed number
  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.includes(phoneNumber)) {
      console.log(" ");
      console.log(`Notifying observer of a dialed number: ${phoneNumber}`);
      this.notifyObservers(phoneNumber);
    } else {
      console.log(
        `Error: The number ${phoneNumber} you have dialled is not found in PhoneBook`
      );
    }
  }
}

// Using the example below:
const telephone = new Telephone();

const observerOne = new PrintPhoneNumberObserver();
const observerTwo = new CustomMessageObserver();

telephone.addObserver(observerOne);
telephone.addObserver(observerTwo);

telephone.addPhoneNumber("+2348032606669");

telephone.dialPhoneNumber("+23480326066");

telephone.dialPhoneNumber("+2348032606669");
