import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {




     name : string ="toto";
     email: string ="toto@esprit.tn";
     adress: string="rue d\'usine Chotrana Ariana";
     hobbies = ['Music' , 'Movies' ,'Sports'];

      show:boolean = false;
      buttonName: string ="Afficher hobbies";
   
     i:number;

  constructor() { 

  }

  


  ngOnInit(): void {



  
  }

 
  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Masquer hobbies";
    else
      this.buttonName = "Afficher hobbies";
  }

  delete(i:number){


    this.hobbies.splice(i,1);


    for ( i=0 ; i<= this.hobbies.length;i++)
    {
    console.log("la liste des hobbies   " + this.hobbies[i]);

    }
  }
  
}
