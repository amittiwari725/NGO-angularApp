import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit {
  stats: any = {};

  constructor(
    private dataService: DataService,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.loadData();
    this.setSEO();
  }

  private loadData() {
    this.stats = this.dataService.getStats();
  }

  private setSEO() {
    this.seoService.setPageSEO({
      title: 'About Us - SWAJANA Foundation',
      description: 'Learn about SWAJANA Foundation\'s mission to provide free quality education to rural children in India. Meet our team and discover our impact.',
      keywords: 'about SWAJANA Foundation, rural education NGO, education charity India, our mission, our team',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
      url: 'https://swajana-foundation.org/about'
    });
  }
}
