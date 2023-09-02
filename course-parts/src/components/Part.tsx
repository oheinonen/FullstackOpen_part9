import { PartProps, CoursePartBasic, CoursePartGroup, CoursePartBackground, CoursePartSpecial } from "../types";
const BasicPart = ({ part }: { part: CoursePartBasic }) => (
  <div>
    <p style={{ fontWeight: 'bold', margin: '2px' }}>
      {part.name} {part.exerciseCount}
    </p>
    <p style={{ fontStyle: 'italic', margin: '2px' }}>
      {part.description}
    </p>
  </div>
);

const GroupPart = ({ part }: { part: CoursePartGroup }) => (
  <div>
    <p style={{ fontWeight: 'bold', margin: '2px' }}>
      {part.name} {part.exerciseCount}
    </p>
    <p style={{ margin: '2px' }}>
      project exercises {part.groupProjectCount}
    </p>
  </div>
);

const BackgroundPart = ({ part }: { part: CoursePartBackground }) => (
  <div>
    <p style={{ fontWeight: 'bold', margin: '2px' }}>
      {part.name} {part.exerciseCount}
    </p>
    <p style={{ fontStyle: 'italic', margin: '2px' }}>
      {part.description}
    </p>
    <p style={{ margin: '2px' }}>
      submit to: {part.backgroundMaterial}
    </p>
  </div>
);

const SpecialPart = ({ part }: { part: CoursePartSpecial }) => (
  <div>
    <p style={{ fontWeight: 'bold', margin: '2px' }}>
      {part.name} {part.exerciseCount}
    </p>
    <p style={{ fontStyle: 'italic', margin: '2px' }}>
      {part.description}
    </p>
    <p style={{ margin: '2px' }}>
      required skills: {part.requirements.join(', ')}
    </p>
  </div>
);


const Part = (props: PartProps) => {
  const { part } = props;
  switch (part.kind) {
    case 'basic': return <BasicPart part={part} />;
    case 'group': return <GroupPart part={part} />;
    case 'background': return <BackgroundPart part={part} />;
    case 'special': return <SpecialPart part={part} />
    default: return null;
  }
};
export default Part;