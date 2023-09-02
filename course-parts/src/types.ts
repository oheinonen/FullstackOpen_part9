export interface CoursePart {
  name: string;
  exerciseCount: number;
}

export interface TotalProps {
  parts: CoursePart[];
}

export interface ContentProps {
  parts: CoursePart[];
}

export interface HeaderProps {
  name: string;
}