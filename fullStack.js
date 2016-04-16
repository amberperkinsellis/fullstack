if (Meteor.isClient) {
  // counter starts at 0
Template.RiriInput.events({
  'submit .comments'(event){
    event.preventDefault();
              const form =event.target;
              const textValue= form.text.value;
                    console.log ("the value of target is...", form);
                    console.log("the value of textValue is...", textValue);
              RiriComments.insert ({
               textValue,
                createdAt: new Date(),
              });
             form.text.value ='Work Work Work Work Work'; }
                          });

};

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
