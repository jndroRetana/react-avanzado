import React, { useState, useEffect } from "react";
import { Category } from "../category/index";
import { List, Item } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://petgram-server-jarn.vercel.app/categories")
      .then((response) => response.json())
      .then((res) => {
        setCategories(res);
        setLoading(false);
      })

      .catch((error) => console.log(error.message));
  }, []);
  return { categories, loading };
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = () => {
      const newScroll = window.scrollY > 200;
      setShowFixed(newScroll);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  if (loading) {
    return "Cargando...";
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
