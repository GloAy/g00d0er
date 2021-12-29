"use strict";
export const { Model } = require("sequelize");

// These are all the attributes in the User model
interface DonationAttributes {
  id: number;
  userid: number;
  amount: number;
  campaignId: number;
  date: Date; 
  
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Donation extends Model<DonationAttributes>
  implements DonationAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    userid!: number;
    amount!: number;
    campaignId!: number;
    date: Date; 
  
    
    static associate(models: any) {
      // define association here
      this.belongsTo(models.Campaign, { foreignKey: "campaignId" });
    }
  }
  Donation.init(
    {
        id!: DataTypes.INTEGER,
        userid!: DataTypes.INTEGER,
        amount!: DataTypes.DECIMAL,
        campaignId!: DataTypes.INTEGER,
        date: DataTypes.DATE
    },
    {
      sequelize,
      tableName: "donations",
      modelName: "Donation",
    }
  );
  return Donation;
};
