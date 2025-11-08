export interface ICompany {
  id: number;
  name: Translation | string;
  description: Translation | string;
  slug: string;
  priority: number;
  is_active: boolean;
  files: IFile[]
};
