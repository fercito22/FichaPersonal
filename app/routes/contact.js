import Route from '@ember/routing/route';

import {inject} from '@ember/service';

export default Route.extend({
    valuesService: inject("comunicacion"),
    model(){
        var _this = this;
       // var resultado = {};
       // resultado.dataset1 = [{Nombres:"test1", ApellidoPaterno:"materno", ApellidoMaterno:"ApelñlidoPAterno"}];

        //return resultado;
        var valuesService = this.get("valuesService");
        return valuesService.getComunicacion().then(resultado=>{
            resultado.data2 = _this.get("recursos");
            return resultado
        })
        .catch(error=>{
            return [];
        });
    },
    setupController(controller , model ){
        controller.set("webapidata3",model);
    }
});

