import { faker } from '@faker-js/faker';
import { Article } from 'src/database/collection/article.entity';
import { Case } from 'src/database/collection/case.entity';
import { User } from 'src/database/collection/user.entity';

export namespace CreateFake {
  function randomValue<T>(values: T[]): T {
    const index = Math.floor(Math.random() * values.length);
    return values[index];
  }

  export function article(n: string | number): Article.Create {
    console.debug(`create user faker: seed --${n}`);
    return {
      title: faker.word.words(10),
      article: faker.word.words(200)
    }
  }

  export function newCase(n: string | number): Case.Create {
    console.debug(`create case faker: seed --${n}`);
    return {
      id_card: faker.string.numeric(16),
      name: faker.person.fullName(),
      address: faker.location.streetAddress(),
      phone: faker.string.numeric(12),
      title: faker.word.words(5),
      type_incident: randomValue(Case.TYPES),
      date_incident: faker.date.past({ years: 2 }),
      location_incident: faker.location.streetAddress(),
      description: faker.word.words(100),
      evidence: "",
      evidence_img: "/public/uploads/cases/default.jpg"
    }
  }

  export function user(n: string | number): User.Create {
    console.debug(`create user faker: seed --${n}`);
    return {
      id_card: faker.string.numeric(16),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      image: "/public/uploads/users/default.jpg",
      password: faker.internet.password(),
    }
  }

  export function superAdmin(): User.Create {
    console.debug("create object super admin");
    return {
      id_card: process.env.NEXT_PUBLIC_SUPER_IDCARD,
      name: process.env.NEXT_PUBLIC_SUPER_NAME,
      email: process.env.NEXT_PUBLIC_SUPER_EMAIL,
      password: process.env.NEXT_PUBLIC_SUPER_PASSWORD,
      image: ""
    } as User.Create;
  }

  export function adminExample(): User.Create {
    console.debug("create object admin (for example)");
    return {
      id_card: process.env.NEXT_PUBLIC_IDCARD,
      name: process.env.NEXT_PUBLIC_NAME,
      email: process.env.NEXT_PUBLIC_EMAIL,
      password: process.env.NEXT_PUBLIC_PASSWORD,
      image: ""
    } as User.Create;
  }
}


export type SafeAny = any;