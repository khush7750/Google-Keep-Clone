import React, {useState} from 'react';
import Footer from './Component/Footer';
import Header from './Component/Header';
import CreateNote from './Component/CreateNote';
import Note from './Component/Note';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const[addItem , setAddItem] = useState([]);

  const addNote =(note) =>{
    setAddItem((prevsdata) =>{
      return[...prevsdata, note]
    })
    console.log(note)

    toast("Add sucess" ,{
      type:"success"
    })
  }

  const onDelete = (id) =>{
    setAddItem((alldata) =>
    alldata.filter((currentdata , index) => {
      return index !== id ;
    })
    );

    toast("Note Delete", {
      type: "error"
    })
  };

  return (
    <div>
      <Header/>
      <CreateNote passNote={addNote}/>
      {
        addItem.map((val, index) =>{
          return <Note 
                  kek={index}
                  id={index}
                  title={val.title}
                  content={val.content}
                  deleteItem = {onDelete}
                  />
        })
      }
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
