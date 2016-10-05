function openBlock (id) {
  var block = document.getElementById(id.split('menu_item_')[1]);
  var blocks = document.getElementById("main_content").getElementsByTagName("div");
  var link = document.getElementById(id).parentElement
  var activeLink = document.getElementsByClassName('active')[0]

  for (var y = 0; y < blocks.length; y++) {
    blocks[y].style.display = "none";
  }
  block.style.display = "block";

  activeLink.classList.remove('active')
  link.classList.add('active')
}

function $openBlock(id) {
  var block = $('#' + id.split('menu_item_')[1])
  var blocks = $('#main_content > div')
  var link = $('#' + id).parent()
  var activeLink = $('.active')

  blocks.hide()
  block.show()
  activeLink.toggleClass('active')
  link.toggleClass('active')
}

$('#menu > li > a')
  .on('mouseover', function() { $(this).toggleClass('hover') })
  .on('mouseleave', function() { $(this).toggleClass('hover') })
  .on('click', function() { $openBlock($(this).attr('id')) })
