import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { loadCategories, loadTodosByCat } from "../../redux/features/todos";

const Categories = () => {
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadTodosByCat());
  },[dispatch]);
  return (
    <div className="container-fluid">
      <div className="row">
        {categories.map((category) => {
          return <CategoryCard key={category._id} category={category} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
