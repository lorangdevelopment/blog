export type Categories = string; //switch to a union type of string literals if not allowed

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
