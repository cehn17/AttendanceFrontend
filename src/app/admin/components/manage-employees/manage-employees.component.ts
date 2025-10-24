import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-manage-employees',
  imports: [SharedModule],
  templateUrl: './manage-employees.component.html',
  styleUrl: './manage-employees.component.scss'
})
export class ManageEmployeesComponent {

  employeeForm!: FormGroup;
  projects:any;
  employees:any;

  constructor (
    private fb: FormBuilder,
    private adminService: AdminService,
    private message: NzMessageService
  ){}

  ngOnInit(){
    this.employeeForm = this.fb.group ({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      projectId: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
    this.getAllProjects();
    this.getAllEmployees();
  }

   getAllProjects(){
    this.adminService.getProjects().subscribe(res=>{
    this.projects = res;
    console.log(this.projects);
    })
  }

  submitForm(){
    const data = this.employeeForm.value;
    data.userRole = "EMPLOYEE";

    this.adminService.addUser(data).subscribe(res=>{
      this.message.success ("Employee created successfully", { nzDuration: 5000 });
      this.employeeForm.reset();
      this.getAllEmployees();
    }, error=>{
      this.message.error(error.error, { nzDuration: 5000 });
    })
  }

  getAllEmployees(){
    this.adminService.getAllEmployees().subscribe(res=>{
      this.employees = res;
    })
  }

}
