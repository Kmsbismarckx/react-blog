import React from 'react';
import Post from './Post';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const List = ({ posts, className, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;
  }
  return (
    <div className={className}>
      <TransitionGroup className={className}>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Post remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default List;
