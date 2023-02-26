import { DioAccount } from "./DioAccount"

export class StudentAccount extends DioAccount {

  constructor(studentName: string, accountNumber: number) {
    super(studentName, accountNumber)
  }

  public deposit(valor: number): void {
    console.log(`Estudante ${super.getName()} depositou R$ ${valor} e terá acréscimo de R$ 10`)
    super.deposit(valor + 10)
    console.log(`Estudante ${super.getName()} recebeu acréscimo de R$ 10 na conta e seu saldo atual é R$ ${valor + 10}`)
  }
}