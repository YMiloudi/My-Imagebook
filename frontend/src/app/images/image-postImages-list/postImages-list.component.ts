import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatDateFormats } from "@angular/material/core";
import { Images } from "src/app/models/images.model";
import { ImagesService } from "src/app/services/images.service";
import { ImageInfoComponent } from "../image-info/image-info.component";


interface Categorie {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-postImages-list',
    templateUrl: './postImages-list.component.html',
    styleUrls: ['./postImages-list.component.css']
})


export class PostImagesComponent implements OnInit {

    categories: Categorie[] = [
        { value: 'food-0', viewValue: 'Food' },
        { value: 'travel-1', viewValue: 'Travel' },
        { value: 'quotes-2', viewValue: 'Quotes' }
    ];

    img: Images[];
    date = new Date();


    constructor(private imagesService: ImagesService,
        public dialog: MatDialog) {
        this.img = [];
    }

    ngOnInit(): void {
        this.getImagesServer();
    }

    //Gets all the images + filter by categorie

    getImagesServer() {
        const categorie = "";
        this.imagesService
            .getAllImages(categorie)
            .subscribe((resp: Images[]) => {
                this.img = resp;
                this.img = this.img.filter(image => !image.isDeleted)
                console.log('getAllImages', this.img)
            })
    }

 // When btn clicked, makes a filter by categorie
    onBtnClicked(categorie: Categorie) {
        const cat = categorie.viewValue
        if (categorie != undefined) {
            this.imagesService
                .getAllImages(cat.toLowerCase())
                .subscribe((resp: Images[]) => {
                    this.img = resp
                    console.log(this.img)
                })
        }
    }

    // Opens dialogbox with information of images
    onClickImage(index: number) {
        console.log(`utilisateur a clique sur image index ${index}`)
        const dialogRef = this.dialog.open(ImageInfoComponent, {
            data: { img: this.img[index] },
            autoFocus: false,
            maxHeight: '90vh'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    isActiveCheck = false;

    //When btn clicked shows deleted images 

    isActive(e: any) {
        this.isActiveCheck = !this.isActiveCheck;

        const categorie = "";
        this.imagesService
            .getAllImages(categorie)
            .subscribe((resp: Images[]) => {
                this.img = resp;
                this.img = this.img.filter(image => image.isDeleted)
                console.log(this.img);
            });        
    }
}


