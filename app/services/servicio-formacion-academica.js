import Service from '@ember/service';
import $ from 'jquery'
import RSVP from 'rsvp';

export default Service.extend({
    getFormacion: function(){
        return new RSVP.Promise(function(resolve, reject){
            var request = $.ajax({
                type: "GET",
                url: 'http://localhost:5803/api/GetFormacionAcademica/280',
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
