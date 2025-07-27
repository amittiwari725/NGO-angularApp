import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService, Program } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './programs.html',
  styleUrl: './programs.scss'
})
export class ProgramsComponent implements OnInit {
  programs: Program[] = [];

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
  }

  private setSEO() {
    this.seoService.setPageSEO({
      title: 'Education Programs - SWAJANA Foundation',
      description: 'Discover SWAJANA Foundation\'s comprehensive education programs including mobile education units, digital learning centers, and scholarship programs.',
      keywords: 'education programs, mobile education, digital learning, scholarships, teacher training, rural education programs',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
      url: 'https://swajana-foundation.org/programs'
    });
  }
}
