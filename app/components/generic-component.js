import Component from '@ember/component';

export default Component.extend({
    actions:{
        clicked(){
            //alert("Component");
            alert(this.get("mensaje"));
        }
    }
});
