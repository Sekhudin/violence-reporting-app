import { DatabaseService } from 'src/database/database';
import { CreateFake } from './factory';

export async function initApp() {
  const db = new DatabaseService();
  const superAdmin = CreateFake.superAdmin();
  const admin = CreateFake.adminExample();
  try {
    await db.user.createSuperAdmin(superAdmin, null);
    await db.user.signIn(superAdmin.email, superAdmin.password);
    await db.user.create(admin, null);
    console.debug(`Super admin: \nemail: ${superAdmin.email} \npassword ${superAdmin.password}`);
    console.debug(`Admin: \nemail: ${admin.email} \npassword ${admin.password}`);
    process.exit(1);
  } catch (error) {
    console.debug('error :>> ', error);
    console.debug("failed - pleasse check data in database");
    process.exit(1);
  }
}

initApp();