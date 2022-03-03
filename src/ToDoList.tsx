import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, handleSubmit,formState} = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState);

  return (
    <div>
      <form style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
        email
        <input {...register("email", { required: true })} placeholder="Email" />
        first name
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        last name
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        username
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        password
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        password1
        <input
          {...register("password1", { required: "Password is required", minLength: 5 })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;