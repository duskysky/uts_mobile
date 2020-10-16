import { Injectable } from '@angular/core';
import {Barang} from './model';

@Injectable({
  providedIn: 'root'
})
export class ServiceeService {
  private barangs: Barang[] = [
    {
      id: 'b1',
      imageUrl: 'https://www.intel.co.id/content/dam/products/hero/foreground/processor-badge-xeon-1x1.png.rendition.intel.web.550.550.png',
      title: 'CPU',
      brand: 'Intel',
      model: 'Xeon D-1602',
      price: 1000000,
      stock: 10,
      detail: {
        Baseclock: '2.50',
        Boostclock: '3.20',
        Thread: '32 thread',
        Core: '16 core',
      }
    },
    {
      id: 'b2',
      imageUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/shop/nvidia-consumer-store-portal-geforce-2080-ti-um@2x.png',
      title: 'GPU',
      brand: 'NVIDIA',
      model: 'GeForce RTX 2080 Ti',
      price: 1000000,
      stock: 10,
      detail: {}
    },
    {
      id: 'b3',
      imageUrl: 'https://www.teamgroupinc.com/en/upload/product_color_b/74e2ecbed01cb8b9b00be2a7400ac6fb.jpg',
      title: 'RAM',
      brand: 'ELITE',
      model: 'PLUS U-DIMM',
      price: 1000000,
      stock: 10,
      detail: {
        Speed: '2133 Ghz',
        Size: '24 inch',
      }
    },
    {
      id: 'b4',
      imageUrl: 'https://www.computerlounge.co.nz/data/media/images/catalogue/Products2/Components/Motherboards/ASUS/34823_1.jpg?maxheight=950&maxwidth=600&quality=100&404=default.jpg',
      title: 'Motherboard',
      brand: 'MSI',
      model: 'MEG Z490 GODLIKE',
      price: 1000000,
      stock: 10,
      detail: {
        Processor: 'Core i9-10900K',
        Chipset: 'Z490',
      }
    },
  ];

  constructor() {
  }

  getBarangs() {
    return [...this.barangs];
  }

  getBarang(barangModel: string) {
    return {
      ...this.barangs.find(barang => {
        return barang.model === barangModel;
      })
    };
  }

  deleteBarang(barangModel: Barang) {
    this.barangs.splice(this.barangs.findIndex(function(del){
      return del.model === barangModel.model;
    }), 1);
  }

  editBarang(title: string, imageUrl: string, brand: string, model: string, price: number, stock: number) {
    this.barangs.push({
      id: '',
      title,
      imageUrl,
      brand,
      model,
      price,
      stock,
      detail: {}
    });
  }

  addBarang(title: string, imageUrl: string, brand: string, model: string, price: number, stock: number) {
    this.barangs.push({
      id: '',
      title,
      imageUrl,
      brand,
      model,
      price,
      stock,
      detail: {}
    });
  }
}
