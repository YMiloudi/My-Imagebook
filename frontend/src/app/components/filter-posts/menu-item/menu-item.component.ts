import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Images } from 'src/app/models/images.model';
import { ImagesService } from 'src/app/services/images.service';
import { NavItem } from '../navItems.component'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItem[] = [];

  @ViewChild('childMenu', {static: true}) public childMenu: any;
  img: Images[];
  categorie!: string;
 

  constructor(public router: Router, 
              private imagesService: ImagesService,
              private route: ActivatedRoute
              ) {
                this.img = [];
               
                
  }

  ngOnInit() {
    this.onBtnClicked(this.categorie)
  }

  onBtnClicked(categorie : string) {
    if(categorie != undefined) {
      this.imagesService
      .getAllImages(this.categorie)
      .subscribe((resp: Images[]) => {
          this.img = resp
         console.log(categorie.toLowerCase())
      })
    }
  }    
} 
 
     