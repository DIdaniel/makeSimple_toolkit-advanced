import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdded } from './postsSlice';

const AddPostForm = () => {
  /** Property */
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  /** Function */
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));

      setTitle('');
      setContent('');
    }
  };

  /** Rebder */
  return (
    <section>
      <h2>Add a new post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title : </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content : </label>
        <textarea
          name="postContent"
          id="postCOntent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={onSavePostClicked}>
          SAVE POST
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
