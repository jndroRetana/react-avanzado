import React from "react";
import { photos } from "../../../api/db.json";
import { PhotoCard } from "../PhotoCard/index";

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  );
};
