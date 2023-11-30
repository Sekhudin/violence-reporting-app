import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getDatabase,  } from 'firebase/database';
// import { getAnalytics } from 'firebase/analytics';
// import { getStorage } from 'firebase/storage';
import { ArticleCollection } from './collection/article';
import { CaseCollection } from './collection/case';
import { UserCollection } from './collection/user';
import { FirebaseConfig } from 'src/config/firebase';

const app = initializeApp(FirebaseConfig.config);
const database = getDatabase(app);
// const storage = getStorage(app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export class DatabaseService {
  readonly article!: ArticleCollection;
  readonly cases!: CaseCollection;
  readonly user!: UserCollection;

  readonly auth!: Auth;

  constructor (){
    this.article = new ArticleCollection(database, auth);
    this.cases = new CaseCollection(database, auth);
    this.user = new UserCollection(database, auth);
    this.auth = auth;
  }
}
