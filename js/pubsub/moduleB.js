define(function(require) {
    'use strict'; 
    
    var subsub = require('pubsub/pubsub'); 
    
    return {
        publishEvent: function() {
            var data = {
                something: 'some data'
            }; 
            
            subsub.publisher('atopic', data); 
        }
        
    }
})