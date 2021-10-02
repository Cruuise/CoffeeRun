(function (window) {
    'use strict';
    var FORM_SELECTOR_PAYMENT = '[payment="form"]';
    var App = window.App;
    var FormHandler = App.FormHandler;
    var title = "";
    var name = "";


    var formHandler = new FormHandler(FORM_SELECTOR_PAYMENT);

    formHandler.addPaymentSubmitHandler(function (data) {
        title = $("input[type='radio'][name='title']:checked").val();
        name = document.getElementById('name').value;
    });

    document.getElementById("fill_in").innerHTML += title;

    console.log(formHandler)
    console.log(title)
    console.log(name)
})(window);