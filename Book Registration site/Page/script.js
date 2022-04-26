$('#addBook').click(function(e){
    let bookName = $('#bookField').val();
    console.log(bookName);
    $('ul#bookList').append(
        `<li id="book"><img src="book.jpg" alt="Picture of ${bookName}"><br>Author's Name<br>Book Detail<button class="delete">X</button></li>`
        );
    $('#bookField').val('');

    $('li#book').mouseenter(function(e){
        $(this).css('background-color', 'lightgreen');
    });
    $('li#book').mouseleave(function(e){
        $(this).css('background-color', 'white');
    });

    $('.delete').click(function(e){
        $(e.target.parentElement).detach();
    });
});

$('li#book').mouseenter(function(e){
    $(this).css('background-color', 'lightgreen');
});
$('li#book').mouseleave(function(e){
    $(this).css('background-color', 'white');
});
$('.delete').click(function(e){
    $(e.target.parentElement).detach();
});