define(function() {
    'use strict';
    
    return {
        validate: function(value) {
            //just making sure it did. 
            console.log(value);
            return (/^[0-9]{11}$/g).test(value); 
        }
    };
});