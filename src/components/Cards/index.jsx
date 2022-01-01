// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Card from './Card';
//
// const Cards = ({categoryId}) => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos)
//
//   useEffect(() => {
//     dispatch(loadTodosByCat(categoryId));
//   })
//
//   return (
//     <div>
//       {todos.map((todo) => {
//         return <Card todo={todo}/>
//       })}
//     </div>
//   );
// };
//
// export default Cards;