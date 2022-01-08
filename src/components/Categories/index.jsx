import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { loadCategories, loadTodosByCat } from "../../redux/features/todos";

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadTodosByCat());
  },[dispatch]);

  return (
    <div className="container-fluid">
      {loading ? (
        <div className="text-center">
          <div
            className="spinner-grow"
            style={{ width: "20rem", height: "20rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {categories.map((category) => {
            return <CategoryCard key={category._id} category={category} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
