import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'profile-header',
  standalone: true,
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DividerComponent],
})
export class ProfileHeaderComponent {
  title = 'website';
}
