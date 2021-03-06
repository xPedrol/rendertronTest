import {Component, OnInit} from '@angular/core';
import {SeoService} from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rendertronTest';

  constructor(private seo: SeoService) {
  }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Home',
      description: 'Contact me through this awesome search engine optimized Angular component',
      image: 'https://www.example.com/assets/meerkat.jpeg',
      slug: 'about-page'
    });
  }
}
