import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { DateModel } from '../../models/date.model';
import { SectionModel } from '../../models/section.model';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'resume-section',
  standalone: true,
  templateUrl: './resume-section.component.html',
  styleUrl: './resume-section.component.scss',
  imports: [CommonModule, DividerComponent],
})
export class SectionComponent implements OnInit {
  @Input() sectionPortuguese!: SectionModel;
  @Input() sectionEnglish!: SectionModel;

  section = {} as SectionModel;
  isPortuguese = true;
  today = this.isPortuguese ? 'Presente' : 'Present';

  constructor() {}

  ngOnInit(): void {
    this.section = this.isPortuguese
      ? this.sectionPortuguese
      : this.sectionEnglish;
  }

  getMonthString(month: number | null): string | null {
    if (!month) {
      return null;
    }

    switch (month) {
      case 1:
        return this.isPortuguese ? 'Janeiro' : 'January';
      case 2:
        return this.isPortuguese ? 'Fevereiro' : 'February';
      case 3:
        return this.isPortuguese ? 'Março' : 'March';
      case 4:
        return this.isPortuguese ? 'Abril' : 'April';
      case 5:
        return this.isPortuguese ? 'Maio' : 'May';
      case 6:
        return this.isPortuguese ? 'Junho' : 'June';
      case 7:
        return this.isPortuguese ? 'Julho' : 'July';
      case 8:
        return this.isPortuguese ? 'Agosto' : 'August';
      case 9:
        return this.isPortuguese ? 'Setembro' : 'September';
      case 10:
        return this.isPortuguese ? 'Outubro' : 'October';
      case 11:
        return this.isPortuguese ? 'Novembro' : 'November';
      case 12:
        return this.isPortuguese ? 'Dezembro' : 'December';
      default:
        return '';
    }
  }

  getFormattedDate(date: DateModel): string {
    let startMonth = this.getMonthString(date.startMonth);
    let endMonth = this.getMonthString(date.endMonth);

    return (
      (startMonth ? startMonth + ' ' : '') +
      date.startYear +
      ' - ' +
      (endMonth ? endMonth + ' ' : '') +
      (date.endYear ? date.endYear : this.today)
    );
  }
}
