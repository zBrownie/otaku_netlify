import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyCxSaRtixSzs9SkuTyhKT8L5DGa-h9FZww",
  authDomain: "otakulist-2e5c0.firebaseapp.com",
  databaseURL: "https://otakulist-2e5c0.firebaseio.com",
  projectId: "otakulist-2e5c0",
  storageBucket: "otakulist-2e5c0.appspot.com",
  messagingSenderId: "1044762241083",
  appId: "1:1044762241083:web:9b66c2b6e86585e381941e",
  measurementId: "G-CET524P744",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
// ACTIONS

//            FIREBASE AUTH

export async function createUser(email, password) {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((newUser) => {
      let emailName = email.split("@");
      let username = emailName.length === 2 ? emailName[0] : null;

      let userData = {
        id: newUser.user.uid,
        name: username,
        email: email,
        admin: 0,
        imgUrl: null,
        favorites: [],
      };

      createUserData(userData);

      return newUser;
    })
    .catch((err) => {
      return err;
    });
}

async function createUserData(data) {
  await firebase
    .firestore()
    .collection("users")
    .doc(data.id)
    .set(data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("NAO FOI POSSIVEL INSERIR DADOS NO FIRESTORE", err);
      return err;
    });
}

export async function signInEmailPassword(email, password) {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log("ERRO LOGIN USUARIO", err);
      return err;
    });
}

export async function signOut() {
  await firebase.auth().signOut();
}

export async function getDataUser(id) {
  return (await firebase.firestore().collection("users").doc(id).get()).data();
}

//            FIREBASE STORE

export async function addImagem(file, data) {
  const ref = firebase.storage().ref().child("animes_poster");

  await ref
    .child(`${data.title}.png`)
    .put(file)
    .then((upload) => {
      upload.ref.getDownloadURL().then((url) => {
        let newData = {
          ...data,
          imgUrl: url,
        };

        firebase
          .firestore()
          .collection("animes")
          .add(newData)
          .then((doc) => {
            console.log("Anime adicionado com sucesso!");
            return "Anime adicionado com sucesso!";
          })
          .catch((err) => {
            console.log("Erro ao adicionar anime , tente novamente");
            return "Erro ao adicionar anime , tente novamente";
          });
      });
    });
}

export async function getAnimes() {
  return await firebase
    .firestore()
    .collection("animes")
    .orderBy("pos")
    .get()
    .then((query) =>
      query.docs.map((docs) => ({ id: docs.id, ...docs.data() }))
    );

  // return await firebase
  //   .firestore()
  //   .collection("animes")
  //   .onSnapshot(function(query) {
  //     query.docs.map(function(docs) {
  //       let snapdata = {
  //         id: docs.id,
  //         ...docs.data
  //       };

  //       return snapdata;
  //     });
  //   });
}

export async function getAnimesDaily() {
  let day = new Date().getDay();

  return await firebase
    .firestore()
    .collection("animes")
    .where("pos", "==", day)
    .where("streaming", "==", 1)
    .get()
    .then((query) =>
      query.docs.map((docs) => ({ id: docs.id, ...docs.data() }))
    );
}

export async function getAnimesSeason() {
  return await firebase
    .firestore()
    .collection("animes")
    .where("streaming", "==", 1)
    .get()
    .then((query) =>
      query.docs.map((docs) => ({ id: docs.id, ...docs.data() }))
    );
}

export async function deleteAnime(id) {
  await firebase
    .firestore()
    .collection("animes")
    .doc(id)
    .delete()
    .then((resp) => {
      console.log("ANIME DELETADO", resp);
    });
}

export async function updateAnime(data) {
  await firebase
    .firestore()
    .collection("animes")
    .doc(data.id)
    .update(data)
    .then((resp) => {
      console.log("ANIME EDITADO", resp);
    });
}

export async function listenerAnimes() {
  await firebase
    .firestore()
    .collection("animes")
    .onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        let animes = {
          id: doc.id,
          ...doc.data(),
        };

        return animes;
      });
    });
}
