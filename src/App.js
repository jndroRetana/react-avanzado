import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { GLobalStyle } from "./GlobalStyles";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard/index";

export const App = () => (
  <>
    <GLobalStyle />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>
);
