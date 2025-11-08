export interface INews {
  id: number;
  slug: string;
  priority: number;
  is_active: boolean;
  name: Translation | string;
  description: Translation | string;
  files: IFile[];
}