

var nodemailer = require('nodemailer')

var remetente = nodemailer.createTransport({

    host: 'smtp.live.com',
    
    service: 'smtp.live.com',
    
    port: 465 ,
    
    secure: true,
    
    auth:{
    
    user: 'email@hotmail.com',
    
    pass: 'pro3600' }
    
    });


    var emailASerEnviado = {

        from: 'd.x.r.doug@hotmail.com',
        
        to: 'douglasrodrigues77@live.com',
        
        subject: 'Enviando Email com Node.js',
        
        text: 'Teste em node.js',
        
        };


