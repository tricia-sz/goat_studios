export interface GameProps {
  map(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode;
  id: number;
  title: string;
  description: string;
  image_url: string;
  platforms: string[];
  categories: string[];
  release: string;
}
