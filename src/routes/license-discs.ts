// Imports
import * as express from 'express';
import * as moment from 'moment';
import { config } from './../config';

// Imports repositories
import { LicenseDiscRepository } from './../repositories/sequelize/license-disc';

// Imports services
import { LicenseDiscService } from './../services/license-disc';

// Imports models
import { LicenseDisc } from './../entities/license-disc';

export class LicenseDiscsRouter {

    public static async create(req: express.Request, res: express.Response) {

        let failedCount = 0;

        for (const item of req.body) {

            try {
                const licenseDisc: LicenseDisc = await LicenseDiscsRouter.getLicenseDiscService().create(
                    item.a,
                    item.b,
                    item.c,
                    item.color,
                    item.controlNumber,
                    item.d,
                    item.deviceId,
                    item.engineNumber,
                    moment(item.expiryDate).toDate().getTime(),
                    item.hash,
                    item.make,
                    item.model,
                    item.registrationNumber,
                    item.registerNumber,
                    moment(item.timestamp).toDate().getTime(),
                    item.type,
                    item.vinNumber,
                );

            } catch (err) {
                failedCount++;
            }

        }

        res.json({
            failedCount,
        });
    }

    public static async listHashes(req: express.Request, res: express.Response) {

        const result: string[] = await LicenseDiscsRouter.getLicenseDiscService().listHashes();

        res.json(result);
    }

    protected static getLicenseDiscService(): LicenseDiscService {

        const licenseDiscRepository: LicenseDiscRepository = new LicenseDiscRepository(config.database.host, config.database.username, config.database.password);

        const licenseDiscService: LicenseDiscService = new LicenseDiscService(licenseDiscRepository);

        return licenseDiscService;
    }
}
