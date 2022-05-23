import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent implements OnInit {
  inputData: any = [""];
  inputText: any = [""]; // propriedade que liga o html ao ts e vice-versa

  constructor() {}

  ngOnInit(): void {}
  resultado: boolean = false;
  resultado2: boolean = false;

  mostrarResultado1() {
    this.resultado = !this.resultado;
    if (!this.resultado) {
      return (this.inputData = []);
    } else {
      return this.resultado;
    }
  }

  mostrarResultado2() {
    this.resultado2 = !this.resultado2;
    if (!this.resultado2) {
      return (this.inputText = []);
    } else {
      return this.resultado2;
    }
  }
}
