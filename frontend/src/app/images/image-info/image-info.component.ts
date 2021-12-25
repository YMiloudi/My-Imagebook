import { Component, OnInit, Inject, Input } from "@angular/core";
import { Images } from "src/app/models/images.model";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ImagesService } from "src/app/services/images.service";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-image-info',
  templateUrl: './image-info.component.html',
  styleUrls: ['./image-info.component.css']
})

export class ImageInfoComponent implements OnInit {

  isUpdateClicked = false;
  isBtnCommentClicked = false;

  public img: Images;
  imageForm: FormGroup;
  id: any;
  inputInfo: any = {};
  route!: ActivatedRoute;
  imgArray = [];
  comment: string[] = [];
  commentAdd = new FormControl('', [Validators.required, Validators.pattern(/[\.!\?]$/)]);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { img: Images },
    private imagesServices: ImagesService,
    fb: FormBuilder,

  ) {
    this.img = data.img;
    console.log('Image', this.img);
    this.comment = data.img.comment;

    //Retrieves information to update
    this.imageForm = new FormGroup({

      title: new FormControl(
        '', [Validators.required]
      ),
      url: new FormControl(
        '', [Validators.required]
      ),
      category: new FormControl(
        '', [Validators.required]
      ),
      description: new FormControl(
        '', [Validators.required]
      ),
      date: new FormControl(
        '', [Validators.required]
      )
    });

  }

  //Update image

  ngOnInit(): void {
    this.id = this.img.id;
    console.log(this.id)
    this.imagesServices.getImageById(this.id).subscribe(
      (data: Images[]) => {
        this.populateUI();
        console.log('dataImage', data);
      }
    );
  }

  populateUI() {
    this.imageForm.setValue({
      title: this.img.title,
      url: this.img.url,
      category: this.img.categorie,
      description: this.img.description,
      date: this.img.date,
    })
  }

  onSubmit(form: Images) {
    this.img.title = form.title;
    this.img.url = form.url;
    this.img.categorie = form.categorie;
    this.img.description = form.description;
    this.img.date = form.date;
    this.imagesServices.updateImage(this.img).subscribe(
      (data: Images) => {
        console.log('newData: ', data);
      }
    )
  }

  //When btn clicked, shows information to update

  onUpdatePost() {
    this.isUpdateClicked = true;
    console.log('isClickedEdit : ', this.isUpdateClicked);
  }

  //On btn clicked deletes post (SoftDelete)

  onDeletePost() {
    this.img.isDeleted = true;

    this.imagesServices.updateImage(this.img).subscribe(
      (data: Images) => {
        this.data.img.isDeleted = !this.data.img.isDeleted
        console.log(data);
      }
    )
  }

  //Refresh page

  refresh(): void {
    window.location.reload();
  }

  //When btn clicked, opens form to add comment

  onAddComment() {
    this.isBtnCommentClicked = true;
    console.log('isBtnCommentClicked : ', this.isBtnCommentClicked);
  }

  //Submitting comment in DB

  onSubmitForm() {
    if (this.commentAdd.invalid){
      return;
    }
    this.comment.push(this.commentAdd.value);
    this.imagesServices.updateImage(this.img)
      .subscribe(resp => {
        console.log(resp.comment)
      })
  }
  getErrorMessage() {
    if (this.commentAdd.hasError('required')) {
      return 'You have to add a comment';
    }
    return 'Your comment has to end with . ! or ?';
  }
}





