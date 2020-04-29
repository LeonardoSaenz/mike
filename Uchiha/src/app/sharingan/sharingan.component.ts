import { Component, OnInit } from '@angular/core';

class UserVM 
{
  name:string;
  lastname:string;
  isStudent:boolean;
  email:string;
  password:string;
  passwordConfirm:string;
}

@Component({
  selector: 'app-sharingan',
  templateUrl: './sharingan.component.html',
  styleUrls: ['./sharingan.component.scss'],
})
export class SharinganComponent implements OnInit {

  user:UserVM;

  constructor()
  {
    this.user = new UserVM();
  }
  
  ngOnInit() {}

  logForm()
  {
    alert(JSON.stringify(this.user));
  }

  clearData()
  {
    this.user = new UserVM();
  }
  
}
