export type Restaurant = {
  name: string;
  rating?: number;
  location: string;
  distance: number;
  imageUrl?: string;
  onClick?: () => void;
};
