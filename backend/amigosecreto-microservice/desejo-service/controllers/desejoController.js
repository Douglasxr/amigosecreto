const DesejoRepository = require('../repositories/desejoRepository');

module.exports = {
    async create (request,response) {
        try {
            let {_id} = await DesejoRepository.create(request.body);
            return response.json({
            "mensagem" : "Lista de desejo inserida com sucesso!",
            "status" : 200,
            "idDesejo" : _id    
            });
        }
        catch (err) {
            return response.json ({
                "mensagem" : "Erro" + err,
                "status" : 500,
                "idDesejo" : null
            });
    }   
    },



        async edit (request,response) {
            try {
            let Desejo = await DesejoRepository.edit (request.body);
            return response.json({
            "mensagem" : "Desejo alterado com sucesso!",
            "status" : 200,
            "idDesejo" :Desejo    
            });
        }
        catch (err) {
            return response.json ({
                "mensagem" : "Erro" + err,
                "status" : 500,
                "idDesejo" : null
            });
    }   
    },

    async delete (request,response) {
        let {id} = request.params;
        const Desejo = await DesejoRepository.delete(id);
        return response.json ({
            "mensagem" : "Desejo removido com sucesso!",
            "status" : 200
        });
    },

    async getById (request,response) {
        let {id} = request.params;
        let Desejo = await DesejoRepository.getByid(id);

        if (Desejo ===null)  {
            response.status(404);
            return response.json ({
                "mensagem" : "Desejo não encontrado!",
                "status" : 404,
                "desejo" :Desejo
            });
        }
        return response.json ({
            "mensagem" : "Desejo encontrado com sucesso!",
            "status" : 200,
            "desejo" :Desejo
        });

    }

}





    
