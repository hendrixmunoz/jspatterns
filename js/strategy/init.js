define(function(require) {
    
    'use strict'; 
    
    return {
        init: function() {
            var Strategy = require('strategy/strategy'); 
            var telValidator = require('strategy/telValidator'); 
            var emailValidator = require('strategy/emailValidator'); 
            var validator; 
            
            validator = new Strategy(); 
            
            console.log( validator.selectValidator(telValidator).validate(012345678901) ); 
            console.log( validator.selectValidator(emailValidator).validate('test') );
            
        }
    };
})