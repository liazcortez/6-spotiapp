import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artistaloading :boolean;
  artista :any[] = [];
  TopTracks:any[]=[];
  constructor(private router : ActivatedRoute , private spotify : SpotifyService) {
    this.artistaloading = true;
    this.router.params.subscribe((params:any)=>{
    this.spotify.getArtista(params['id']).subscribe((data:any)=>{
      console.log(data);
      this.artista = data;
this.artistaloading = false;
    }
     
    
    );

    
    this.spotify.getArtistaTop(params['id']).subscribe((tracks:any)=>{
      console.log(tracks);      
    });
    
      
    });
   }

  ngOnInit() {
  }

}
