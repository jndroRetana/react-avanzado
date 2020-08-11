import React, { useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    //revisa que elementos están en este momento el el viewport
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      console.log({ isIntersecting });
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
  }, [ref]);

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
            <Button>
              <MdFavoriteBorder size="32px" /> {likes} Likes!
            </Button>
          </a>
        </>
      )}
    </Article>
  );
};
