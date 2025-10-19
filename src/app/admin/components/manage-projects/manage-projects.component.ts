import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-manage-projects',
  imports: [SharedModule],
  templateUrl: './manage-projects.component.html',
  styleUrl: './manage-projects.component.scss'
})
export class ManageProjectsComponent {

  projectForm!: FormGroup;
  constructor (
    private fb: FormBuilder,
    private adminService: AdminService,
    private message: NzMessageService
  ){}

  ngOnInit(){
    this.projectForm = this.fb.group({
      name: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
    })
  }

  submitForm(){
    this.adminService.addProject(this.projectForm.value).subscribe(res=>{
      this.message.success("Project posted successfully", {nzDuration: 5000 });
      this.projectForm.reset();
    },error=>{
      this.message.error("Error while posting project", {nzDuration: 5000 });
    })
  }
}
