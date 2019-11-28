import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../home/home.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  //Esto tiene un problema de llamada circular si el dismiss para 
  //datos de vuelta al llamador
  // @Input() nombre;
  nombre: Persona;
  constructor(public modalCtrl: ModalController, public parametros: NavParams) {
    this.nombre = parametros.get('nombre');
  }

  ngOnInit() {
  }
  dismiss() {
    const personaB = new Persona("Jimeno", "Gonagorri");
    //Esta linea es para probar que el envio de datos de vuelta
    //genera una llamada circular
    // this.modalCtrl.dismiss();
    this.modalCtrl.dismiss(personaB);
  }
}
