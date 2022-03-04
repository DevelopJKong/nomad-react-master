import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";




function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
        <CreateToDo />    
      <ul>
        {toDos.map(toDo => <ToDo {...toDo}/>)}
      </ul>
    </div>
  );
}
export default ToDoList;
