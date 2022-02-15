module.exports=function(sequelize,dataTypes){
    const alias='Cart';

    const cols={
        idcart:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        product_id:{
            type:dataTypes.INTEGER
        },
        user_id:{
            type:dataTypes.INTEGER
        }
    }
    
    const config={
        tableName:'cart',
        timestamps:false,
        underscored: true,
    }
    const cart=sequelize.define(alias,cols,config);
    return cart;
}