import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(private _dataservice:DataService){

   }
  title = 'PR';
  active = false;
  selected = false;
  feedbackactive = false;
  activeProduct = {
    brand:'',
    model:'',
    ram:'',
    rating:'',
    storage:'',
    price:'',
    date:'',
    bestselling:'',
    id:''
  };

  productsList= [];


  ngOnInit(){
    this.active=false;
    this.selected = false;
    this.feedbackactive = false;
    
    this._dataservice.getData().subscribe((res)=>{
      let x = {

      }
      for(let r in res){
        x={};
        for(let key in res[r]){
          let value = res[r][key];
          let k = key;
          x[key.toLocaleLowerCase()]=value;
        }
        console.log(x);
        this.productsList.push(x);
      }
      
      

    },err=>{
      console.log(err);
      
    },()=>{
      console.log("DONE");
    });
  }

  productdetailview(x){
    this.selected = false;
    this.active = true;
    this.activeProduct =  x;
  }
  cancelDetailView(){
    this.active = false;
    this.selected = false;
    this.feedbackactive = false;
  }

  select(){
    // user selected activeproduct
    this.productsList=[];
    this._dataservice.selectproduct(this.activeProduct).subscribe(res=>{
      let x = {

      }
      for(let r in res){
        x={};
        for(let key in res[r]){
          let value = res[r][key];
          let k = key;
          x[key.toLocaleLowerCase()]=value;
        }
        console.log(x);
        this.productsList.push(x);
      }
      
    },err=>{
      console.log(err);
      
    });
    this.active = false;
    this.selected = true;
    this.feedbackactive = false;
    setTimeout(()=>{
      this.selected = false;
    },10000);
  }


  startFeedback(){
    this.feedbackactive = true;
    setTimeout(()=>{
      window.scroll(0,510);
    },10);
  }






}
