module.exports = function(sequelize,dataTypes){
    const alias='Orders';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        total:{
            type:dataTypes.INTEGER
        },
    
        order_id: { // MB
            type:dataTypes.INTEGER,
        }
    };
    const config={
        tableName:'orders',
        timestamps:false,
        underscored: true,
    }
    const Orders=sequelize.define(alias,cols,config);
    return Orders;
}