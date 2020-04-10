import React from "react";

import { Container, PosterAnime } from "./styles";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function List() {
  const animes = useSelector((state) => state.animes);
  return (
    <Container>
      {animes.length > 0 ? (
        <ul>
          {animes.map((anime) => (
            <li key={anime._id}>
              <PosterAnime src={anime.imgUrl} streaming={anime.streaming}>
                <span>{!!anime.streaming ? "Passando" : "Hiato"}</span>
              </PosterAnime>
            </li>
          ))}
        </ul>
      ) : (
        <ReactLoading type={"spin"} color={"#F7882F"}/>
      )}
    </Container>
  );
}
