import { FirebaseOptions } from 'firebase/app';

export namespace FirebaseConfig {
  export const config: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
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