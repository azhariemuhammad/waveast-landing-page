$(".link").click(function () {
  console.log('masuk link')
  $("html, body").animate({
      scrollTop: $(".primary-footer").offset().top
  }, "slow");
});​

$("#how-to-nav").click(function() {
  console.log('masuk nav')
  $('html, body').animate({
      scrollTop: $(".wave-info").offset().top
  }, "slow");
});

$("#how-to").click(function() {
  console.log('masuk ho')
  $('html, body').animate({
      scrollTop: $(".wave-info").offset().top
  }, "slow");
});