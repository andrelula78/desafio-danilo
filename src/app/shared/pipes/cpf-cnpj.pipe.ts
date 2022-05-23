import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cpfCnpj",
})
export class CpfCnpjPipe implements PipeTransform {
  transform(value: string | number): any {
    let valorFormatado = value + "";

    if (valorFormatado.length >= 9 && valorFormatado.length <= 10) {
      valorFormatado = valorFormatado
        .padStart(11, "0")
        .substr(0, 11)
        .replace(/[^0-9]/, "")
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      return valorFormatado;
    } else if (valorFormatado.length === 14) {
      return valorFormatado
        .replace(/[^0-9]/, "")
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    } else {
      alert("Esse não é um número válido para CPF ou CNPJ");
    }
  }
}
