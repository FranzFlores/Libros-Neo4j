$(document).ready(function () {
    bookList();
});

function bookList() {
    var url = "http://localhost:3000/api/bookList";
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function (data, textStatus, jqXHR) {
            var html = "";
            $.each(data, function (i, item) {
                $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    url: "http://localhost:3000/api/getAuthorBook/" + item.idBook,
                    async: false,
                    success: function (data1, textStatus, jqXHR) {
                        html += "<tr>";
                        html += "<td>" + (i + 1) + "</td>";
                        html += "<td>" + data1.message.toString() + "</td>";
                        html += "<td>" + item.title + "</td>";
                        html += "<td>" + item.pages + "</td>";
                        html += "<td>" + item.description + "</td>";
                        html += "<td><button type= 'button' data-toggle='modal' data-idBook='" + item.idBook + "'  data-target='#editBook' class='btn btn-primary optionBook'>Editar</button>";
                        html += "<button type= 'button' data-toggle='modal' data-idBook='" + item.idBook + "' data-target='#deleteBook' class='btn btn-danger optionBook'>Eliminar</button></td>";
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });
            });
            $('#tableBook').html(html);
            //Presentacion del libro en el modal
            $('.optionBook').click(function (e) {
                var idBook = $(this).attr('data-idBook');
                var url = "http://localhost:3000/api/getBook/" + idBook;
                $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    url: url,
                    success: function (data, textStatus, jqXHR) {
                        $("#titleEdit").val(data.title);
                        $("#pagesEdit").val(data.pages);
                        $("#descriptionEdit").val(data.description);
                        $("#idBookEdit").val(data.idBook);
                        $("#idBookDelete").val(data.idBook);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });
                e.preventDefault();
            });

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function getAuthorName(idBook) {
    var url = "http://localhost:3000/api/getAuthorBook/" + idBook;
    var name = $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function (data, textStatus, jqXHR) {
            var message = data.message.toString();
            if (!message == 0) {
                $('.authorName').text(message);
                // $('.authorName').text("No tiene autor");
            } else {
                //$('.authorName').text(message);
                $('.authorName').text("No tiene autor");
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
    return name.toString().responseText;
}



