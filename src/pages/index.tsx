import { NextPage } from "next";
import { Layout } from "../components/layout";
import { supabase } from "../util/supabase";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [errorText, setError] = useState("");

  const user = supabase.auth?.user();
  const addTodo = async () => {
    try{
      await supabase.from('task').insert({task: newTaskText, uid: user.id}).single()
    }catch(error){
      console.log(error);
      
    }
    // if (task.length) {
    //   let { data: todo, error } = await supabase
    //     .from("todos")
    //     .insert({ task, user_id: user.id })
    //     .single();
    //   if (error) setError(error.message);
    //   else setTodos([...todos, todo]);
    // }
  };

  return (
    <Layout>
      <input
        type="text"
        name="task"
        value={newTaskText}
        onChange={(e) => {
          setNewTaskText(e.target.value);
        }}
      />
      <button onClick={() => {addTodo()
      setNewTaskText('')}}>送信</button>
    </Layout>
  );
};

export default Home;
