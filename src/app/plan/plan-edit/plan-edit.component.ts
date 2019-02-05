import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlanService } from '../plans.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-plan-edit',
  templateUrl: './plan-edit.component.html',
  styleUrls: ['./plan-edit.component.css']
})
export class PlanEditComponent implements OnInit {

  editMode = false;
  editedItemIndex: number;
  planFormGroup : FormGroup;

  constructor(private planService: PlanService, private route: ActivatedRoute, 
    private router: Router, private dataStorageService: DataStorageService) { }

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
      this.planService.update(this.editedItemIndex, this.planFormGroup.value);
    } else {
      this.planService.add(this.planFormGroup.value);
    
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {

    let ptitle = "";
    let pdescription = '';
    let pintro = '';
    let pimagepath = '';

    if (this.editMode) {
      const plan = this.planService.getByIndex(this.editedItemIndex);
      ptitle = plan.title;
      pdescription = plan.desc;
      pintro = plan.intro;
      pimagepath = plan.imagePath;
  }
    
    this.planFormGroup = new FormGroup({
      'title': new FormControl(ptitle, Validators.required),
      'desc': new FormControl(pdescription, Validators.required),
      'intro': new FormControl(pintro, Validators.required),
      'imagePath': new FormControl(pimagepath, Validators.required),
      
    });
  }

  saveToDB()
  {
    this.dataStorageService.storePlans().subscribe(
      (response: Response) => {
        console.log('Posts----'+response);
      }
    );
    this.onCancel();
  }

}
