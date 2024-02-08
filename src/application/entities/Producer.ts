export class Producer {
  id: string;
  cpf: string | null;
  cnpj: string | null;
  name: string;

  constructor(id: string, cpf: string, cnpj: string, name: string) {
    this.id = id;
    this.cpf = cpf;
    this.cnpj = cnpj;
    this.name = name;
  }
}
