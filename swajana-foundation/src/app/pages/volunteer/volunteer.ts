import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './volunteer.html',
  styleUrl: './volunteer.scss'
})
export class VolunteerComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.setSEO();
  }

  private setSEO() {
    this.seoService.setPageSEO({
      title: 'Volunteer - SWAJANA Foundation',
      description: 'Join SWAJANA Foundation as a volunteer and help transform lives through education. Discover volunteer opportunities in rural education.',
      keywords: 'volunteer, education volunteer, rural volunteer opportunities, teaching volunteer, volunteer India',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
      url: 'https://swajana-foundation.org/volunteer'
    });
  }
}
