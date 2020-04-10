import React from "react";

import { Container, PosterAnime } from "./styles";
import { AiFillFire, AiFillForward } from "react-icons/ai";
import ReactLoading from "react-loading";

export default function AnimeDisplay({ title, data, show = false, icon = 0 }) {
  const [messageErro, setmessageErro] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setmessageErro(!messageErro);
    }, 10000);
  }, []);
  return (
    <Container>
      <h1>
        {icon > 1 ? (
          <AiFillForward color="#F7C331" size={36} />
        ) : (
          <AiFillFire color="#F7882F" />
        )}
        {title}
      </h1>
      {data.length > 0 ? (
        <ul>
          {data.map((anime) => (
            <li key={anime.id}>
              <PosterAnime src={anime.imgUrl}>
                {!!show && <span>{anime.dia}</span>}
                {/* {!!lista && (
                  <span>{anime.streaming ? "Passando" : "Hiato"}</span>
                )} */}
              </PosterAnime>
            </li>
          ))}
        </ul>
      ) : (
        <div className="loadingWidget">
          {messageErro ? (
            <p>Sem Animes</p>
          ) : (
            <ReactLoading type={"bars"} color={"#737380"} width={"40px"} />
          )}
        </div>
      )}
    </Container>
  );
}
