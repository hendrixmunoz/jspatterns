define(function(require) {
    'use strict'; 
    
    
    var pubSub = require('pubsub/pubsub');
    pubSub.subscribe('atopic', function(data) {
        console.log('atopic was published with data: ' + data); 
    }
}); 