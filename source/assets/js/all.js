$(function() {

  $('#read-more').click(function(){
    $('#more-text').slideDown();
    $(this).hide();
  });

  $('.gallery-item').hover(
    function(){
      $(this).children('.gallery-cover').fadeIn();
    },
    function(){
      $(this).children('.gallery-cover').fadeOut();
    }
  );

  $('.sns-list').find('li').hover(
    function(){
      $(this).animate({'font-size':'20px'});
    },
    function(){
      $(this).animate({'font-size':'14px'});
    }
  );

  $('#language-show').click(function(){
    $('#language-list').toggleClass('hide-list');
  });

  $('.step-list').click(function(){
    var index = $(this).index();
    $('.step-list').removeClass('active');
    $(this).addClass('active');
    $('.explain').removeClass('active');
    $('.explain').eq(index).addClass('active');
  });

  $('#contact-show').click(function(){
    $('#modal-contact').show();
  });

  $('#close-contact').click(function(){
    $('#modal-contact').hide();
  });

  $('#submit-btn').click(function(){
    $('#contact-form').html('<div class="thanks-msg">お問い合わせいただきありがとうございます。<br>内容が確認でき次第返信をさせていただきますので、<br>今しばらくお待ち下さい。</div>');
  });

  $('.carousel').carousel();


});
