module.exports=function(sequelize,dataTypes){
    const alias='Favoritos';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        user_id:{
            type:dataTypes.INTEGER
        },
        product_id:{
            type:dataTypes.INTEGER
        }
    }
    
    const config={
        tableName:'favorites',
        timestamps:false,
        underscored: true,
    }
    const Favoritos=sequelize.define(alias,cols,config);
    return Favoritos;
}