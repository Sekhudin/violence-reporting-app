import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app';
// import { getAnalytics, Analytics as FirebaseAnalytics} from 'firebase/analytics';
import { getStorage, ref as sgRef, uploadBytes, getDownloadURL, FirebaseStorage, UploadResult, StorageReference } from 'firebase/storage';
import { 
  getDatabase, 
  ref, 
  child, 
  query, 
  get, 
  push, 
  orderByChild, 
  equalTo, 
  remove, 
  Database as FirebaseDatabase, 
  DatabaseReference,
  ThenableReference
} from "firebase/database";
import { 
  getAuth, 
  signOut, 
  setPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  browserSessionPersistence, 
  Auth as FirebaseAuth, 
  User as FirebaseUser, 
  UserCredential as FirebaseUserCredential
} from 'firebase/auth';
import { BadRequestException, ForbiddenException, InternalServerErrorException, UnAuthorizedException } from "src/util/exception/catch";
import { User } from './user.entity';
import { Firebase } from './_type'
import { ApiBase } from './_api';

export class DatabaseCollection extends ApiBase implements Firebase.Collection.Base {
  constructor(config: FirebaseOptions){
    super();
    this._app = initializeApp(config);
    this._auth = getAuth(this._app);
    this._db = getDatabase(this._app);
    this.storage = getStorage(this._app);
    // this.analythics = getAnalytics(this._app);

    this.articles = this.refTo('articles');
    this.cases = this.refTo('cases');
    this.users = this.refTo('users');
  }
  private readonly _app!: FirebaseApp;
  private readonly _auth!: FirebaseAuth;
  private readonly _db!: FirebaseDatabase;
  private readonly storage!: FirebaseStorage;
  // private readonly analythics!: FirebaseAnalytics;
  private readonly articles!: DatabaseReference;
  private readonly cases!: DatabaseReference;
  private readonly users!: DatabaseReference;

  dbRef: Firebase.Functions.DBRef<Firebase.Collection.Name | 'db'> = (type, path) => {
    if (type === 'db'){
      const db = ref(this._db);
      if(!path) return db;
      return child(db, path);
    }
    const collection = this.refTo(type);
    if(!path) return collection;
    return child(collection, path);
  }
  
  storageRef(path?: string | undefined): StorageReference {
    if(!path) return sgRef(this.storage);
    return sgRef(this.storage, path);
  }

  getAuth(): FirebaseAuth { return this._auth; }
  async viewFile(fullpath:string): Promise<string> {
    const result = await getDownloadURL(this.storageRef(fullpath));
    return result;
  }

    /**
   * @description Function Utility before saving, upload data, etc
   */
    protected getId(collectionName: Firebase.Collection.Name): string {
        let document: ThenableReference | null = null;
        switch (collectionName) {
          case 'articles':
            document = push(this.articles, '/');
            break;
          case 'cases':
            document = push(this.cases, '/');
            break;
          case 'users':
            throw new InternalServerErrorException("canot generate id");
        }
      if(!document || !document.key) throw new InternalServerErrorException("failed to generate id");
      return document.key;
    }
  
    protected async uploadFile(file: File | null, fullpath: string): Promise<UploadResult> {
      if(!file) throw new BadRequestException("failed, empty file");
      const result = await uploadBytes(this.storageRef(fullpath), file);
      return result;
    }
  
    /**
     * @description Database References Utility Functions
     */
    private refTo: Firebase.Functions.CollectionReference = (collectionName)=> {
      return ref(this._db, collectionName)
    }
  
    protected articleRef(path?: string): DatabaseReference {
      if(!path) return this.articles;
      return child(this.articles, path);
    }
  
    protected caseRef(path?: string): DatabaseReference {
      if(!path) return this.cases;
      return child(this.cases, path);
    }
  
    protected userRef(path?: string): DatabaseReference {
      if(!path) return this.users;
      return child(this.users, path);
    }

  /**
   * @description Autentication Functions
   */
  protected async signUpAccount(email:string, password:string): Promise<Record<'id' | 'hashedPassword', string>>{
    const { user } = await createUserWithEmailAndPassword(this._auth, email, password);
    const id = user.uid;
    const info = user as any;
    const hashedPassword = info.reloadUserInfo.passwordHash as string;
    if(!hashedPassword) throw new InternalServerErrorException('failed to create new account')
    return { id, hashedPassword }
  }

  protected async signInAccount(email:string, password: string): Promise<FirebaseUserCredential>{
    await setPersistence(this._auth, browserSessionPersistence);
    return await signInWithEmailAndPassword(this._auth, email, password);
  }

  protected async signOutAccount(): Promise<boolean>{
    await signOut(this._auth);
    return true;
  }

  protected async deleteAccount(): Promise<string>{
    const { uid } = this.WithUser();
    const qArticles = query(this.articles, orderByChild("author_id"), equalTo(uid));
    const articlesDS = await get(qArticles);
    const articleDeleted = articlesDS.forEach((article)=> { remove(article.ref); return true; })
    if(!articleDeleted) throw new InternalServerErrorException('failed to delete account')
    return uid;
  }

  /**
   * @description Function Protection Service (BY USER ROLE)
   */
  protected WithUser(): FirebaseUser {
    const currentUser = this._auth.currentUser;
    if(!currentUser) throw new ForbiddenException();
    return currentUser;
  }

  protected IsUser(): boolean {
    this.WithUser();
    return true;
  }

  protected async WithSuperAdmin(): Promise<User.Expose>{
    const { uid } = this.WithUser()
    const q = query(this.userRef(uid));
    const result = await get(q);
    const profile = result.toJSON();
    if(!profile) throw new UnAuthorizedException();
    const { password, ...expose} = profile as User.Entity;
    return expose;
  }

  protected async IsSuperAdmin(): Promise<boolean> {
    const user = await this.WithSuperAdmin();
    const isSuperAdmin: boolean = user.role.includes('super admin');
    if(!isSuperAdmin) throw new UnAuthorizedException();
    return true;
  }

}