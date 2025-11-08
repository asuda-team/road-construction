export interface Information {
  id: number;
  name: Translation | string;
  description: Translation | string;
  files: IFile[];
  slug: string;
  priority: number;
  is_active: boolean;
};
