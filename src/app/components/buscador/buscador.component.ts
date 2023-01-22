import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character-model';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  searchValidator=true;
  requestValidator=false;
  confirmValidator=false;
  okValidator=false;
  resultsValidator=false;
  wrongValidator=false;
  characters:Character={
    info:{
      count:0,
      pages:0,
      next:"",
      prev:null
    },
    results:[{
      id:0,
      name:"",
      status:"",
      species:"",
      type:"",
      gender:"",
      origin:{
        name:"",
        url:""
      },
      location:{
        name:"",
        url:""
      },
      image:"",
      episode:["ok","ook"],
      url:"",
      created:""
    }]
    
  };
  name="Amish Cyborg";
  type="Parasite";




  constructor(
    private service:PersonajesService
  ) { }

  ngOnInit(): void {
    this.service.getChracters().subscribe(
      data=>{
        this.characters=data;
      }
    )
  }

  //permite mostrar en pantalla los personajes segun el nombre y el tipo
  toFilter(){
    this.service.getBy(this.name,this.type).subscribe(
      data=>{
        //console.log(data);
        this.characters=data;
      }
    )
  }

  cleanFilter(){
    this.name="";
    this.type="";
    this.service.getChracters().subscribe(
      data=>{
        this.characters=data;
      }
    )
    
  }

  toPagination(inicial:number,final:number){
    this.service.getChracters(inicial,final).subscribe(
      data=>{
        this.characters=data;
      }
    )
  }

  toRequest(){
    this.searchValidator=false;
    this.requestValidator=true;
    this.confirmValidator=false;
    this.okValidator=false;
    this.resultsValidator=false;
    this.wrongValidator=false;
  }

  toCloseWindowRequest(){
    this.searchValidator=true;
    this.requestValidator=false;
    this.confirmValidator=false;
    this.okValidator=false;
    this.resultsValidator=false;
    this.wrongValidator=false;
  }
  doneRequest(){
    this.searchValidator=false;
    this.requestValidator=false;
    this.confirmValidator=true;
    this.okValidator=false;
    this.resultsValidator=false;
    this.wrongValidator=false;
  }
  toDone(){
    this.searchValidator=false;
    this.requestValidator=false;
    this.confirmValidator=false;
    this.okValidator=true;
    this.resultsValidator=false;
    this.wrongValidator=false;
  }


}
