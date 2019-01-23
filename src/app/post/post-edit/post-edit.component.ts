import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../posts.service';
import { Post } from '../posts.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  editMode = false;
  editedItemIndex: number;
  postFormGroup : FormGroup;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { 
   
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
      console.log(this.editedItemIndex+'----'+this.postFormGroup.value);
      this.postService.update(this.editedItemIndex, this.postFormGroup.value);
    } else {
      this.postService.add(this.postFormGroup.value);
      console.log(this.postFormGroup.value);
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

}
