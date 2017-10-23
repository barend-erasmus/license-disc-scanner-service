// Imports models
import { LicenseDisc } from './../entities/license-disc';

export interface ILicenseDiscRepository {

    create(licenseDisc: LicenseDisc): Promise<boolean>;

    find(hash: string): Promise<LicenseDisc>;
}
