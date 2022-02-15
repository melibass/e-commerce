module.exports=function(sequelize,dataTypes){
    const alias='Color';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        color:{
            type:dataTypes.STRING
        }
    }
    
    const config={
        tableName:'colors',
        timestamps:false,
        underscored: true,
    }
    const Color=sequelize.define(alias,cols,config);
    Color.associate=function(models) {
        Color.belongsToMany(models.Product, {
            as:"products",
            through:"product_color",
            foreignKey:"product_id",
            otherKey:"color_id",
            timestamps:false
            
        })
    }
    return Color;
}