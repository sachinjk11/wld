import { Post } from './posts.model';
import { Subject } from 'rxjs/Subject';
import { Injectable, isDevMode } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class PostService
{
    posts : Post[] = [
        new Post('title <b>header</b>','dghsad jsafsa asdas airwwe dsds  asdsa   sadas '),
        new Post('<b> title header</b>','dghasdasdsad asda <br>asdas airwwe asdasdasdasd  asdsasdasda   sasdsadasadas asdasdas adasdsad  asdasd asdsadsad asdasghfgh g fhf'),
    ];

    postUpdated = new Subject<Post[]>();
    postSelected = new Subject<boolean>();
    postEdit = new Subject<number>();

    constructor(){ 
      if(!isDevMode()){
        //private dataStorageService : DataStorageService
        //dataStorageService.getposts();
      }
    }

    set(posts: Post[]) {
        this.posts = posts;
        this.postUpdated.next(this.posts.slice());
      }
    
      get() {
        return this.posts.slice();
      }
    
      getByIndex(index: number) {
        return this.posts[index];
      }
    
      add(post: Post) {
        this.posts.push(post);
        this.postUpdated.next(this.posts.slice());
      }
    
      update(index: number, post: Post) {
        this.posts[index] = post;
        this.postUpdated.next(this.posts.slice());
      }
    
      delete(index: number) {
        this.posts.splice(index, 1);
        this.postUpdated.next(this.posts.slice());
      }

}