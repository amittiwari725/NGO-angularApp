import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mission.html',
  styleUrl: './mission.scss'
})
export class MissionComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.setSEO();
  }

  private setSEO() {
    this.seoService.setPageSEO({
      title: 'Our Mission - SWAJANA Foundation',
      description: 'Learn about SWAJANA Foundation\'s mission to provide free quality education to rural children in India and break the cycle of poverty.',
      keywords: 'SWAJANA mission, rural education mission, education for all, poverty alleviation through education',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
      url: 'https://swajana-foundation.org/mission'
    });
  }
}
