import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AdminService } from '../../services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-manage-managers',
  imports: [SharedModule],
  templateUrl: './manage-managers.component.html',
  styleUrl: './manage-managers.component.scss'
})
export class ManageManagersComponent {

  projects: any;
  managerForm!: FormGroup;
  
  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private message: NzMessageService
  ){}

  ngOnInit(){
    this. managerForm = this.fb.group ({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      projectId: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
    this.getAllProjects();
  }

  getAllProjects(){
    this.adminService.getProjects().subscribe(res=>{
    this.projects = res;
    console.log(this.projects);
    })
  }

  submitForm(){
    const data = this.managerForm.value;
    data.userRole = "MANAGER";

    this.adminService.addUser(data).subscribe(res=>{
      this.message.success ("Manager created successfully", { nzDuration: 5000 });
      this.managerForm.reset();
    }, error=>{
      this.message.error(error.error, { nzDuration: 5000 });
    })
  }

}
