class BankAccount {

	#balance

	constructor(balance) {
		this.#balance = balance
	}

	deposit(amount) {
		if (amount > 0)
			this.#balance += amount
	}

	withdraw(amount) {
		if (amount > 0 && this.#balance >= amount)
			this.#balance -= amount
	}

	getBalance() {
		return this.#balance
	}
}

let bank = new BankAccount(500)
console.log(bank.getBalance())
bank.deposit(100)
console.log(bank.getBalance())
bank.withdraw(300)
console.log(bank.getBalance())