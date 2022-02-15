// Modelo para sequelize

module.exports = function(sequelize,dataTypes){
    const alias='User';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        first_name:{
            type:dataTypes.STRING
        },
        
        last_name:{
            type:dataTypes.STRING
        },
        email:{
            type:dataTypes.STRING
        },
        dob: { 
            type:dataTypes.DATE,
        },
        password: {
            type:dataTypes.STRING,
        },
        rol: {
            type:dataTypes.STRING,
        },
        avatar: {
            type:dataTypes.INTEGER, // no es string? si recibe nombre del archivo? - CHECKEAR img en modelo de productos
        },
        country_id: {
            type:dataTypes.INTEGER, //al final x ser FK?
        }
    };
    const config={
        tableName:'users',
        timestamps:false,
        underscored: true
    }
    const User=sequelize.define(alias,cols,config);
    User.associate=function(models) {
        User.belongsTo(models.Country, {
            as: "countries",
            foreignKey: "country_id"
            }),
            User.belongsToMany(models.Product, {
                as:"favorites",
                through:"Favoritos",
                foreignKey:"user_id",
                otherKey:"product_id",
                timestamps:false
            }),
            User.belongsToMany(models.Product, {
                as:"cart",
                through:"Cart",
                foreignKey:"user_id",
                otherKey:"product_id",
                timestamps:false
            })
            }
        
    return User;
}