import React from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);
  const toDos = useRecoilValue(toDoSelector);
  const [category,setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h2>To Do</h2>
      <hr />
        <select value={category} onInput={onInput}>
          <option value="TO_DO">To Do</option>
          <option value="DOING">Doing</option>
          <option value="DONE">Done</option>
        </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
export default ToDoList;
