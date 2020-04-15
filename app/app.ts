import express = require('express');
import { Request, Response, NextFunction } from 'express';
import { graphqlserver } from './graphql';

const app: express.Application = express();

import { scientificComunitiesList } from './menu/menuMaker';

app.get('/links', function(req: Request, res: Response, next: NextFunction) {
	res.header('Access-Control-Allow-Origin', '*');
	scientificComunitiesList()
		.then(response => {
			// console.log(response);
			res.json(response);
		})
		.catch(err => {
			res.json(err);
		});
});

// add graphql server to express
graphqlserver.applyMiddleware({ app });

app.listen(3030, function() {
	console.log('Example app listening on port 3030!');
});
