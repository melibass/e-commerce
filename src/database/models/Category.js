module.exports=function(sequelize,dataTypes){
    const alias='Category';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        category:{
            type:dataTypes.STRING
        }
    }
    
    const config={
        tableName:'categories',
        timestamps:false,
        underscored: true,
    }
    const Category=sequelize.define(alias,cols,config);
    Category.associate=function(models) {
        Category.belongsToMany(models.Product, {
            as:"products",
            through:"ProductCategory",
            foreignKey:"category_id",
            otherKey:"product_id",
            timestamps:false
        })
    }
    return Category;
}