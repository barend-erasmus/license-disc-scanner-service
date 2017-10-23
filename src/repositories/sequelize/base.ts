// Imports
import * as Sequelize from 'sequelize';

export class BaseRepository {
    protected static sequelize: Sequelize.Sequelize = null;
    protected static models: {
        LicenseDisc: Sequelize.Model<{}, {}>,
    } = null;

    private static defineModels(): void {
        const LicenseDisc = BaseRepository.sequelize.define('licenseDisc', {
            a: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            b: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            c: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            color: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            controlNumber: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            d: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            deviceId: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            engineNumber: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            expiryDate: {
                allowNull: false,
                type: Sequelize.NUMBER,
            },
            hash: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            make: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            model: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            regisrationNumber: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            registerNumber: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            timestamp: {
                allowNull: false,
                type: Sequelize.NUMBER,
            },
            type: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            vinNumber: {
                allowNull: false,
                type: Sequelize.STRING,
            },
        });

        this.models = {
            LicenseDisc
        };
    }

    constructor(private host: string, private username: string, private password: string) {

        if (!BaseRepository.sequelize) {
            BaseRepository.sequelize = new Sequelize('license-disc-scanner', username, password, {
                dialect: 'postgres',
                host,
                logging: false,
                pool: {
                    idle: 10000,
                    max: 5,
                    min: 0,
                },
            });

            BaseRepository.defineModels();
        }
    }

    public sync(): Promise<void> {
        return new Promise((resolve, reject) => {
            BaseRepository.sequelize.sync({ force: true }).then(() => {
                resolve();
            });
        });
    }

    public close(): void {
        BaseRepository.sequelize.close();
    }
}
