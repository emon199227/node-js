const {fineModel} = require('../model');
const { dbHelper } = require("../helper");

module.exports = {
    createFine: async (body, next) => {
        try {
            const fine = await dbHelper.create(fineModel, body, next);
            return fine;
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    },
    findAllFineBooks: async (userId, next) => {
        try {
            return await dbHelper.findAll(fineModel, { userId, active: true }, { amount:1 }, next);
            
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    },
    findBookFineById: async (userId,  next) => {
        try {
            return await dbHelper.findOne(fineModel, { userId }, {}, next);
        } catch (e) {
            console.log(e.toString());
            next(e);
        }
    }
}