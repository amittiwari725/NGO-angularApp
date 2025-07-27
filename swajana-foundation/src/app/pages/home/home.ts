import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService, Program, SuccessStory, Testimonial } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  programs: Program[] = [];
  successStories: SuccessStory[] = [];
  testimonials: Testimonial[] = [];
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
    this.programs = this.dataService.getPrograms();
    this.successStories = this.dataService.getSuccessStories();
    this.testimonials = this.dataService.getTestimonials();
    this.stats = this.dataService.getStats();
  }

  private setSEO() {
    this.seoService.setPageSEO({
      title: 'SWAJANA Foundation - Empowering Rural Children Through Education',
      description: 'Join SWAJANA Foundation in providing free quality education to children in rural India. Support our mission to break the cycle of poverty through education.',
      keywords: 'rural education, children education India, NGO education, donate education, volunteer education, SWAJANA Foundation',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
      url: 'https://swajana-foundation.org'
    });
  }
}
