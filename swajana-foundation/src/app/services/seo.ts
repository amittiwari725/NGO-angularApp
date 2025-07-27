import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title) { }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateMetaTags(tags: { [key: string]: string }) {
    Object.keys(tags).forEach(key => {
      this.meta.updateTag({ name: key, content: tags[key] });
    });
  }

  updateOpenGraphTags(tags: { [key: string]: string }) {
    Object.keys(tags).forEach(key => {
      this.meta.updateTag({ property: `og:${key}`, content: tags[key] });
    });
  }

  setPageSEO(pageData: {
    title: string;
    description: string;
    keywords: string;
    image?: string;
    url?: string;
  }) {
    this.updateTitle(pageData.title);
    
    this.updateMetaTags({
      'description': pageData.description,
      'keywords': pageData.keywords,
      'robots': 'index, follow',
      'author': 'SWAJANA Foundation',
      'viewport': 'width=device-width, initial-scale=1'
    });

    this.updateOpenGraphTags({
      'title': pageData.title,
      'description': pageData.description,
      'type': 'website',
      'site_name': 'SWAJANA Foundation',
      'image': pageData.image || 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
      'url': pageData.url || 'https://swajana-foundation.org'
    });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageData.title });
    this.meta.updateTag({ name: 'twitter:description', content: pageData.description });
    this.meta.updateTag({ name: 'twitter:image', content: pageData.image || 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80' });
  }
}
