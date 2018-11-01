import Service from '@ember/service';

import $ from 'jquery'
import RSVP from 'rsvp';

export default Service.extend({
    callValues: function(){
        return new RSVP.Promise(function(resolve, reject){
            var request = $.ajax({
                type: "GET",
                //url: 'http://localhost:22650/api/ContactoEmergenciaService/280',
                url: 'http://localhost:5803/api/GetPerfil/280',
                contentType:'application/json',
            });

            request.done(function (response){
                resolve(response);
            });
            request.fail(function (response){
                reject(response);
            });
        });
    },
       
    
});
