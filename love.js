if (Meteor.isClient) {
Session.setDefault ('hearts_sv', 0);
 Template.commonInput.helpers ({hearts: function () {
    return Session.get ('hearts_sv'); }
  });

 Template.commonInput.events ({
   'submit .comments'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    BernieComments.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
   'click button': function () {
   Session.set ('hearts_sv', Session.get('hearts_sv') + 1);
   }
   });
  }


