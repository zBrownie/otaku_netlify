import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  getAnimesDaily,
  getAnimesSeason,
} from "../../services/firebase_actions";
import { useSelector } from "react-redux";
import AnimeDisplay from "../../components/AnimeDisplay";
import { useDispatch } from "react-redux";
import { handleGetSeason, handleAddAnimes } from "../../redux/Actions";
import { listenerAnimes, getAnimes } from "../../services/firebase_actions";

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();
  const season = useSelector((state) => state.season);
  const [daily, setdaily] = React.useState([]);
  const [lista, setlista] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    //ANIMES DATA

    const getAnimesStore = async () => {
      getAnimes().then((docs) => {
        dispatch(handleAddAnimes(docs));
      });
    };
    getAnimesStore();
    getAnimesDaily().then((docs) => {
      setdaily(docs);
    });

    getAnimesSeason().then((docs) => {
      dispatch(handleGetSeason(docs));
    });

    listenerAnimes().then((resp) => {
      setlista(resp)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.paper}>
      {console.log(lista)}
      <AnimeDisplay data={daily} title="Passando Hoje" icon={1} />
      <AnimeDisplay data={season} title="Season" show={true} icon={2} />
    </div>
  );
}
