export interface ServiceItemProps {
  icon: JSX.Element;
  title: string;
  content: string;
  index: number;
  fadeIn: boolean;
}

export interface TestimonialItemProps {
  avatar: string;
  content: string;
  name: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
