import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { OmdbService } from '../service/omdb.service';
import { Movie } from '../movie/movie.model';
import { Observable } from 'rxjs';
import { Console } from 'console';


@Component({
  selector: 'app-admin-dash',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
  export class AdminDashComponent {
    
  constructor(private omdbService: OmdbService) {}
  search(query: string) {
    this.omdbService.getMovieByTitle(query).subscribe((movie: Movie) => {
      console.log(movie);
    });
  }
}
