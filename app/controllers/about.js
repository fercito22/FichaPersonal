import Controller from '@ember/controller';

export default Controller.extend({
    estado:'sin estado',
    test2:"original",
    texto2: "Hola",
    actions:{
        onclick(){
            alert('about');
            this.set("estado","aceptado");
            // leer el valor del estado
            var tmp = this.get("estado");
            this.set("test2" , tmp + "-copia");
        },

        launchConfirmDialog() {
            this.set('confirmShown', true);
          },
      
          submitConfirm() {
            // trigger action on parent component
            var tmp2 = this.get("estado");
            this.set('estado', tmp2 + "aceptado");
          },
      
          cancelConfirm() {
            var tmp3 = this.get("estado");
            this.set('texto2', tmp3 + "sin estado");
          },
          copiarTexto() {
            var tmp3 = this.get("texto2");
            this.set('texto2', tmp3 + "..");
          },

          sumarNumeros() {
            var tmp = this.get("calcular");
            var tmp2 = this.get("calcular2");
            var res = tmp + tmp2;
            var resul = parseInt(tmp2) + parseInt(tmp);
            this.set('resultado', resul + ".");
          }

    }
    
});
