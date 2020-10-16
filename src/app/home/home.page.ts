import { Component } from '@angular/core';
import {ServiceeService} from '../servicee.service';
import {Barang} from '../model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  barangs: Barang[];
  constructor(private homeServ: ServiceeService,
              private route: Router) {}

  ionViewWillEnter(){
    this.barangs = this.homeServ.getBarangs();
    // this.cpus = this.homeServ.getCpus();
    // this.gpus = this.homeServ.getGpus();
    // this.mbs = this.homeServ.getMbs();
    // this.rams = this.homeServ.getRams();
  }
}
