import React from "react";
import Cards from "../Cards";
import styles from "./styles.module.css";

const CategoryCard = ({ category }) => {
  // njkhjhjh
  return (
    <div className={`col text-center ${styles.col} `}>
      {/*<Cards categoryId={category._id}/>*/}
      <div className={`card text-white  mb-3`}>
        <div className="card-header bg-dark ">{category.name}</div>
        {/*<div className={`card-body bg-primary ${styles.card}`}>*/}
        {/*  <p className="card-text ">*/}
        {/*    Несколько быстрых примеров текста для построения на основе Заголовок*/}
        {/*    карточки и составления основной части содержимого карточки.*/}
        {/*  </p>*/}
        {/*</div>*/}
        {/*<div className={`card-body bg-primary ${styles.card}`}>*/}
        {/*  <p className="card-text">*/}
        {/*    Несколько быстрых примеров текста для построения на основе Заголовок*/}
        {/*    карточки и составления основной части содержимого карточки.*/}
        {/*  </p>*/}
        {/*</div>*/}
        <div className={'text-dark'}>
          <Cards categoryId={category._id}/>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
