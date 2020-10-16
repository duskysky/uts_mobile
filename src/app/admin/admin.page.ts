import { Component, OnInit } from '@angular/core';
import {AlertController, IonItemSliding, ModalController, NavController, ToastController} from '@ionic/angular';
import {Barang} from '../model';
import {ServiceeService} from '../servicee.service';
import {Router} from '@angular/router';
import {Modal1Component} from '../components/modal1/modal1.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  barangs: Barang[];

  constructor(private homeSer: ServiceeService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private router: Router,
              private navCtrl: NavController,
              private modalCtrl: ModalController) { }

  ngOnInit() {

  }
  ionViewWillEnter(){
    this.barangs = this.homeSer.getBarangs();
    // this.cpus = this.homeSer.getCpus();
    // this.gpus = this.homeSer.getGpus();
    // this.mbs = this.homeSer.getMbs();
    // this.rams = this.homeSer.getRams();
  }

  editbrg(barang: Barang, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/admin/edit']);
  }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: Modal1Component,
    });
    return await modal.present();
  }

  async presentAlert(barang: Barang, slidingItem: IonItemSliding){
    slidingItem.close();
    const alert = await this.alertCtrl.create({
      header: 'Are You Sure?',
      message: 'Do you really want to delete this Item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.homeSer.deleteBarang(barang);
            this.presentToast();
          }
        }
      ]
    });
    await alert.present();
    alert.onDidDismiss().then(() => this.barangs = this.homeSer.getBarangs());
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
