
//import Ember from 'ember'
import EmberObject from '@ember/object';
export function initialize( application ) {

  //let data = "test";
  //var data = {name: "test"}

  var data = EmberObject.extend({nombre:"test"});

  application.register('recursos:res', data);
   application.inject('route', 'res', 'recursos:res');
   application.inject('controller', 'res', 'recursos:res');
   application.inject('component', 'res', 'recursos:res');
}

export default {
  name:"res",
  initialize: initialize
};
