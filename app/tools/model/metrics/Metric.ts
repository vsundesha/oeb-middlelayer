export interface Metric {
	'@id'?: string;
	project?: Project;
	distribution?: Distribution;
	support?: Support;
	[k: string]: any;
}
export interface Project {
	identity?: Identity;
	summary?: Summary;
	website?: Website;
	build?: Build;
	deployment?: Deployment;
	license?: License;
	documentation?: Documentation;
	publications?: Publication[];
	readme?: boolean;
	/**
	 * whether the project has defined a governance model
	 */
	governance?: boolean;
	[k: string]: any;
}
export interface Identity {
	domain?: boolean;
	logo?: boolean;
	recognizability?: boolean;
	uniqueness?: boolean;
	trademark?: boolean;
	[k: string]: any;
}
export interface Summary {
	/**
	 * a short description is provided
	 */
	brief?: boolean;
	description?: boolean;
	concept?: boolean;
	rationale?: boolean;
	architecture?: boolean;
	usecases?: boolean;
	case_studies?: boolean;
	[k: string]: any;
}
export interface Website {
	/**
	 * http response code from the last check
	 */
	operational?: number;
	/**
	 * last time the homepage has been checked
	 */
	last_check?: string;
	/**
	 * web site states copyright
	 */
	copyright?: boolean;
	/**
	 * web site states who developed/develops the software, funders etc.
	 */
	acknowledgement?: boolean;
	/**
	 * web site states a license
	 */
	license?: boolean;
	resources?: boolean;
	/**
	 * search engines allowed to track the website
	 */
	robots?: boolean;
	/**
	 * web site access is secured (https)
	 */
	https?: boolean;
	/**
	 * ssl works
	 */
	ssl?: boolean;
	/**
	 * homepage load time in ms.
	 */
	access_time?: number;
	/**
	 * whether the homepage is annotated with 'bioschemas'
	 */
	bioschemas?: boolean;
	[k: string]: any;
}
export interface Build {
	/**
	 * whether instructions for building the software are provided
	 */
	instructions?: boolean;
	/**
	 * whether the list of all third-party dependencies for proper project build is provided
	 */
	dependencies?: boolean;
	/**
	 * whether the automated build system used
	 */
	automated?: boolean;
	/**
	 * operative system used to build the software (unix or not)
	 */
	unix?: boolean;
	[k: string]: any;
}
export interface Deployment {
	/**
	 * whether instructions for installing the software are provided
	 */
	instructions?: boolean;
	/**
	 * whether the list of all third-party runtime dependencies is provided
	 */
	dependencies?: boolean;
	[k: string]: any;
}
export interface License {
	/**
	 * project has an open source license
	 */
	open_source?: boolean;
	/**
	 * software has an Open Software Initiative (OSI)-recognised license
	 */
	osi?: boolean;
	[k: string]: any;
}
export interface Documentation {
	/**
	 * software has an API documentation (e.g. JavaDoc, Doxygen)
	 */
	api?: boolean;
	/**
	 * whether the API documentation is held under version control system
	 */
	api_versioned?: boolean;
	howto?: boolean;
	tutorial?: boolean;
	citation?: boolean;
	help?: boolean;
	faq?: boolean;
	general?: boolean;
	build?: boolean;
	manual?: boolean;
	terms_of_use?: boolean;
	training_material?: boolean;
	[k: string]: any;
}
export interface Publication {
	entries?: PublicationEntry[];
	[k: string]: any;
}
export interface PublicationEntry {
	doi?: string;
	pmid?: string;
	pmcid?: string;
	title?: string;
	year?: number;
	ref_count?: number;
	cit_count?: number;
	refs?: NReferences[];
	citations?: NCitations[];
	[k: string]: any;
}
export interface NReferences {
	/**
	 * the year of the referenced articles
	 */
	year?: string;
	/**
	 * number of referenced articles published in this year
	 */
	count?: number;
	[k: string]: any;
}
export interface NCitations {
	/**
	 * the year citations counted
	 */
	year?: string;
	/**
	 * number of citations for the year
	 */
	count?: number;
	[k: string]: any;
}
export interface Distribution {
	readme?: boolean;
	binaries?: Binaries;
	sourcecode?: Sourcecode;
	vre?: boolean;
	packages?: boolean;
	/**
	 * whenever the code can be dounloaded as a package (i.e. zip achive)
	 */
	source_packages?: boolean;
	[k: string]: any;
}
export interface Binaries {
	freeness?: boolean;
	registration?: boolean;
	[k: string]: any;
}
export interface Sourcecode {
	/**
	 * whether the sourcecode is interpreted (Python, Perl, Ruby) or compiled (C, C++, Fortran)
	 */
	interpreted?: boolean;
	/**
	 * each source code file has a copyright statement
	 */
	copyright?: boolean;
	license?: boolean;
	/**
	 * each source code file has a license header
	 */
	license_headers?: boolean;
	readme?: boolean;
	/**
	 * source distributions are freely available
	 */
	free?: boolean;
	/**
	 * sourcecode is available without the need for any registration
	 */
	public?: boolean;
	repository?: Repository;
	[k: string]: any;
}
export interface Repository {
	/**
	 * anonymous access to the repository
	 */
	anonymous?: boolean;
	/**
	 * whether the repository is browsable (online)
	 */
	online?: boolean;
	[k: string]: any;
}
export interface Support {
	email?: boolean;
	issue_tracking?: IssueTracking;
	[k: string]: any;
}
export interface IssueTracking {
	public_tracker?: boolean;
	resolve_time?: string;
	[k: string]: any;
}
