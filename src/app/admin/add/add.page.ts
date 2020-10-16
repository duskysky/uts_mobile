import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {ServiceeService} from '../../servicee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  detailKey: string[];
  detailValue: {};
  selectedValue: '';
  data: any[] = [];
  constructor(private platform: Platform,
              private route: Router,
              private homeServ: ServiceeService)
  {
    this.platform.ready().then(() => {
      this.data = [{ id: 1, name: 'CPU' }, { id: 2, name: 'GPU'}, { id: 3, name: 'RAM'}, { id: 3, name: 'Motherboard'}];
    });
  }

  onChange(event){
    console.log('selected', this.selectedValue);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value.title;
    const imageUrl = form.value.imageUrl;
    const model = form.value.model;
    const brand = form.value.brand;
    const price = form.value.price;
    const stock = form.value.stock;
    this.homeServ.addBarang(title, imageUrl, model, brand, price, stock);
    // this.presentToast();
  }

}
