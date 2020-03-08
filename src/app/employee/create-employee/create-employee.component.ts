import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.employeeForm=this.fb.group({
      fullName:[''],
      email:[''],
      skills:this.fb.group({
        skillName:[''],
        experienceInYears:[''],
        proficiency:['Beginers']
      })

    });

  }
  onLoadData():void{
    this.employeeForm.patchValue({
      fullName:'Chandra',
      email:'chandra@gmail.com',
      // skills:{
      //   skillName:'angular', 
      //   experienceInYears:3,
      //   proficiency:'beginer'
      // }
    })
  
  }
 onSubmit(): void {
   console.log(this.employeeForm.value);
 }

}
