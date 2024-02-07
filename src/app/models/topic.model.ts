import { DateModel } from './date.model';

export interface TopicModel {
  title: string;
  role: string;
  date: DateModel;
  city: string;
  state: string;
  bulletPoints: string[];
}
