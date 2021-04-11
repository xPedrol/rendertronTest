import { Component, OnInit } from '@angular/core';
import {SeoService} from '../services/seo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private seo: SeoService) {
  }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Test',
      description: 'Contact me through this awesome search engine optimized Angular component',
      image: 'https://www.example.com/assets/meerkat.jpeg',
      slug: 'about-page'
    });
  }

}
