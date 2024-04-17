import React, { useEffect, useRef, useState } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc,updateDoc, } from "firebase/firestore"; 
import { db } from '../../config/router-congig/firebase/firebaseConfig';

const Home = () => {
  const [data, setData] = useState('');
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();







//data get 
  useEffect(() => {
    async function getDataFromFirestore() {
      const fetchedTodos = [];
      const querySnapshot = await getDocs(collection(db, "todo"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        const obj = {
          docId: doc.id,
          ...doc.data()
        }
        console.log(obj);
        fetchedTodos.push(obj);
      });
      setTodos(fetchedTodos);
    }
    getDataFromFirestore();

  }, []); // Empty dependency array ensures this effect runs only once when the component mounts
//add data 
  async function addTodo(event) {
    event.preventDefault();

    const newTodo = todoInputRef.current.value;
    setTodos([...todos, { todo: newTodo }]);
  
    try {
      const docRef = await addDoc(collection(db, "todo"), { todo: newTodo });
      console.log("Document written with ID: ", docRef.id);
      todos.push({ todo: newTodo,docId:docRef.id } )
      
    } catch (e) {
      console.error("Error adding document: ", e);

    }

    console.log(todos);
    setData('');
  }

  //delet data 
async function deletTodo(index){
  console.log(index)
  console.log(todos[index].docId)
  await deleteDoc(doc(db, "todo", todos[index].docId
));
  todos.splice(index, 1);
  setTodos([...todos]);
  }

//update function
  async function updateData(index) {
    const updateTodo = prompt("Enter your new value");
    if (updateTodo === null) return; // If user cancels the prompt, exit
  
    try {
      const todoDocId = todos[index].docId;
      const todoRef = doc(db, "todo", todoDocId);
  
      await updateDoc(todoRef, {
        todo: updateTodo // Assuming the field name is 'todo'
      });
  
      // Update the todo item in the local state
      const updatedTodos = [...todos];
      updatedTodos[index].todo = updateTodo;
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }
  


  return (
    <div>
      <div className='todoapp'>
        <div className='todohead' >
          <form onSubmit={addTodo} >
            <div className='main-headinG' >
              <h1 >Todo App</h1>
            </div>
            <input ref={todoInputRef} maxLength={16} onChange={(e) => { setData(e.target.value) }} value={data} type="text" />
            <h1>{data}</h1>
            <button type='submit'>add todo</button>
          </form>
        </div>
        <ul>
          { todos.length > 0 ? todos.map((item, index) => (
            <li key={index}>{item.todo}
              <div>
                <button onClick={()=>{updateData(index)}}>update</button>
                <button onClick={()=>{deletTodo(index)}}>delete</button>
              </div>
            </li>
          )) : <h1>No item found....</h1>}
        </ul>
      
      </div>
    </div>
  );
}

export default Home;
