export interface Tool {
	'@id'?: string;
	'@type'?: string;
	name?: string;
	/**
	 * original (external) identifier used by the datasource
	 */
	xid?: string;
	/**
	 * alternative tool identifiers
	 */
	alt_ids?: string[];
	/**
	 * the tool changed its id or was removed from the original repository
	 */
	depricated?: boolean;
	web?: Web;
	repositories?: string[];
	/**
	 * short and concise textual description of the tool
	 */
	brief?: string;
	/**
	 * high-level description of the tool
	 */
	description?: string;
	license?: string;
	maturity?: string;
	cost?: string;
	dependencies?: Dependencies;
	support?: Support;
	community?: Community;
	distributions?: Distributions;
	documentation?: Documentation;
	semantics?: Semantics;
	publications?: Publication[];
	contacts?: Contact[];
	credits?: Credit[];
	[k: string]: any;
}
export interface Web {
	homepage?: string;
	copyright?: string;
	license?: string;
	[k: string]: any;
}
export interface Dependencies {
	/**
	 * build system used to build the tool (maven, cmake, ant..)
	 */
	build_system?: string;
	build?: string[];
	runtime?: string[];
	[k: string]: any;
}
export interface Support {
	/**
	 * helpdesk providing support in using the software
	 */
	helpdesk?: string;
	/**
	 * tracker for the project issues, bug reports, feature requests etc.
	 */
	issue_tracker?: string;
	/**
	 * mailing list for the project announcements, discussions, support etc.
	 */
	mailing_list?: string;
	[k: string]: any;
}
export interface Community {
	social_media?: string[];
	[k: string]: any;
}
export interface Distributions {
	binaries?: string[];
	binary_packages?: string[];
	sourcecode?: string[];
	source_packages?: string[];
	vre?: string[];
	containers?: Container[];
	vm_images?: VMImage[];
	[k: string]: any;
}
export interface Container {
	type?: string;
	uri?: string;
	[k: string]: any;
}
export interface VMImage {
	type?: string;
	uri?: string;
	[k: string]: any;
}
export interface Documentation {
	/**
	 * link to the manual
	 */
	manual?: string;
	terms_of_use?: string;
	training_material?: string;
	citation_instructions?: string;
	doc_links?: string[];
	general?: string;
	help?: string;
	faq?: string;
	/**
	 * link to the tutorial
	 */
	tutorial?: string;
	/**
	 * link to the instructions for building the software
	 */
	build_instructions?: string;
	api?: string;
	[k: string]: any;
}
export interface Semantics {
	topics?: string[];
	operations?: string[];
	inputs?: Datatype[];
	outputs?: Datatype[];
	[k: string]: any;
}
export interface Datatype {
	datatype?: string;
	formats?: string[];
	[k: string]: any;
}
export interface Publication {
	doi?: string;
	pmcid?: string;
	pmid?: string;
	[k: string]: any;
}
export interface Contact {
	url?: string;
	email?: string;
	name?: string;
	phone?: string;
	[k: string]: any;
}
export interface Credit {
	/**
	 * name of credited entity
	 */
	name?: string;
	email?: string;
	type?: string;
	role?: string;
	orcid?: string;
	url?: string;
	comment?: string;
	[k: string]: any;
}
