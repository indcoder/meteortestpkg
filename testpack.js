// Write your package code here!
Testpack = {
  log : function(msg){
    console.log(msg);
    Meteor.call('serverlog', msg);
  }
};
