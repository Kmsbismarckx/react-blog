import React from 'react';
import InputText from './UI/input/InputText';
import Button from './UI/button/Button';
import { useState } from 'react';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '', time: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    create({
      ...post,
      id: Date.now(),
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    });
    setPost({ title: '', body: '', time: '' });
  };

  return (
    <form className="form">
      <InputText
        className="inputText"
        type="text"
        placeholder="Название"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <InputText
        className="inputText"
        type="text"
        placeholder="Задача"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <Button onClick={addNewPost}>Новая задача</Button>
    </form>
  );
};

export default PostForm;
