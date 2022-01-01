import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cards = ({categoryId}) => {

  const todo = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosByCat())
  })

  return (
    <div>

    </div>
  );
};

export default ;