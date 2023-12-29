import { DatabaseService } from 'src/database/database';
import { CreateFake } from './factory';

async function seed(seedNumber:number) {
  const db =  new DatabaseService();
  const superAdmin = CreateFake.superAdmin();
  await db.user.signIn(superAdmin.email, superAdmin.password);
  for (let i = 1; i <= seedNumber; i++) {
    const newCase = CreateFake.newCase(i);
    const article = CreateFake.article(i);
    await db.cases.create(newCase, null);
    await db.article.create(article, null);
  }
  console.debug("Seeding Successfull");
  process.exit(1);
}

seed(100);