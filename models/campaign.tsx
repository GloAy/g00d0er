"use strict";
export const { Model } = require("sequelize");

interface CampaignAttributes{
  id: number;
  name: string;
  description: string;
  image: string;
  goalAmount: number;
  currentAmount: number;
  published: boolean,
  date: Date,
  owner: string,
  email: string,
  stripeId: number,
  donation: number
    
}

module.exports = (sequelize:any, DataTypes: any) => {
  class Campaign extends Model<CampaignAttributes> implements CampaignAttributes {
    id!: number;
    name!: string;
    description!: string;
    image!: string;
    goalAmount!: number;
    currentAmount!: number;
    published: boolean;
    date: Date;
    owner: string;
    email!: string;
    stripeId: number;
    donation!: number


    static associate(models: any) {
      this.hasMany(models.Donation, {foreignKey: 'donationId'})
    }
  }
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

  Campaign.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    goalAmount: DataTypes.DECIMAL,
    currentAmount: DataTypes.DECIMAL,
    published: DataTypes.BOOLEAN,
    date: DataTypes.DATE,
    owner: DataTypes.STRING,
    email: DataTypes.STRING,
    stripeId: DataTypes.INTEGER,
    donation: DataTypes.DECIMAL
  }, {
    sequelize,
    tableName: 'campaigns',
    modelName: 'Campaign',
  });
  return Campaign;
};