$('div.more').hide()
$('a.showmemore').click(function(){
$(this).next('div').slideToggle()
})