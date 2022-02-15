module.exports = function(sequelize,dataTypes){
    const alias='OrderDetail';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        order_id:{
            type:dataTypes.INTEGER
        },
        
        price:{
            type:dataTypes.INTEGER
        },
        quantity:{
            type:dataTypes.INTEGER
        },
        product_id: { // esto es FK? lo puse al final x lo q dijo Uri.
            type:dataTypes.INTEGER,
        }
    };
    const config={
        tableName:'order_details',
        timestamps:false,
        underscored: true,
    }
    const OrderDetail=sequelize.define(alias,cols,config);
    return OrderDetail;
}