import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.setSEO();
  }

  private setSEO() {
    this.seoService.setPageSEO({
      title: 'Contact Us - SWAJANA Foundation',
      description: 'Get in touch with SWAJANA Foundation. Find our contact information, office locations, and ways to connect with our team.',
      keywords: 'contact SWAJANA Foundation, get in touch, office address, phone number, email contact',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
      url: 'https://swajana-foundation.org/contact'
    });
  }
}
