import { Auth as FirebaseAuth } from 'firebase/auth';
import { type DataSnapshot } from 'firebase/database';
import { FirebaseConfig } from 'src/config/firebase';
import { ArticleCollectionService } from './collection/article';
import { CaseCollectionService } from './collection/case';
import { UserCollectionService } from './collection/user';
import { Firebase } from './collection/_type';
export * from './collection/_entity';

export type Snapshot = DataSnapshot;
export type ErrorCB = (err: Error ) => unknown;
export type PayloadFrom<T extends Record<string, any>> = Firebase.Collection.Data<T>;
export class DatabaseService {
  readonly article!: ArticleCollectionService;
  readonly cases!: CaseCollectionService;
  readonly user!: UserCollectionService;

  readonly auth!: FirebaseAuth;

  constructor (){
    this.article = new ArticleCollectionService(FirebaseConfig.config);
    this.cases = new CaseCollectionService(FirebaseConfig.config);
    this.user = new UserCollectionService(FirebaseConfig.config);

    this.auth = this.user.getAuth();
  }
}
