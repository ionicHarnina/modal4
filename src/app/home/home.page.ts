import { ModalPage } from './../modal/modal.page';
import { Component, ComponentRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  personaje: Persona;
  constructor(public modalCtrl: ModalController) { }
  async showModal() {
    //crear el modal
    let myModalPage = await this.modalCtrl.create(
      {
        component: ModalPage,
        componentProps: {
          'nombre': new Persona('Salustiano', 'Forfollo')
        }
      });
    myModalPage.onDidDismiss().then(
      (personaD) => {
        this.personaje = personaD.data;
      }
    ).catch();
    return await myModalPage.present();
  }
}
export class Persona {
  constructor(public nombre?: string, public apellidos?: string) { }
}

