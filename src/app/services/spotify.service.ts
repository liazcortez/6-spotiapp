import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('servicio spotify');
    
   }
  
   

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDTGvQ2aO_ysVpPZV7xSDd6-d4rVXxa9c2_EeR99-ApM6Rj65MlP2w16jNgJOJq0FrMmMa4h__gvu2dAwk'
    });
   return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers});
   }
}
