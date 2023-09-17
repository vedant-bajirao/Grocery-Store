import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { user } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  [x: string]: any;
  formValue!: FormGroup;
  userModelObj: user = new user();
  userData!: any;

  constructor(private fromBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.fromBuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
      mobile: [''],
    });
  }

  // this code for inset a data start

  postUserDetails() {
    this.userModelObj.fullname = this.formValue.value.fullname;
    this.userModelObj.mobile = this.formValue.value.mobile;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.password = this.formValue.value.password;

    this.api.postUser(this.userModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('User added successfully...');

        this.getAllUser();
        let ref = document.getElementById('cancel');
        ref?.click();

        // this code for form reset start
        this.formValue.reset();
        // this code for form reset end
      },
      (err) => {
        alert('Somthing went wrong...');
      }
    )
  }

  // show all data in table formate start
  getAllUser() {
    this.api.getUser()
    .subscribe(res => {
      this.userData = res;
    })
  }
  // show all data in table formate end
  // this code for inset a data end

  // This is for delete user start
  deleteUser(row: any) {
    this.api.deleteUser(row.id).subscribe((res) => {
      alert('User Deleted...');
      this.getAllUser();
    })
  }

  // This is for delete user end


  // This is edit start
  onEdit(row :any){
    this.userModelObj.id=row.id
    this.formValue.controls['fullname'].setValue(row.fullname);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['password'].setValue(row.password);
  }

  updateUserDetails(){
    this.userModelObj.fullname = this.formValue.value.fullname;
    this.userModelObj.mobile = this.formValue.value.mobile;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.password = this.formValue.value.password;

    this.api.updateUser(this.userModelObj.id,this['updateUser'])
    .subscribe(res=>{
      alert("UPdated Successfully...")
    })
  }
  // This is edit end
}
