import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('servicio spotify');
    
   }
  
   getquery(query : any){
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization':'Bearer BQB3L-2fueG-mIKq9wx5EEgIByPRzZQ4O1dFDZpEZytx3QA6pY4unSgeMpzCBb444eT7zLwT_8DN8SMdvMA'
    });

    return this.http.get(url,{headers})
   }
   

   getNewReleases(){
 
  return this.getquery('browse/new-releases')
   .pipe(map((data:any)=>{
     return data.albums.items
   }));
   }
  
   getArtistas(termino : string){
    return this.getquery(`search?q=~${termino}&type=artist&limit=15`)
   .pipe(map((data:any)=>{
     return data.artists.items;
   }));
   }
   getArtista(termino : string){
    return this.getquery(`artists/${termino}`)
     }

     
     getArtistaTop(termino : string){
      return this.getquery(`artists/${termino}/top-tracks`)
       }
}
