import { Component, OnInit } from '@angular/core';
import {AlertController, IonItemSliding, ToastController} from '@ionic/angular';
import {Barang} from '../model';
import {ServiceeService} from '../servicee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  barangs: Barang[];
  barang: Barang;
  constructor(private homeSer: ServiceeService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private route: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.barangs = this.homeSer.getBarangs();
    // this.cpus = this.homeSer.getCpus();
    // this.gpus = this.homeSer.getGpus();
    // this.mbs = this.homeSer.getMbs();
    // this.rams = this.homeSer.getRams();
  }

  delbrg(barang: Barang, slidingItem: IonItemSliding){
    slidingItem.close();
    this.presentAlert();
    this.deleteBarang();
  }
  deleteBarang(){
    this.homeSer.deleteBarang(this.barang.model);
    this.route.navigate(['/admin']);
    this.presentToast();
  }
  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Are You Sure?',
      message: 'Do you really want to delete this recipe',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteBarang()
        }
      ]
    });
    await alert.present();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Item TERHAPUS!',
      position: 'top',
      duration: 2000,
      color: 'dark'
    });
    await toast.present();
  }

}
