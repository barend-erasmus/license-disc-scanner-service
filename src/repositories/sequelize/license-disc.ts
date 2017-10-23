// Imports
import { ILicenseDiscRepository } from './../license-disc';
import { BaseRepository } from './base';

// Imports models
import { LicenseDisc } from './../../entities/license-disc';

export class LicenseDiscRepository extends BaseRepository implements ILicenseDiscRepository {

    constructor(host: string, username: string, password: string) {
        super(host, username, password);
    }

    public async create(licenseDisc: LicenseDisc): Promise<boolean> {

        await BaseRepository.models.LicenseDisc.create({
            a: licenseDisc.a,
            b: licenseDisc.b,
            c: licenseDisc.c,
            color: licenseDisc.color,
            controlNumber: licenseDisc.controlNumber,
            d: licenseDisc.d,
            deviceId: licenseDisc.deviceId,
            engineNumber: licenseDisc.engineNumber,
            expiryDate: licenseDisc.expiryDate,
            hash: licenseDisc.hash,
            make: licenseDisc.make,
            model: licenseDisc.model,
            regisrationNumber: licenseDisc.regisrationNumber,
            registerNumber: licenseDisc.registerNumber,
            timestamp: licenseDisc.timestamp,
            type: licenseDisc.type,
            vinNumber: licenseDisc.vinNumber,
        });

        return true;
    }

    public async find(hash: string): Promise<LicenseDisc> {
        const licenseDisc: any = await BaseRepository.models.LicenseDisc.find({
            where: {
                hash
            },
        });

        if (!licenseDisc) {
            return null;
        }

        return new LicenseDisc(
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        );
    }
}
