import { CpfCnpjPipe } from './cpf-cnpj.pipe';

describe('cpfcnpj', () => {
  it('create an instance', () => {
    const pipe = new CpfCnpjPipe();
    expect(pipe).toBeTruthy();
  });
});
