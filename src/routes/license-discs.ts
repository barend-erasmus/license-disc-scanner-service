// Imports
import * as express from 'express';
import { config } from './../config';

// Imports repositories
import { LicenseDiscRepository } from './../repositories/sequelize/license-disc';

// Imports services
import { LicenseDiscService } from './../services/license-disc';

// Imports models
import { LicenseDisc } from './../entities/license-disc';

export class LicenseDiscsRouter {

    public static async create(req: express.Request, res: express.Response) {
        console.log(req.body);
        // const licenseDisc: LicenseDisc = await LicenseDiscsRouter.getLicenseDiscService().create(
        //     req.body.a,
        //     req.body.b,
        //     req.body.c,
        //     req.body.controlNumber,
        //     req.body.controlNumber,
        //     req.body.d,
        //     req.body.deviceId,
        //     req.body.engineNumber,
        //     req.body.expiryDate,
        //     req.body.hash,
        //     req.body.make,
        //     req.body.model,
        //     req.body.registrationNumber,
        //     req.body.registerNumber,
        //     req.body.timestamp,
        //     req.body.type,
        //     req.body.vinNumber   
        // );

        res.json('OK');
    }

    protected static getLicenseDiscService(): LicenseDiscService {

        const licenseDiscRepository: LicenseDiscRepository = new LicenseDiscRepository(config.database.host, config.database.username, config.database.password);

        const licenseDiscService: LicenseDiscService = new LicenseDiscService(licenseDiscRepository);

        return licenseDiscService;
    }
}
