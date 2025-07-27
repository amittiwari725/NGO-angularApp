import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService, SuccessStory } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-success-stories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './success-stories.html',
  styleUrl: './success-stories.scss'
})
export class SuccessStoriesComponent implements OnInit {
  successStories: SuccessStory[] = [];

  constructor(
    private dataService: DataService,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.loadData();
    this.setSEO();
  }

  private loadData() {
    this.successStories = this.dataService.getSuccessStories();
  }

  private setSEO() {
    this.seoService.setPageSEO({
      title: 'Success Stories - SWAJANA Foundation',
      description: 'Read inspiring success stories of students who transformed their lives through SWAJANA Foundation\'s education programs.',
      keywords: 'success stories, student achievements, education impact, rural student success, SWAJANA impact',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
      url: 'https://swajana-foundation.org/success-stories'
    });
  }
}
