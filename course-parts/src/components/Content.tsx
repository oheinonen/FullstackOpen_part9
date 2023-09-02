import { ContentProps } from "../types";
import Part from "./Part";
const Content = (props: ContentProps) => {
  return (
  <div>
    {props.parts.map((part) => (
      <div key={part.name} style={{marginBottom:'8px'}}>
        <Part part={part} />
      </div>
  ))}
  </div>
  )
};  
export default Content;
