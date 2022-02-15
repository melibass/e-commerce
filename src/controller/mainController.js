const path = require('path');
const fs = require('fs');
const db = require ('../database/models')


let controller = {
    home: (req,res) => {
       db.Category.findOne( 
        {where: {id:2}, 
        include: [{association:"products"}]}) 
    .then(function(destacados){
        res.render('home',{destacados:destacados.products})
    })
    },

    about: (req,res) => {
        res.render('about');
    }
}

module.exports = controller;
