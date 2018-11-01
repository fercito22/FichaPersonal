import Route from '@ember/routing/route';
//import hasEmberVersion from 'ember-test-helpers/has-ember-version';

import {inject} from '@ember/service';

export default Route.extend({
    valuesService: inject("values"),
    //servicio1: inject("comunicacion"),
    servicio2: inject("comunicacion"),
    servicio3: inject("contacto"),


//     model(){
//     var _this = this;
//    // var resultado = {};
//    // resultado.dataset1 = [{Nombres:"test1", ApellidoPaterno:"materno", ApellidoMaterno:"ApelñlidoPAterno"}];

//     //return resultado;
//     var valuesService = this.get("valuesService");
//     return valuesService.callValues().then(resultado=>{
//         resultado.data2 = _this.get("recursos");
//         console.log(resultado);
//         return resultado
//     })
//     .catch(error=>{
//         return [];
//     });
// },
   
    model(){
             
        var valuesService = this.get("valuesService");
        var servicio2 = this.get("servicio2");
        var servicio3 = this.get("servicio3");
        var resultTotal = {};

        // resultTotal = valuesService.callValues().then(resultado=>{
        //     resultado.data2 = _this.get("recursos");            
        //     resultTotal = resultado
        // })
        // console.log(resultado);
        // // resultTotal.resultA = valuesService.callValues();
        // // resultTotal.resultB = valuesService.getComunicacion();
        // return resultTotal;

        // resultTotal.resultA = valuesService.callValues();
        //         console.log(resultTotal);
        //         return resultTotal;


        return valuesService.callValues()
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
        //controller.set('webapidata',model);
        controller.set('webapidata',model.resultA);
        controller.set('webapidata2',model.resultB);
        controller.set('webapidata3',model.resultC);
    }
    
});



// model(){
             
//     var valuesService = this.get("valuesService");
//     var servicio2 = this.get("servicio2");
//     var resultTotal = {};
//     return valuesService.callValues()
//             .then(resultado=>{
//                 return servicio2.getComunicacion()
//                     .then((resultado2)=>{
//                         resultTotal.resultA= resultado;
//                         resultTotal.resultB= resultado2;  
//                         console.log(resultTotal.resultB)                          ;
//                         return resultTotal;
//                 })
//             })
//     .catch(error=>{
//         return [];
//     });
// },


// import Component from '@ember/component';
// import { computed } from '@ember/object';
// import { getOwner } from '@ember/application';

// export default Component.extend({
//   //will load the service in file /app/services/shopping-cart.js
//   cart: computed(function() {
//     return getOwner(this).lookup('service:shopping-cart');
//   })
// });