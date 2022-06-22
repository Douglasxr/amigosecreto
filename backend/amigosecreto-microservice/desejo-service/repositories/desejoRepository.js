const Desejo = require('../models/desejo');

module.exports ={
    async create (desejo) {
        try{
            let {nome,desejo1,desejo2,desejo3} = desejo;
            const retornDesejo = await Desejo.create ({
                nome,cpf,email,senha
            });
            return retornDesejo;
        }
        catch (err) {
            console.log ("Erro" + err);
        } 
        return null;
    },
    async edit (desejo) {
        try {
            let {nome,desejo1,desejo2,desejo3} = desejo;
            const retornDesejo = await Desejo.updateOne (
             {_id : _id}, {$set : {nome,desejo1,desejo2,desejo3}}   );
             return retornDesejo;
    }
    catch (err) {
        console.log ("Erro" + err);
    } return null;
} ,
        async getByid (_id) {
            try {
                const retornDesejo = await Desejo.find ({_id});
                return retornDesejo;
            }
            catch (err) {
                console.log("Erro" + err);
            } return null;
        },

        async delete (_id) {
            try{
                const retornDesejo = await Desejo.deleteOne ({_id : _id}) ;
                return retornDesejo;
            }
            catch (err) {
                console.log("Erro" + err);
            } return null;
        }

}