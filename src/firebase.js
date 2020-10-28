//require('dotenv').config(); いらない
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import store from "./store";
//store.commitでmutationsの関数を呼び出せる。
export default {
  init() {
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: "keio-meeting.firebaseapp.com",
      databaseURL: "https://keio-meeting.firebaseio.com",
      projectId: "keio-meeting",
      storageBucket: "keio-meeting.appspot.com",
      messagingSenderId: "474423892337",
      appId: "1:474423892337:web:c0f07da2e1b4d6aec4bed0",
      measurementId: "G-6YB0SZ9VF3",
    };
    //おなじみの初期化です。
    firebase.initializeApp(firebaseConfig); //firebaseConfigを読み込んで初期化
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION); //認証状態の永続性を決める
    //今回は、タブを閉じるまで。更新しても保持されます。
    //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL) : ユーザーがログアウトするまで残ります。
  },
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    //プロバイダにGoogleを指定します。
    provider.setCustomParameters({
      // hd: "gmail.com",
      hd: "keio.jp",
    });
    firebase.auth().signInWithPopup(provider);
    //プロバイダを指定してポップアップウィンドウでログインさせます。
  },
  logout() {
    firebase.auth().signOut();
    //ログアウトしてvuexからも削除
  },
  onAuth() {
    //コンポーネントでは最初にこの関数が呼ばれます。
    //firebase.auth().signIn...やfirebase.auth().signOut()が成功して認証状態が変化するとonAuthStateChangedに引っ掛かります。
    //Promiseでログインが完了した後に、ユーザー情報をvuexのstoreへ保存します。
    //var user = firebase.auth().currentUser : ユーザー情報を取得できます。
    firebase.auth().onAuthStateChanged((user) => {
      user = user ? user : {}; //ログアウトしたときはuserは何も入ってないのでfalseとなり、{}が保存されます。
      //呼ばれた時のユーザー情報をuserで返します。
      store.commit("onAuthStateChanged", user); //store.jsのonAuthStateChangedを呼び出してユーザー情報を渡す
      store.commit("onUserStatusChanged", user.uid ? true : false); //store.jsのonUserStatusChangedを呼び出してログインしてるかどうかのbool値を渡す
      //uidがログインした時だけ含まれるのを利用してます。
    });
  },
  functions() {
    return firebase.functions();
  },
};
