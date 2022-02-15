module.exports=function(sequelize,dataTypes){
    const alias='ProductColor';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        color_id:{
            type:dataTypes.INTEGER
        },
        product_id:{
            type:dataTypes.INTEGER
        }
    }
    
    const config={
        tableName:'product_color',
        timestamps:false,
        underscored: true,
    }
    const ProductColor=sequelize.define(alias,cols,config);
    return ProductColor;
}