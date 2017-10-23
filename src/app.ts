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


const licenseDiscRepository = new LicenseDiscRepository(config.database.host, config.database.username, config.database.password);

const argv = yargs.argv;
const app = express();

// Configures body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(argv.port || 3000, () => {
    console.log(`listening on port ${argv.port || 3000}`);
});
