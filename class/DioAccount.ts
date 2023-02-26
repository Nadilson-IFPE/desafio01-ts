export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  /* public setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  } */

  public getName(): string {
    return this.name
  }

  public deposit(valor: number): void {
    if (this.validateStatus()) {
      this.balance += valor
      console.log(`${this.getName()} depositou R$ ${valor} e seu saldo atual é R$ ${this.balance}`)
    }
  }

  public withdraw(valor: number): void {
    if (this.validateStatus()) {
      if (this.balance >= valor) {
        this.balance -= valor
        console.log(`${this.getName()} sacou R$ ${valor} e seu saldo atual é R$ ${this.balance}`)
      } else {
        console.log(`Saldo insuficiente! ${this.getName()} tentou sacar R$ ${valor} de uma conta com saldo de R$ ${this.balance}`)
      }
    } else {
      console.log('Conta inativa!')
    }
  }

  public getBalance(): void {
    console.log(`Saldo atual da conta de ${this.getName()}: R$ ${this.balance}`)

  }

  public validateStatus(): boolean {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
