import React, { useEffect } from 'react';
import CreateNoteForm from "../Components/Notes/CreateNoteForm";
import Note from "../Components/Notes/Note";
import SideBar from "../Components/Sidebar/SideBar";
import { fetchMyNoteList } from '../store/note';
import { useSelector, useDispatch } from "react-redux";


const Home = () => {
    const dispatch = useDispatch();
    const { noteList } = useSelector(state => state.note)
    const { pinnedNoteList } = useSelector(state => state.note)

    useEffect(() => {
        dispatch(fetchMyNoteList())
    }, [])

    const renderNotes = (noteList) => {
        return (
            <>
                {noteList.map((note, index) => (
                    <Note key={note.id} index={index} note={note} />
                ))}
            </>
        )
    }

    const renderPinnedNotes = (pinnedNoteList) => {
        return (
            <>
                {pinnedNoteList.map((note, index) => (
                    <Note key={note.id} index={index} note={note} />
                ))}
            </>
        )
    }
    return (
        <div>
            <div style={{ display: 'flex', height: '100%', justifyContent: 'space-between', }}>
                <SideBar />
                <div style={{ display: 'flex', flexDirection: 'column', width: '80%', marginTop: '50px' }}>
                    <CreateNoteForm />
                    <div>
                        <h6 style={{ textAlign: 'left', marginTop: '60px' }}>Pinned Notes</h6>
                        <div className="d-flex flex-wrap" style={{ gap: '20px' }}>{renderPinnedNotes(pinnedNoteList)}</div>
                    </div>

                    <div>
                        <h6 style={{ textAlign: 'left', marginTop: '60px' }}>Unpinned Note</h6>
                        <div className="d-flex flex-wrap" style={{ gap: '20px', marginTop: '20px' }}>{renderNotes(noteList)}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;