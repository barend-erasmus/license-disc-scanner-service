// Imports
import { ILicenseDiscRepository } from './../license-disc';

// Imports models
import { LicenseDisc } from './../../entities/license-disc';

export class LicenseDiscRepository implements ILicenseDiscRepository {

    private licenseDiscs: LicenseDisc[] = [];

    public async create(licenseDisc: LicenseDisc): Promise<boolean> {

        this.licenseDiscs.push(licenseDisc);

        return true;
    }

    public async find(hash: string): Promise<LicenseDisc> {
        return this.licenseDiscs.find((x) => x.hash === hash);
    }
}
