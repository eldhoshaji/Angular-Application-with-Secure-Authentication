import { Observable } from 'rxjs';

export interface User {
  user_id: number;
  role_id: number;
  first_name: string;
  last_name?: string;
  email?: string;
  active?: boolean;
  last_login_date?: Date;
}

export interface UserResponse {
  room_id: number;
  question_id: number;
  answer_id: number;
}

export abstract class UserData {
  abstract getCurrentUser(): Observable<User>;
  abstract get(id: number): Observable<User>;
  abstract addResponse(response: UserResponse[]): Observable<any>;
  abstract checkResponseExist(room_id: number): Observable<any>;
}
