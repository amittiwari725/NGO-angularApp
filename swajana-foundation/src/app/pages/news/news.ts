import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService, NewsItem } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class NewsComponent implements OnInit {
  news: NewsItem[] = [];

  constructor(
    private dataService: DataService,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.loadData();
    this.setSEO();
  }

  private loadData() {
    this.news = this.dataService.getNews();
  }

  private setSEO() {
    this.seoService.setPageSEO({
      title: 'News - SWAJANA Foundation',
      description: 'Stay updated with the latest news, updates, and announcements from SWAJANA Foundation\'s education programs and initiatives.',
      keywords: 'SWAJANA news, education news, rural education updates, foundation announcements, program updates',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
      url: 'https://swajana-foundation.org/news'
    });
  }
}
