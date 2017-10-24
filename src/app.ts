// Imports
import * as express from 'express';
import * as yargs from 'yargs';
import { config } from './config';

// Import Repositories
import { BaseRepository } from './repositories/sequelize/base';
import { LicenseDiscRepository } from './repositories/sequelize/license-disc';

// Imports middleware
import * as bodyParser from 'body-parser';

// Imports routes
import { LicenseDiscsRouter } from './routes/license-discs';

const licenseDiscRepository = new LicenseDiscRepository(config.database.host, config.database.username, config.database.password);

const argv = yargs.argv;
const app = express();

// Configures body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use (function(req, res, next) {
//     var data='';
//     req.setEncoding('utf8');
//     req.on('data', function(chunk) {
//        data += chunk;
//     });

//     req.on('end', function() {
//         req.body = data;
//         next();
//     });
// });

app.post('/licenseDiscs/create', LicenseDiscsRouter.create);

app.listen(argv.port || 3000, () => {
    console.log(`listening on port ${argv.port || 3000}`);
});

