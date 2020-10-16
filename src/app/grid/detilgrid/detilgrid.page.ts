import { Component, OnInit } from '@angular/core';
import {ServiceeService} from '../../servicee.service';
import {ActivatedRoute} from '@angular/router';
import {Barang} from '../../model';

@Component({
  selector: 'app-detilgrid',
  templateUrl: './detilgrid.page.html',
  styleUrls: ['./detilgrid.page.scss'],
})
export class DetilgridPage implements OnInit {
  loadbrg: Barang;
  detailKey: string[];
  detailValue: {};
  constructor(private activatedRoute: ActivatedRoute,
              private homeServ: ServiceeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('model')) { return; }
      const title = paramMap.get('model');
      this.loadbrg = this.homeServ.getBarang(title);
      this.detailKey = Object.keys(this.loadbrg.detail);
      this.detailValue = this.loadbrg.detail;
    });
  }

}
