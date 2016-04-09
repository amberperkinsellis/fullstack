if (Meteor.isClient) {
Session.setDefault ('hearts_sv', 0);
 Template.hello.helpers ({hearts: function () {
    return session.get ('hearts_sv'); }
  });

 Template.hello.events ({
   'click button': function () {
   Session.set ('hearts_sv', session.get('hearts_sv') + 1);
   }
   });
  }


