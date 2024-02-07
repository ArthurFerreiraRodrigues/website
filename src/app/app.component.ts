import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DividerComponent } from './components/divider/divider.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { SectionComponent } from './components/resume-section/resume-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
  imports: [
    RouterOutlet,
    ProfileHeaderComponent,
    DividerComponent,
    SectionComponent,
  ],
})
export class AppComponent {
  title = 'website';

  experienceSection = {
    title: 'Experience',
    topics: [
      {
        title: 'title',
        role: 'role',
        date: {
          startMonth: 1,
          startYear: '2021',
          endMonth: 1,
          endYear: '2021',
        },
        city: 'city',
        state: 'state',
        bulletPoints: ['bulletPoints'],
      },
      {
        title: 'title',
        role: 'role',
        date: {
          startMonth: 1,
          startYear: '2021',
          endMonth: 1,
          endYear: '2021',
        },
        city: 'city',
        state: 'state',
        bulletPoints: ['bulletPoints'],
      },
      {
        title: 'title',
        role: 'role',
        date: {
          startMonth: 1,
          startYear: '2021',
          endMonth: 1,
          endYear: '2021',
        },
        city: 'city',
        state: 'state',
        bulletPoints: ['bulletPoints'],
      },
      {
        title: 'title',
        role: 'role',
        date: {
          startMonth: 1,
          startYear: '2021',
          endMonth: 1,
          endYear: '2021',
        },
        city: 'city',
        state: 'state',
        bulletPoints: ['bulletPoints'],
      },
    ],
  };
}
