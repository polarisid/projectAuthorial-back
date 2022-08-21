interface User {
	id: string;
	name: string;
	email: string;
	password: string;
}

export type CreateUserData = Omit<User, "id" | "name">;
