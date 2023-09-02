interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartWithDescription extends CoursePartBase {
  description: string;
}

export interface CoursePartBasic extends CoursePartWithDescription {
  kind: "basic";
}

export interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

export interface CoursePartBackground extends CoursePartWithDescription {
  backgroundMaterial: string;
  kind: "background";
}
export interface CoursePartSpecial extends CoursePartWithDescription {
  requirements: string[];
  kind: "special";
}
export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;

export interface TotalProps {
  parts: CoursePart[];
}

export interface ContentProps {
  parts: CoursePart[];
}

export interface HeaderProps {
  name: string;
}

export interface PartProps {
  part: CoursePart;
}