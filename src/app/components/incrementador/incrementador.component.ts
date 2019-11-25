import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: true}) txtProgress: ElementRef;

  @Input( 'nombre' ) leyenda: string = 'Leyenda'; // variables que pueden venir de afuera
  @Input()  progreso: number = 50;

  @Output( 'actualizaValor' ) cambioValor: EventEmitter<number> = new EventEmitter(); // parametro de salida para ver desde otro componente

  constructor() {
    // console.log('Leyenda: ', this.leyenda);
    // console.log('Progreso: ', this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda: ', this.leyenda);
    // console.log('Progreso: ', this.progreso);
  }

  onChanges( newValue: number ) {
   // let elemHTML: any = document.getElementsByName('progreso')[0];

 
   if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
   // elemHTML.value = this.progreso;
   this.txtProgress.nativeElement.value = this.progreso;
   this.cambioValor.emit(this.progreso);
  }


  cambiarValor( valor: number ) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso); // asigna el valor a la variable a emitir

    this.txtProgress.nativeElement.focus();
  }

}
