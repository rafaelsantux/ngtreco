import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  articles: any;
  mostViewed: any;
  env = environment;

  constructor(
    private http: HttpClient
  ){}

  ngOnInit() {
    this.getAllArticles();
    this.getMostViewed(5);
  }


  getAllArticles() {

    this.http.get(`${this.env.apiBaseURL}/articles`)
    .subscribe((response) =>{
      console.log(response);
      this.articles = response;
    },
      (error) => {
        console.log(error);
      }


    );
  }

  getMostViewed(limit: number) {

    this.http.get(`http://localhost:8080/articles/views/${limit}`)
    .subscribe((response) =>{
      console.log(response);
      this.mostViewed = response;
    }
    );
  }

}
