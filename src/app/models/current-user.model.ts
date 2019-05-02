import { User } from './user.model';

export class CurrentUser {
    token_type: string;
    expires_in: number;
    access_token: string;
    user: User;
}
