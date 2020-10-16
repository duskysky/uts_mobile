import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Barang} from '../../model';
import {ServiceeService} from '../../servicee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  model: string;
  form: FormGroup;
  loadbrg: Barang;
  constructor( private homeServ: ServiceeService,
               private activatedRoute: ActivatedRoute,
               private loadingCtrl: LoadingController,
               private route: Router,
               private toastCtrl: ToastController
               ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('model')) { return; }
      this.model = paramMap.get('model');
      this.loadbrg = this.homeServ.getBarang(this.model);
    });
    this.form = new FormGroup({
      title: new FormControl(this.loadbrg.title, {
      updateOn: 'blur',
      validators: [Validators.required]
      }),
      imageUrl: new FormControl(this.loadbrg.imageUrl, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      brand: new FormControl(this.loadbrg.brand, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(this.loadbrg.model, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      price: new FormControl(this.loadbrg.model, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stock: new FormControl(this.loadbrg.model, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
        });
  }

  onSave(){
    this.presentLoading().then(() => {
      const title = this.form.value.title;
      const imageUrl = this.form.value.imageUrl;
      const brand = this.form.value.brand;
      const model = this.form.value.model;
      const price = this.form.value.price;
      const stock = this.form.value.stock;
      this.homeServ.deleteBarang(this.loadbrg);
      this.homeServ.editBarang(title, imageUrl, brand, model, price, stock);
      this.route.navigate(['/admin']);
      this.presentToast();
    });
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Saving...',
      duration: 2000
    });
    await loading.present();
    const {role, data} = await loading.onDidDismiss();
    console.log('loading dismissed');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Contact Saved',
      duration: 2000,
      color: 'primary'
    });
    await toast.present();
  }
}
