import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes,setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) =>{
    setMinutes(+event.currentTarget.value); // "1" 을 +"1" 이렇게 해주면 1 로 변경이 된다
  }
  return <div>
    <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minute"/>
    <input value={hours} type="number" placeholder="Hours"/>
  </div>;
}

export default App;
