export interface UserDB {
  username: string;
  uid: string;   
  email: string;
}

export interface ProfileState {
  user?: UserDB;
  error: boolean;
}
