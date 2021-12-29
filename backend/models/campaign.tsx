"use strict";
export const { Model } = require("sequelize");

// These are all the attributes in the User model
interface CampaignAttributes {
  id: number;
  name: string;
  description: string;
  image: string;
  goalAmount: number;
  currentAmount: number;
  published: boolean;
  date: Date;
  owner: string;
  email: string;
  stripeId: string;
  donationId: number;
  
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Campaign extends Model<CampaignAttributes>
  implements CampaignAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
     stripeId!: string;
     donationId!: number; 
    
    static associate(models: any) {
      // define association here
      this.hasMany(models.Donation, { foreignKey: "donationId" });
    }
  }
  Campaign.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.TEXT,
      goalAmount: DataTypes.DECIMAL,
      currentAmount: DataTypes.DECIMAL,
      published: DataTypes.BOOLEAN,
      date: DataTypes.DATE,
      owner: DataTypes.STRING,
      email: DataTypes.STRING,
      stripeId: DataTypes.STRING,
      donationId: DataTypes.DECIMAL
    },
    {
      sequelize,
      tableName: "campaigns",
      modelName: "Campaign",
    }
  );
  return Campaign;
};
