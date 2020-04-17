interface IGeneralTool {
	_id?: string;
	http_code?: string;
	description?: string;
	homepage?: string;
	types?: string[];
	name?: string;
}
export class GeneralTool implements IGeneralTool {
	_id?: string;
	http_code?: string;
	description?: string;
	homepage?: string;
	types?: string[];
	name?: string;
	constructor(_id?: string, http_code?: string, description?: string, homepage?: string, types?: string[], name?: string) {
		this._id = _id;
		this.http_code = http_code;
		this.description = description;
		this.homepage = homepage;
		this.types = types;
		this.name = name;
	}
}
