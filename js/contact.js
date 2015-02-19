var ContactPreview = (function(){

  var template = JST["contact-preview"];

  function ContactPreview(data) {
    this.data = data;
  }

  ContactPreview.prototype = {

    render: function() {
      return $( template(this.data) );
    }

  }

  return ContactPreview;

})();

var ContactList = (function() {

  function ContactList(data) {
    this.data = data;
  }

  ContactList.prototype = {

    render: function() {
      var $el = $("<div />");
      _.each(this.data, function(contact) {
        var preview = new ContactPreview(contact);
        $el.append( preview.render() );
      });
      return $el;
    }

  }

  return ContactList;

})();
