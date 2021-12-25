import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ImagesService } from "src/app/services/images.service";
import { Images } from "src/app/models/images.model";

@Component({
    selector:'app-dialogbox',
    templateUrl:'./dialogBox.component.html',
    styleUrls: ['./dialogBox.component.css']
})

export class DialogBoxComponent implements OnInit {

    @Input()

    postsForm: FormGroup;
    data!: Object;
    image: any;
    id: any;


   //Constructor form

    constructor(private formBuilder: FormBuilder,
                private imagesService: ImagesService,
                private http: HttpClient,
        ){
        this.postsForm = this.formBuilder.group({
            title: formBuilder.control(''),
            url: formBuilder.control(''),
            date: formBuilder.control(''),
            categorie: formBuilder.control(['Food', 'Travel', 'Quotes'], [Validators.required]), 
            description: formBuilder.control('')
        });
    }
    ngOnInit(): void {
    }
        
    onSubmit() {
        const newImage: any = {
            id: '',
            title: this.postsForm.value.title,
            url: this.postsForm.value.url,
            date: this.postsForm.value.date,
            categorie: this.postsForm.value.categorie,
            description: this.postsForm.value.description,
            comment: this.postsForm.value.comment,
            isDeleted: false
        }
       console.log('this', newImage);
       console.log('this', this.postsForm.value.title);
       
        this.imagesService.createImage(newImage).subscribe(
            (data: Images[]) => {
                this.image = data;
                console.log('test :',this.image)
            }
        );

    }

    refresh(): void {
        window.location.reload();
      }

}


   