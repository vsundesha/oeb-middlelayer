import { Metric } from './metrics/Metric';
import { Tool } from './tools/Tool';

export interface Aggregate {
	id: string;
	metrics: Metric;
	entities: Array<Tool>;
}
