import { GraphQLClient } from 'graphql-request';
import { Link } from './model/Link';

function addsubmenu(res: any) {
	const basepath = '/scientific';
	let submenu: Link[] = [];
	for (let link of res.getCommunities) {
		submenu.push({
			path: basepath + '/' + link._id,
			label: link.name
		});
	}
	return [
		{
			path: basepath,
			label: 'Scientific',
			submenu: submenu
		},
		{
			path: '/tool',
			label: 'Technical monitoring'
		},
		{
			label: 'Docs',
			href: 'https://dev-openebench.bsc.es/docs/'
		}
	];
}

export async function scientificComunitiesList() {
	const query = `
    {
        getCommunities {
            _id
            name
            acronym
        }
    }`;

	const endpoint = 'https://dev-openebench.bsc.es/sciapi/graphql';

	const client = new GraphQLClient(endpoint);
	const response = client
		.request(query)
		.then(res => {
			return addsubmenu(res);
		})
		.catch(err => console.log(err));

	return await response;
}
