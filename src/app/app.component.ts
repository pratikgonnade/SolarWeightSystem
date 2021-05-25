import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solarweightsystem';
  finalAns:any

  Mercury(data:any){
    console.log(data.value);
    this.finalAns=data.value*0.378;
   //alert(this.finalAns+" KG");
    Swal.fire('Weight On Mercury : '+this.finalAns+' KG')
  }
  Venus(data:any){
    console.log(data.value);
    this.finalAns=data.value*0.907;
   //alert(this.finalAns+" KG");
  Swal.fire('Weight On Venus : '+this.finalAns+' KG')
  }
  Mars(data:any){
    console.log(data.value);
    this.finalAns=data.value*0.377;
   // alert(this.finalAns+" KG");
  Swal.fire('Weight On Mars : '+this.finalAns+' KG')
  }
  Jupiter(data:any){
    console.log(data.value);
    this.finalAns=data.value*2.364;
    //alert(this.finalAns+" KG");
    Swal.fire('Weight On Jupiter : '+this.finalAns+' KG')
  }
  Saturn(data:any){
    console.log(data.value);
    this.finalAns=data.value*0.916;
    //alert(this.finalAns+" KG");
    Swal.fire('Weight On Saturn : '+this.finalAns+' KG')
  }
  Uranus(data:any){
    console.log(data.value);
    this.finalAns=data.value*0.889;
    //alert(this.finalAns+" KG");
    Swal.fire('Weight On Uranus : '+this.finalAns+' KG')
  }
  Neptune(data:any){
    console.log(data.value);
    this.finalAns=data.value*1.125;
    //alert(this.finalAns+" KG");
    Swal.fire('Weight On Neptune : '+this.finalAns+' KG')
  }
  
}
