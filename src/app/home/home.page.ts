import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cancelBtnDisabled=true;

  constructor(private alertController:AlertController) {}

  async presentAlert()
  {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      cssClass:'testcss',
      buttons: [ 
        {
          text: 'No',
          cssClass:this.cancelBtnDisabled ? 'alert-button-cancel-disabled' : 'alert-button-cancel',         
          handler:()=>{console.log("testing no")}
        },
        {
          text: 'Yes',          
          cssClass:'alert-button-confirm'
        },    
      ],
      inputs: [
        {
          label: this.cancelBtnDisabled+"",
          type: 'checkbox',
          value: 'red', 
         
        },
        {
          label: 'Blue',
          type: 'checkbox',          
          checked:true, 
          value: 'blue',
        },
        {
          label: 'Green',
          type: 'checkbox',
          value: 'green',
        },
      ],

    });

    await alert.present();
  }

}
