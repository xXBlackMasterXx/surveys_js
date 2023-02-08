$("input.custom-text").keyup(function () {
  var test = /\D/;
  if (test.test($(this).val())) {
    $(this).val($(this).val().replace(/\D/g, ""));
  }
});
