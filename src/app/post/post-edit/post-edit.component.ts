import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostService } from '../posts.service';
import { post } from 'selenium-webdriver/http';
import { Post } from '../posts.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  @ViewChild('f') postEditForm: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedPost : Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { 
    console.log('PostEditComponent constructor');
  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.editedItemIndex = +params['id'];
          this.editMode = params['id'] != null;
          console.log('1----editedItemIndex---'+this.editedItemIndex);
          if(this.editMode)
          {
            this.editedPost = this.postService.getByIndex(this.editedItemIndex);
            console.log('1----'+this.editedPost);
            
            this.postEditForm.setValue({
              title : this.editedPost.title,
              desc : this.editedPost.desc
            })
            console.log('2----'+this.postEditForm.value);
          }
        }
      );

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const post = new Post(value.title, value.desc);
    if (this.editMode) {
      this.postService.update(this.editedItemIndex, post);
    } else {
      this.postService.add(post);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.postEditForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.postService.delete(this.editedItemIndex);
    this.onClear();
  }



}
