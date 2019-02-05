import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PostService } from '../posts.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  editMode = false;
  editedItemIndex: number;
  postFormGroup : FormGroup;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router,
              private dataStorageService: DataStorageService) { 
   
  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.editedItemIndex = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
     
      this.postService.update(this.editedItemIndex, this.postFormGroup.value);
    } else {
      this.postService.add(this.postFormGroup.value);
     
    }
    this.onCancel();

  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {

    let ptitle = "";
    let pdescription = '';

    if (this.editMode) {
      const post = this.postService.getByIndex(this.editedItemIndex);
      ptitle = post.title;
      pdescription = post.desc;
    }
    
    this.postFormGroup = new FormGroup({
      'title': new FormControl(ptitle, Validators.required),
      'desc': new FormControl(pdescription, Validators.required)
    });
  }


  saveToDB()
  {
    this.dataStorageService.storePosts().subscribe(
      (response: Response) => {
        console.log('Posts----'+response);
      }
    );
    this.onCancel();
  }

}
