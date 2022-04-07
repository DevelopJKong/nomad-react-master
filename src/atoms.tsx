import { atom, selector } from "recoil";

let output = localStorage.getItem("toDos");
let localData = JSON.parse(output as any);

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [localData ?? ""],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    console.log(toDos);
    const category = get(categoryState);
    console.log(category);
    return toDos.filter((toDo) => toDo.category === category);
  },
});


