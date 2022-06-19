const Sorteio = require('../models/sorteio');

module.exports ={
    async create (sorteio) {
        try{
            let {idGrupo,participantes} = sorteio;
            const retornSorteio = await Sorteio.create ({
                idGrupo, participantes
            });
            console.log(retornSorteio);
            return retornSorteio;
        }
        catch (err) {
            console.log ("Erro" + err);
        } 
        return null;
    }
}