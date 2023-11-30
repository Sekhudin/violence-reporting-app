import { FirebaseOptions } from 'firebase/app';

export namespace FirebaseConfig {
  export const config: FirebaseOptions = {
    apiKey: "AIzaSyBhMhLPGmtDMzQtc0kmS9vVQXlYNn77lVU",
    authDomain: "lawan-project-id-7640f.firebaseapp.com",
    databaseURL: "https://lawan-project-id-7640f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lawan-project-id-7640f",
    storageBucket: "lawan-project-id-7640f.appspot.com",
    messagingSenderId: "970172179735",
    appId: "1:970172179735:web:b2e5d9295c4cb76ed6c352",
    measurementId: "G-KQMSZSQRTQ"
  }
}

export namespace FirebaseRules {
  export type BasicRules = {
    "rules" :{
      ".read": true | "auth != null"
    ".write": true | "auth != null"
    }
  }

  type ExtraRules = {
    ".validate"?: "newData.hasChildren(['id', 'content'])" | string;
  }

  type CollectionRule<T extends {}> = {
    ".indexOn"?: keyof T | (keyof T)[];
    "$id"?: Partial<BasicRules> & ExtraRules;
  }

  export type ConsoleRule<T extends string = string, V extends {} = {}> = {
    "rules" : {
      [P in T]?: CollectionRule<V>;
    } & BasicRules['rules']
  };
}