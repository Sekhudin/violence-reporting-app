import { FirebaseRules } from 'src/config/firebase';
import { Firebase } from './collection/_type';
import { Article } from './collection/article.entity';
import { Case  } from './collection/case.entity';
import { User } from './collection/user.entity';

export const defaultRules: FirebaseRules.BasicRules =
{
  "rules": {
    ".read": true,
    ".write": true,
  }
}

export const customRules: FirebaseRules.ConsoleRule<Firebase.Collection.Name,
  Article.Entity
  & Case.Entity
  & User.Entity
  > =
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
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