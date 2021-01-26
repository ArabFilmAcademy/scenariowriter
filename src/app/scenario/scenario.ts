import { LineType } from '@app/editor/line-type';

export interface Scenario {
  id: number;
  title: string;
  author: string;
  contact: Contact;
  draft: boolean;
  draftNum: number;
  draftName: string;
  content: Line[];
  dateTime: string[];
}
export interface Contact {
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  postal: number;
}
export interface Line {
  type: LineType;
  content: string;
  added: string;
  modified?: string[];
}
