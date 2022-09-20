export interface ServiceItemProps {
  icon: JSX.Element;
  title: string;
  content: string;
  index: number;
  fadeIn: boolean;
  link?: string;
  subTitle: string;
  period: string;
}

export interface TestimonialItemProps {
  avatar: string;
  content: string;
  name: string;
  position?: string;
  link?: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
