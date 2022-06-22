

var nodemailer = require('nodemailer')

var remetente = nodemailer.createTransport({

    host: 'smtp.live.com',
    
    service: 'smtp.live.com',
    
    port: 465 ,
    
    secure: true,
    
    auth:{
    
    user: 'email@hotmail.com',
    
    pass: '1234' }
    
    });


    var emailASerEnviado = {

        from: 'douglas@hotmail.com',
        
        to: 'gouglas@live.com',
        
        subject: 'Enviando Email com Node.js',
        
        text: 'Teste em node.js',
        
        };


