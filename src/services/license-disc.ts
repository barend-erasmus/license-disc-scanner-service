// Imports
import { config } from './../config';

// Imports repositories
import { ILicenseDiscRepository } from './../repositories/license-disc';

// Imports models
import { LicenseDisc } from './../entities/license-disc';

export class LicenseDiscService {

    constructor(private licenseDiscRepository: ILicenseDiscRepository) {

    }

    public async find(hash: string): Promise<LicenseDisc> {
        return this.licenseDiscRepository.find(hash);
    }

    public async create(
        a: string,
        b: string,
        c: string,
        color: string,
        controlNumber: string,
        d: string,
        deviceId: string,
        engineNumber: string,
        expiryDate: number,
        hash: string,
        make: string,
        model: string,
        registrationNumber: string,
        registerNumber: string,
        timestamp: number,
        type: string,
        vinNumber: string,
    ): Promise<LicenseDisc> {

        let licenseDisc: LicenseDisc = await this.licenseDiscRepository.find(hash);

        if (!licenseDisc) {
            throw new Error("License Disc already exists.");
        }

        licenseDisc = new LicenseDisc(
            a, b, c, d, controlNumber, registrationNumber, registerNumber, type, make, model, color, vinNumber, engineNumber, expiryDate, hash, timestamp, deviceId);

        await this.licenseDiscRepository.create(licenseDisc);

        return licenseDisc;
    }
}
