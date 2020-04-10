import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

import { useHistory } from "react-router-dom";
import { azul } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import firebase, {
  signInEmailPassword,
  getDataUser,
  signOut,
  getAnimesSeason,
  getAnimesDaily,
  getAnimes,
} from "../../services/firebase_actions";
import {
  handleAddAnimes,
  handleGetSeason,
  handleGetUser,
} from "../../redux/Actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
  appbarcolor: {
    background: azul,
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userdata);

  React.useEffect(() => {
    //LISTERNER USER
    const listenerUser = async () =>
      await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          getDataUser(user.uid).then((data) => {
            dispatch(handleGetUser(data));
          });
        }
        dispatch(handleGetUser(null));
      });

    listenerUser();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    setAnchorEl(null);
    await signOut();
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbarcolor}>
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            onClick={() => {
              history.push("/");
            }}
          >
            Otaku List
          </Typography>
          {user ? (
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon style={{ color: "#fff" }} />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {user.admin ? (
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      history.push("/anime/register");
                    }}
                  >
                    Cadastrar Anime
                  </MenuItem>
                ) : null}
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    history.push("/profile");
                  }}
                >
                  Profile
                </MenuItem>
                {user.admin ? (
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      history.push("/admin");
                    }}
                  >
                    Gerenciar animes
                  </MenuItem>
                ) : null}
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    history.push("/list");
                  }}
                >
                  Lista Animes
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button
              color="inherit"
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
