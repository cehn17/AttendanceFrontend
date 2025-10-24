import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from '../../basic/basic-services/user-storage.service';

const url = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  constructor (private http: HttpClient) {}

  getEmployees(){
    //const projectId = UserStorageService.getUserProjectId();
    const projectId = UserStorageService.getUser().projectId;
    //console.log(UserStorageService.getUser().projectId);
    return this.http.get(url + `/api/managers/employees/${projectId}`);
  }
}
