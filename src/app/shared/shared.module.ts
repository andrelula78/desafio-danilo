import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfCnpjPipe } from './pipes/cpf-cnpj.pipe';
import { AccordionComponent } from './components/accordion/accordion.component';
import { InvertCasePipe } from './pipes/invert-case.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CpfCnpjPipe,
    AccordionComponent,
    InvertCasePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    CpfCnpjPipe,
    AccordionComponent
  ]
})
export class SharedModule { }
