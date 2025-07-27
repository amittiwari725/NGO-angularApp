import { Injectable } from '@angular/core';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
}

export interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  beneficiaries: number;
  location: string;
}

export interface SuccessStory {
  id: number;
  title: string;
  studentName: string;
  story: string;
  image: string;
  achievement: string;
  date: string;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTestimonials(): Testimonial[] {
    return [
      {
        id: 1,
        name: 'Priya Sharma',
        role: 'Parent',
        message: 'SWAJANA Foundation has transformed my daughter\'s life. She now dreams of becoming a doctor and has the education to make it possible.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
      },
      {
        id: 2,
        name: 'Rajesh Kumar',
        role: 'Village Elder',
        message: 'The mobile education units have brought hope to our remote village. Children who never saw a book now read fluently.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
      },
      {
        id: 3,
        name: 'Anita Devi',
        role: 'Community Leader',
        message: 'SWAJANA\'s holistic approach to education includes health and nutrition, making a real difference in our children\'s lives.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
      }
    ];
  }

  getPrograms(): Program[] {
    return [
      {
        id: 1,
        title: 'Mobile Education Units',
        description: 'Bringing quality education directly to remote villages through our specially equipped mobile classrooms.',
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
        beneficiaries: 2500,
        location: 'Rajasthan, Madhya Pradesh'
      },
      {
        id: 2,
        title: 'Digital Learning Centers',
        description: 'Computer literacy and digital skills training for children in rural areas to bridge the digital divide.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
        beneficiaries: 1800,
        location: 'Bihar, Uttar Pradesh'
      },
      {
        id: 3,
        title: 'Scholarship Program',
        description: 'Financial support for meritorious students from underprivileged families to continue their higher education.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
        beneficiaries: 500,
        location: 'Pan India'
      },
      {
        id: 4,
        title: 'Teacher Training',
        description: 'Comprehensive training programs for rural teachers to improve teaching methodologies and student engagement.',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
        beneficiaries: 300,
        location: 'Odisha, Jharkhand'
      }
    ];
  }

  getSuccessStories(): SuccessStory[] {
    return [
      {
        id: 1,
        title: 'From Village to Medical College',
        studentName: 'Meera Patel',
        story: 'Meera was just 8 when SWAJANA\'s mobile education unit first visited her village. Despite her family\'s financial struggles, she showed exceptional academic promise. With our scholarship support and mentoring, she cleared her medical entrance exams and is now studying MBBS.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
        achievement: 'Medical College Admission',
        date: '2024-01-15'
      },
      {
        id: 2,
        title: 'Technology Champion',
        studentName: 'Arjun Singh',
        story: 'Arjun had never seen a computer before joining our Digital Learning Center. His curiosity and dedication led him to master programming basics. He recently won a state-level coding competition and received a scholarship for engineering studies.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
        achievement: 'State Coding Competition Winner',
        date: '2023-12-10'
      },
      {
        id: 3,
        title: 'Breaking Barriers',
        studentName: 'Kavita Devi',
        story: 'Kavita\'s parents were initially reluctant to send her to school. Through community engagement and our female education advocacy, she not only completed her schooling but also became the first girl from her village to pursue higher education.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
        achievement: 'First Female Graduate in Village',
        date: '2023-11-20'
      }
    ];
  }

  getNews(): NewsItem[] {
    return [
      {
        id: 1,
        title: 'SWAJANA Foundation Launches New Mobile Education Units',
        summary: 'Five new mobile education units equipped with solar power and digital learning tools are now serving remote villages in Rajasthan.',
        content: 'SWAJANA Foundation proudly announces the launch of five new mobile education units, each equipped with state-of-the-art solar power systems and digital learning tools. These units will serve 25 remote villages in Rajasthan, bringing quality education to over 1,000 children who previously had limited access to schooling.',
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
        date: '2024-01-15',
        category: 'Program Launch'
      },
      {
        id: 2,
        title: 'Annual Scholarship Awards Ceremony',
        summary: 'Over 100 students received scholarships at our annual awards ceremony, celebrating academic excellence and determination.',
        content: 'The annual SWAJANA Foundation scholarship awards ceremony celebrated the achievements of over 100 meritorious students from rural areas. The event highlighted their academic excellence and determination to overcome socio-economic barriers through education.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
        date: '2023-12-20',
        category: 'Awards'
      },
      {
        id: 3,
        title: 'Partnership with Tech Giants for Digital Literacy',
        summary: 'SWAJANA Foundation partners with leading technology companies to enhance digital literacy programs in rural areas.',
        content: 'In a groundbreaking initiative, SWAJANA Foundation has partnered with leading technology companies to enhance digital literacy programs. This collaboration will provide advanced computer training, coding workshops, and access to online learning platforms for students in our Digital Learning Centers.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
        date: '2023-11-30',
        category: 'Partnership'
      }
    ];
  }

  getStats() {
    return {
      studentsImpacted: 5200,
      villagesReached: 150,
      teachersTrained: 300,
      scholarshipsProvided: 500,
      yearsOfService: 8
    };
  }
}
