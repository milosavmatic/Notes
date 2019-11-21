import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { withRouter } from 'react-router';
import { useState } from 'react';

function Notes(props) {
    const onSubmit = () => {
        props.history.push('/Note');
    };
    const [searchText, setSearchText] = useState('');
    const [sortBy, setSortBy] = useState('asc');

    const removeNote = index => props.removeNote(index);

    const sortNotes = () => {
        if (!sortBy || sortBy === 'desc') {
            setSortBy('asc');
            return;
        }
        setSortBy('desc');
    };

    const notesData = () => {
        const { notes } = props;

        if (searchText.length > 0) {
            return notes.filter(noteItem =>
                noteItem.title.includes(searchText)
            );
        }
        if (sortBy) {
            const sortedNotes = notes.sort((a, b) => {
                a = new Date(a.date);
                b = new Date(b.date);
                return sortBy === 'desc' ? b - a : a - b;
            });
            return sortedNotes;
        }
        return notes;
    };

    const renderNotesItems = notesData().map((note, index) => (
        <div key={index}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <h4>{note.author}</h4>
            <button onClick={() => removeNote(index)}>X</button>
        </div>
    ));
    return (
        <div>
            <h1>Notes</h1>
            <button className="button" onClick={onSubmit}>
                Add Note
            </button>
            <br />
            <input
                placeholder="search"
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
            />
            <br />
            <button onClick={sortNotes}>Sort</button>

            {renderNotesItems}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        notes: state.notes
    };
};
const mapDispatchToProps = {
    removeNote: actions.removeNote
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notes));
