import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false)

    const [note, setNote] = useState({
        title:"",
        content:"",
    })

    const InputEvent = (e) =>{

        // const value = event.target.value
        // const name = event.target.name

        const {name , value } = e.target;

        setNote((prevdata) => {
            return{
                ...prevdata,
                [name]: value,
            }
        })
    }

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
    };

    const expandIt = () =>{
        setExpand(true)
    }

    const backNormal = () =>{
        setExpand(false)
    }

    return (
     <> 
        <div className="main_note"  onDoubleClick= {backNormal}>
            <form >
                {expand?
                <input
                 type="text"
                 name= "title"
                 value={note.title} 
                 onChange={InputEvent}
                 placeholder ="Title" 
                 autoComplete="off" 
                />  : null}

                <textarea 
                 rows="" 
                 column="" 
                 name="content"
                 value={note.content}
                 onChange={InputEvent}
                 placeholder="Write a note" 
                 onClick={expandIt}
                 
                />
                {expand? 
                <Button onClick= {addEvent} >
                    <AddIcon className="plus_sign" />
                </Button>
                : null}
            </form>
        </div>
     </>
    )
}

export default CreateNote
