import { User } from '@interfaces/users.interface';

// password: password
const userModel: User[] = [
  { id: 1, email: 'example1@email.com', password: '$2b$10$Q7OKAKTbt2oYHh2lxsJLt.me6e0KUDVCltDdLS0Nr5Q2gxM49L32i' },
  { id: 2, email: 'example2@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
  { id: 3, email: 'example3@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
  { id: 4, email: 'example4@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
];
export default userModel;
