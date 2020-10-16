import { Component, OnInit } from '@angular/core';
import {Barang} from '../model';
import {ServiceeService} from '../servicee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
  barangs: Barang[];
  loadbrg: Barang;
  detailKey: string[];
  constructor(private homeServ: ServiceeService,
              private route: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.barangs = this.homeServ.getBarangs();
    // this.cpus = this.homeServ.getCpus();
    // this.gpus = this.homeServ.getGpus();
    // this.mbs = this.homeServ.getMbs();
    //  this.rams = this.homeServ.getRams();
  }

  listbut(){
    this.route.navigate(['/home']);
  }

}
