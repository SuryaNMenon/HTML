$('#addTask').click(function(e){
    let task = $('#taskInput').val();
    $('ul').append(`<li>${task}<button class="X">X</button></li>`);
    $('#taskInput').val("");
    $(".X").click(function(e)
    {
        $(e.target.parentElement).detach();
    });
    $('li').click(function(){
        $(this).css('background-color', 'lightgreen');
        $(this).css('text-decoration', 'line-through');
    })
});

$('li').click(function(){
    $(this).css('background-color', 'lightgreen');
    $(this).css('text-decoration', 'line-through');
});
