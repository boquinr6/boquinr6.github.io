$('div.more').hide()
$('a.showmemore').click(function(){
$(this).next('div').slideToggle()
})
$('a.showmeless').click(function(){
$(this).previous('div').slideToggle()
})