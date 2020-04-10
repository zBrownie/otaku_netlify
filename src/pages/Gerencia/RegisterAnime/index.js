import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";

import { useSelector } from "react-redux";
import { FormControl } from "@material-ui/core";
import { addImagem } from "../../../services/firebase_actions";
import { useHistory } from "react-router-dom";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {},
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#F7882F",
  },
  inputFile: {
    marginBottom: 12,
  },
  previewImage: {
    maxHeight: 300,
    maxWidth: 200,
    borderRadius: 8,
  },
  textarea: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 4,
    background: "transparent",
    padding: 8,
    resize: "none",
  },
}));

export default function RegisterAnime() {
  const classes = useStyles();
  const [pos, setpos] = useState();
  const [dia, setdia] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [link, setlink] = useState("");
  const [link2, setlink2] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [streaming, setstreaming] = useState();
  const [file, setfile] = useState();
  const user = useSelector((state) => state.userdata);
  const history = useHistory();
  const handleChangeDia = (e) => {
    setpos(e.target.value);
    var index = e.nativeEvent.target.selectedIndex;

    setdia(e.nativeEvent.target[index].text);
  };

  const handleRegisterAnime = async (e) => {
    e.preventDefault();
    let data = {
      title: title,
      desc: desc,
      link: link,
      link2: link2,
      imgUrl: imgUrl,
      dia: dia,
      pos: parseInt(pos),
      streaming: parseInt(streaming),
      createdAt: Date.now(),
      createdBy: { id: user.id, name: user.name },
    };

    await addImagem(file, data).then((doc) => {
      history.push("/");
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <div className={classes.avatar}>
          <img
            src={
              file == null
                ? "https://via.placeholder.com/200x300"
                : URL.createObjectURL(file)
            }
            alt="Preview Logo"
            className={classes.previewImage}
          />
        </div>
        <Typography component="h1" variant="h5">
          Registro de Anime
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleRegisterAnime}
          noValidate
        >
          <Grid>
            <Input
              type="file"
              id="file"
              label="file"
              variant="outlined"
              className={classes.inputFile}
              onChange={(e) => setfile(e.target.files[0])}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined">
                {/* <InputLabel htmlFor="age-native-simple">Dia</InputLabel> */}
                <Select native value={pos} onChange={handleChangeDia}>
                  <option aria-label="None" value={null}>
                    Dia
                  </option>
                  <option value={1}>Segunda</option>
                  <option value={2}>Terça</option>
                  <option value={3}>Quarta</option>
                  <option value={4}>Quinta</option>
                  <option value={5}>Sexta</option>
                  <option value={6}>Sabado</option>
                  <option value={0}>Domingo</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined">
                {/* <InputLabel htmlFor="age-native-simple">Streaming</InputLabel> */}
                <Select
                  native
                  value={streaming}
                  onChange={(e) => setstreaming(e.target.value)}
                >
                  <option aria-label="None" value={null}>
                    Streaming
                  </option>
                  <option value={1}>Passando</option>
                  <option value={0}>Hiato</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="link"
                label="Link Oficial"
                name="link"
                value={link}
                onChange={(e) => setlink(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="link2"
                label="Link Pirata"
                type="text"
                id="link2"
                value={link2}
                onChange={(e) => setlink2(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                name="desc"
                label="Link Pirata"
                rows="4"
                type="text"
                id="desc"
                className={classes.textarea}
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
