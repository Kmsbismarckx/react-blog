import React from 'react';

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = ['myModal'];
  if (visible) {
    rootClasses.push('myModalActive');
  }
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div
        className="myModalContent"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
