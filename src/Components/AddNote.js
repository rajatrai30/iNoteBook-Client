import React, { useContext, useState } from 'react';
import noteContext from '../Context/notes/NoteContext';


const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleAddClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Note Added Successfully !!!", "success")

        
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>Add a Note</h1>
            <form className='container my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' style={{ backgroundColor: props.mode === 'dark' ? 'rgb(20, 81, 131)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={note.title} onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" id="description" name="description" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(20, 81, 131)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} className="form-control" value={note.description} onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" id="tag" name="tag" className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(20, 81, 131)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={note.tag} onChange={onChange} minLength={5} required/>
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleAddClick}>Add Note</button>
            </form>
        </div>
    )
}
export default AddNote