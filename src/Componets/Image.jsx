import React from "react";

export default function Image(props) {
  if (props.p1 === null) {
    throw new Error("Image Not Found");
  }
  return <img src={"https://image.tmdb.org/t/p/w500" + props.p1} alt="" />;
}
