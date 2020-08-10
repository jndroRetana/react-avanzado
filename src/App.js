import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { GLobalStyle } from "./GlobalStyles";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard/index";
import { Logo } from "./components/Logo/index";

export const App = () => (
  <>
    <Logo />
    <GLobalStyle />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>
);
