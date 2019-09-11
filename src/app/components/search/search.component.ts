import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  loading : boolean;
  artistas:any[]=[];
  constructor(private spotify:SpotifyService) { }
  
  buscar(termino:string){
    this.loading = true;
  console.log(termino);
  this.spotify.getArtistas(termino).subscribe((data:any)=>{
  this.artistas = data;
  console.log(this.artistas);
  
  });
  

setTimeout(()=>{
  this.loading = false;
},500)
  
  
  }
  

}
