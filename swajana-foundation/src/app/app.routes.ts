import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    title: 'Home - SWAJANA Foundation'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
    title: 'About Us - SWAJANA Foundation'
  },
  {
    path: 'mission',
    loadComponent: () => import('./pages/mission/mission').then(m => m.MissionComponent),
    title: 'Our Mission - SWAJANA Foundation'
  },
  {
    path: 'programs',
    loadComponent: () => import('./pages/programs/programs').then(m => m.ProgramsComponent),
    title: 'Education Programs - SWAJANA Foundation'
  },
  {
    path: 'success-stories',
    loadComponent: () => import('./pages/success-stories/success-stories').then(m => m.SuccessStoriesComponent),
    title: 'Success Stories - SWAJANA Foundation'
  },
  {
    path: 'donate',
    loadComponent: () => import('./pages/donate/donate').then(m => m.DonateComponent),
    title: 'Donate - SWAJANA Foundation'
  },
  {
    path: 'volunteer',
    loadComponent: () => import('./pages/volunteer/volunteer').then(m => m.VolunteerComponent),
    title: 'Volunteer - SWAJANA Foundation'
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news').then(m => m.NewsComponent),
    title: 'News - SWAJANA Foundation'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
    title: 'Contact Us - SWAJANA Foundation'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
