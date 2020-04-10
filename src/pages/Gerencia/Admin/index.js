import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import { useSelector } from "react-redux";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteAnime } from "../../../services/firebase_actions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  iconButton: {
    cursor: "pointer",
  },
});

export default function SimpleTable() {
  const classes = useStyles();
  const [animeState, setanimeState] = React.useState({});
  const animes = useSelector((state) => state.animes);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (anime) => {
    setanimeState(anime);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setanimeState({});
  };

  const handleDeleteAnime = async () => {
    setOpen(false);
    await deleteAnime(animeState.id).then((resp) => {
      history.push("/");
      setanimeState({});
    });
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Poster</TableCell>
              <TableCell align="center" style={{ width: 50 }}>
                Title
              </TableCell>
              <TableCell align="center">Passando/Hiato</TableCell>
              <TableCell align="center">Dia</TableCell>
              <TableCell align="center" style={{ width: 50 }}>
                Links
              </TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {animes.map((anime) => (
              <TableRow key={anime.id}>
                <TableCell align="center">
                  <img
                    src={anime.imgUrl}
                    alt={anime.title}
                    width="90"
                    height="130"
                    style={{ borderRadius: 4 }}
                  />
                </TableCell>
                <TableCell align="center" style={{ width: 50 }}>
                  {anime.title}
                </TableCell>
                <TableCell align="center">
                  {anime.streaming ? "Passando" : "Hiato"}
                </TableCell>
                <TableCell align="center">{anime.dia}</TableCell>
                <TableCell
                  align="center"
                  style={{
                    width: 50,
                  }}
                >
                  <a
                    href={anime.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Oficial /
                  </a>
                  <a
                    href={anime.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pirata
                  </a>
                </TableCell>
                <TableCell align="center">
                  <MdEdit
                    size={28}
                    color="#000000"
                    className={classes.iconButton}
                    onClick={() => {
                      history.push({
                        pathname: "/anime/edit",
                        state: { anime },
                      });
                    }}
                  />
                  <MdDelete
                    size={28}
                    color="#ad4545"
                    className={classes.iconButton}
                    onClick={() => handleClickOpen(anime)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deletando!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza deseja deletar este anime?
            <strong>{animeState.title}</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancelar
          </Button>
          <Button onClick={handleDeleteAnime} color="primary">
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
