import { FirebaseRules } from 'src/config/firebase';
import { FirebaseType } from './collection/_type';
import { Article } from './collection/article';
import { Case  } from './collection/case';
import { User } from './collection/user';

 /**
 * @description firebaseDefaultRules:
 * @description by default this is default rules provide by firebase.
 * @description Note: always use double quotes, is json.
 */
 export const firebaseDefaultRules: FirebaseRules.BasicRules =
{
  "rules": {
    ".read": true,
    ".write": true,
  }
}

/**
 * @description firebaseCustomRules:
 * @description recomendation rules include collection rule.
 * @description Note: always use double quotes, is json.
 */
export const firebaseCustomRules: FirebaseRules.ConsoleRule<FirebaseType.CollectionName,
  Article.Entity
  & Case.Entity
  & User.Entity
  > =
{
  "rules": {
    ".read": true,
    ".write": true,
    "articles": {
      ".indexOn": ["id", "title", "author_id"]
    },
    "cases": {
      ".indexOn": ["id", "id_card", "name", "status", "title", "date_incident", "type_incident", "location_incident"]
    },
    "users": {
      ".indexOn": ["id", "id_card", "name", "username", "email", "role"]
    },
  }
}