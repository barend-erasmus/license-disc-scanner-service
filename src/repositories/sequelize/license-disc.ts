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
            registerNumber: licenseDisc.registerNumber,
            registrationNumber: licenseDisc.registrationNumber,
            timestamp: licenseDisc.timestamp,
            type: licenseDisc.type,
            vinNumber: licenseDisc.vinNumber,
        });

        return true;
    }

    public async find(hash: string): Promise<LicenseDisc> {
        const licenseDisc: any = await BaseRepository.models.LicenseDisc.find({
            where: {
                hash,
            },
        });

        if (!licenseDisc) {
            return null;
        }

        return new LicenseDisc(
            licenseDisc.a,
            licenseDisc.b,
            licenseDisc.c,
            licenseDisc.d,
            licenseDisc.controlNumber,
            licenseDisc.registrationNumber,
            licenseDisc.registerNumber,
            licenseDisc.type,
            licenseDisc.make,
            licenseDisc.model,
            licenseDisc.color,
            licenseDisc.vinNumber,
            licenseDisc.engineNumber,
            licenseDisc.expiryDate,
            licenseDisc.hash,
            licenseDisc.timestamp,
            licenseDisc.deviceId,
        );
    }
}
