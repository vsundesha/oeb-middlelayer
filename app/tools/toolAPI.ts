import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type Tool {
		id: String
	}

	type Query {
		tools: [Tool]
	}
`;

export const tools = [
	{
		id: 'Harry Potter and the Chamber of Secrets'
	},
	{
		id: 'Jurassic Park'
	}
];

export const resolvers = {
	Query: {
		tools: () => tools
	}
};
