export interface IBanner {
  id: number;
  link: Translation | string;
  file: Translation | string;
  priority: number;
  is_active: boolean;
}
