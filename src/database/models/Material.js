module.exports=function(sequelize,dataTypes){
    const alias='Material';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        material:{
            type:dataTypes.STRING
        }
    }
    
    const config={
        tableName:'materials',
        timestamps:false,
        underscored: true,
    }
    const Material=sequelize.define(alias,cols,config);
    Material.associate=function(models) {
        Material.hasMany(models.Product, {
            as: "products",
            foreignKey: "material_id"
        })
    }
    return Material;
}