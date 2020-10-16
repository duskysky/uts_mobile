import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceeService} from '../../servicee.service';
import {Barang} from '../../model';

@Component({
  selector: 'app-detilitem',
  templateUrl: './detilitem.page.html',
  styleUrls: ['./detilitem.page.scss'],
})
export class DetilitemPage implements OnInit {
  loadbrg: Barang;
  detailKey: string[];
  detailValue: {};
  constructor(private activatedRoute: ActivatedRoute,
              private homeServ: ServiceeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('model')) { return; }
      const model = paramMap.get('model');
      this.loadbrg = this.homeServ.getBarang(model);
      this.detailKey = Object.keys(this.loadbrg.detail);
      this.detailValue = this.loadbrg.detail;
    });
  }

}
