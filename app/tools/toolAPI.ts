import axios from 'axios';
import { GeneralTool } from './model/tools/GeneralTool';

function parseData(data: any[]) {
	let generalTools: GeneralTool[] = [];
	data.forEach((gtool) => {
		//seperate entities,metrics
		const enteties: any[] = gtool['entities'];

		const metrics: any = gtool['metrics'];

		const _id = gtool['id'] || 'na';
		const http_code = metrics['project']['website']['operational'] || 'na';
		const description = enteties[0]['tools'][0]['description'] || 'na';
		const homepage = enteties[0]['tools'][0]['web']['homepage'] || 'na';
		const name = enteties[0]['tools'][0]['name'] || 'na';
		//type from entities
		let types: string[] = [];
		enteties.forEach((entity) => {
			if (entity.type) {
				types.push(entity.type);
			}
		});
		generalTools.push(new GeneralTool(_id, http_code, description, homepage, types, name));
	});
	return generalTools;
}

export async function generalTools(skip: string, limit: string) {
	// console.log(skip, limit);
	const url = new URL('https://dev-openebench.bsc.es/monitor/rest/edam/aggregate');
	url.searchParams.set('label', 'null');
	url.searchParams.set('skip', skip);
	url.searchParams.set('limit', limit);

	const response = axios
		.get(url.href)
		.then((res) => {
			return parseData(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
	return await response;
}
