$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#texto_tarefa').val();
        const novoItem = $(`<li id="minha_tarefa" style="display: none">${novaTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#texto_tarefa').val('');
    })
    $('form').on('click', 'li', function(){
        $(this).css("text-decoration", "line-through");
    })
})
