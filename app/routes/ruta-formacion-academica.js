


import Route from '@ember/routing/route';
//import hasEmberVersion from 'ember-test-helpers/has-ember-version';

import {inject} from '@ember/service';

export default Route.extend({
    valuesService: inject("servicio-formacion-academica"),
    //servicio1: inject("comunicacion"),
    servicio2: inject("comunicacion"),
    servicio3: inject("contacto"),


    model(){
             
        var valuesService = this.get("valuesService");
        var servicio2 = this.get("servicio2");
        var servicio3 = this.get("servicio3");
        var resultTotal = {};


        return valuesService.getFormacion()
                .then(resultado=>{
                    return servicio2.getComunicacion()
                        .then(resultado2=>{
                            return servicio3.getContacto()
                                .then((resultado3)=>{
                                    resultTotal.resultA= resultado;
                                    resultTotal.resultB= resultado2;  
                                    resultTotal.resultC= resultado3;  
                                    //console.log(resultTotal);
                                    return resultTotal;
                            })
                        })
                })
        .catch(error=>{
            return [];
        });
    },
    
    
    // asignamos el modelo al controlador
    setupController(controller , model ){   
        controller.set('webapidataf2',model.resultA);        
    }
    
});

