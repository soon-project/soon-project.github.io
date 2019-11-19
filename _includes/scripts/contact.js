(function() {
  console.log("script loaded!");

  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  };

  window.Lazyload.js(window.TEXT_VARIABLES.sources.jquery, function() {
    $(document).ready(function() {
      console.log("document ready!");

      $('a[href="#submit"]').click(function(){
        console.log('Submit form:');

        var c_name = $("#full-name").val();
        var c_email = $("#email-address").val();
        var c_subject = $("#subject").val();
        var c_message = $("#message").val();
        var c_gotcha = $("#c_gotcha").val();

        var timeIntervalFadeOut = 5000;
        var errorMessage = $('.ajax-response-error');
        var responseMessage = $('.ajax-response-thanks');
        var btnSend = $('#contact-form div a');

        if (( c_name == "" || c_email == "" || c_message == "" ) || (!isValidEmailAddress(c_email) )) {
          console.log('Error in field!');
          errorMessage.fadeIn(500);
          errorMessage.html('<i class="fas fa-exclamation-triangle"></i> Check all fields.');

          setInterval(function () {errorMessage.fadeOut(1000);}, timeIntervalFadeOut);
        } else {
          var base64_email = 'bWVxcWtheWQ=';
          var base_url = 'https://formspree.io/';
          var action = base_url + atob(base64_email);
          var v_message = 'Object: ' + c_subject + '\n\n' + c_message;

          $.ajax({
            url: action,
            method: 'POST',
            data: {
              name: c_name,
              email: c_email,
              message: v_message,
              _gotcha: c_gotcha
            },
            dataType: "json",
            beforeSend: function() {
              console.log('Waiting!');

              btnSend.empty();
              btnSend.append('<i class="fas fa-cog fa-spin"></i> Wait...');
            },
            success: function(data) {
              console.log('Success!');

              responseMessage.html('Thanks for contacting us!');
              responseMessage.fadeIn(500);

              btnSend.empty();
              btnSend.append('<i class="fas fa-paper-plane"></i>Send message');

              setInterval(function () {responseMessage.fadeOut(1000);}, timeIntervalFadeOut);

              $('#full-name').val("");
              $('#email-address').val("");
              $('#subject').val("");
              $('#message').val("");
            },
            error: function(err) {
              console.log('Error!');
              errorMessage.html('Sorry, something is wrong');
              errorMessage.fadeIn(500);

              btnSend.empty();
              btnSend.append('<i class="fas fa-retweet"></i> Try again.');

              setInterval(function () {errorMessage.fadeOut(1000);}, timeIntervalFadeOut);
            }
          });
        }
      });
    });
  });
})();
