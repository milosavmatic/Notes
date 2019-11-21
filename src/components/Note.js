import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

const Note = props => {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [author, setAuthor] = useState('');

    const resetText = () => {
        setTitle('');
        setAuthor('');
        setDesc('');
    };

    const handleSubmission = () => {
        props.addNote(title, description, author);

        setTitle(title);
        setDesc(description);
        setAuthor(author);
        resetText();

        props.history.push('/')
    };

    const storeDraft = () => {
        props.storeDraft(title, description, author);
    }

    const loadDraft = () => {
        const draft = props.draft
        if(!draft){
            return
        }
        setTitle(draft.title)
        setDesc(draft.description)
        setAuthor(draft.author)
    }

    return (
        <div>
            <h1>Add note</h1>
            <input
                placeholder="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <br />
            <input
                placeholder="description"
                value={description}
                onChange={e => setDesc(e.target.value)}
            />
            <br />
            <input
                placeholder="author"
                value={author}
                onChange={e => setAuthor(e.target.value)}
            />
            <br />
            <button onClick={handleSubmission}>Add note</button>
            <div>
                <button onClick={loadDraft}>Load draft</button>
                <button onClick={storeDraft}>Save draft</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { draft: state.draft }
};

export default connect(mapStateToProps, {
    ...actions
})(Note);
