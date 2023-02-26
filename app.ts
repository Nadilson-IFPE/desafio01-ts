import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(50)
peopleAccount.withdraw(10)
peopleAccount.getBalance
peopleAccount.getName
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.withdraw(30)
companyAccount.getBalance()
companyAccount.getName()
companyAccount.getLoan(10)
console.log(companyAccount)


const studentAccount: StudentAccount = new StudentAccount('Nadilson', 100)
studentAccount.deposit(70)
studentAccount.withdraw(20)
studentAccount.getBalance()
studentAccount.getName()
console.log(studentAccount)


// Teste de saldo insuficiente
const studentAccount2: StudentAccount = new StudentAccount('Nadilson José', 101)
studentAccount2.deposit(70)
studentAccount2.withdraw(81)
studentAccount2.getBalance()
studentAccount2.getName()
console.log(studentAccount2)