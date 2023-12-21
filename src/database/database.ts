import { Auth as FirebaseAuth } from 'firebase/auth';
import { FirebaseConfig } from 'src/config/firebase';
import { ArticleCollectionService } from './collection/article';
import { CaseCollectionService } from './collection/case';
import { UserCollectionService } from './collection/user';
export * from './collection/_entity';

export type ErrorCB = (err: Error ) => unknown;
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
