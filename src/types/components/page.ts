import { ComponentProps } from '~/types';

type MetaImageStyle = 'summary_large_image' | 'summary';

export interface PageProps extends ComponentProps {
  title?: string;
  description?: string;
  keywords?: string | Array<string> | null;
  image?: string;
  exactUrl?: string;
  siteType?: 'portfolio' | 'website' | 'blog';
  metaImageStyle?: MetaImageStyle;
}
