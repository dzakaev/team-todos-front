import React from 'react';

const Card = ({todo}) => {
  return (
    <div>
      {todo.text}
    </div>
  );
};

export default Card;