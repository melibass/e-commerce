module.exports = function(sequelize,dataTypes){
    const alias='Sale';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        user_id:{
            type:dataTypes.INTEGER
        },
        order_id:{
            type:dataTypes.INTEGER
        },
       
        
    };
    const config={
        tableName:'sales',
        timestamps:false,
        underscored: true,
    }
    const Sale=sequelize.define(alias,cols,config);
    return Sale;
}