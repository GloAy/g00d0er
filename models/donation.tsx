export const { Model } = require ('sequelize');

interface DonationAttributes{
  id: number;
  userId?: number;
  amount: number;
  campaignId: number,
  date: Date;
}


module.exports = (sequelize: any, DataTypes: any) => {
  class Donation extends Model <DonationAttributes> implements DonationAttributes{
    id!: number;
    userId!: number;
    amount!: number;
    campaignId!: number;
    date: Date;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Campaign,
        {foreignKey: "campaignId"});
    }
  };
  Donation.init({
    userId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    campaignId: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    tableName: 'donations',
    modelName: 'Donation',
  });
  return Donation;
};