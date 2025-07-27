import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './donate.html',
  styleUrl: './donate.scss'
})
export class DonateComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.setSEO();
  }

  private setSEO() {
    this.seoService.setPageSEO({
      title: 'Donate - SWAJANA Foundation',
      description: 'Support SWAJANA Foundation\'s mission by donating to provide quality education to rural children in India. Every contribution makes a difference.',
      keywords: 'donate, charity donation, education donation, support rural education, sponsor a child',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
      url: 'https://swajana-foundation.org/donate'
    });
  }
}
