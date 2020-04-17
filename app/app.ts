import express = require('express');
import { Request, Response, NextFunction } from 'express';

const app: express.Application = express();

import { scientificComunitiesList } from './menu/menuMaker';
import { generalTools } from './tools/toolAPI';

app.get('/links', function (req: Request, res: Response, next: NextFunction) {
	res.header('Access-Control-Allow-Origin', '*');
	scientificComunitiesList()
		.then((response) => {
			res.json(response);
		})
		.catch((err) => {
			res.json(err);
		});
});

app.get('/tools', function (req: Request, res: Response, next: NextFunction) {
	res.header('Access-Control-Allow-Origin', '*');
	let skip = req.query.skip || '0';
	let limit = req.query.limit || '10';

	generalTools(skip, limit)
		.then((response) => {
			res.json(response);
		})
		.catch((err) => {
			res.json(err);
		});
});

app.listen(3030, function () {
	console.log('Example app listening on port 3030!');
});
