export interface ILicence {
  id: number;
  name: Translation | string;
  license: Translation | string;
  slug: string;
  priority: number;
  is_active: boolean;
}
