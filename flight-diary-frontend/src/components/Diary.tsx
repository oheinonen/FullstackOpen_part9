import { DiaryProps } from "../types";

const Diary = (props: DiaryProps) => {
  const { date, weather, visibility } = props.diary;
  return (
    <div>
      <h4 style={{ marginBottom: '4px'}}>
        {date}
      </h4>
      <p style={{ margin: '2px'}}>
        visibility: {visibility}
      </p>
      <p style={{ margin: '2px'}}>
        weather: {weather}
      </p>

    </div>
  );
};
export default Diary;