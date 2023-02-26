import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan(valor: number): void {
    console.log(`${super.getName()} pegou empréstimo de R$ ${valor} e o depositou na sua conta`)

    super.deposit(valor)
  }
}
