$(document).ready(function () {
    loadCountries();
    authorList();
    bookList1();
});

function loadCountries() {
    var url = "https://restcountries.eu/rest/v2/all";
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function (data, textStatus, jqXHR) {
            var html = "";
            var html1 = "";
            $.each(data, function (i, item) {
                html += "<option value='" + item.name + "'>" + item.name + "</option>";
                html1 += "<option value='" + item.name + "'>" + item.name + "</option>";
            });
            $("#countries").html(html);
            $("#countriesEdit").html(html1);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function bookList1() {
    var url = "http://localhost:3000/api/bookList";
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function (data, textStatus, jqXHR) {
            
            var html = "";
            $.each(data, function (i, item) {
                html += "<option value='" + item.idBook + "'>" + item.title + "</option>";
            });
            $('#AuthorRelation').html(html);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}


function authorList() {
    var url = "http://localhost:3000/api/authorList";
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function (data, textStatus, jqXHR) {
            var html = "";
            var html1 = "";
            $.each(data, function (i, item) {
                html += "<tr>";
                html += "<td>" + (i + 1) + "</td>";
                html += "<td>" + item.name + "</td>";
                html += "<td>" + item.country + "</td>";
                html += "<td><button type= 'button' data-toggle='modal' data-idAuthor='" + item.idAuthor + "'  data-target='#editAuthor' class='btn btn-primary option'>Editar</button>";
                html += "<button type= 'button' data-toggle='modal' data-idAuthor='" + item.idAuthor + "' data-target='#deleteAuthor' class='btn btn-danger option'>Eliminar</button>";
                html += "<button type= 'button' data-toggle='modal' data-idAuthor='" + item.idAuthor + "' data-target='#addRelation' class='btn btn-success option'>Relacionar</button>";
                html += "<button type= 'button' data-toggle='modal' data-idAuthor='" + item.idAuthor + "' data-target='#books' class='btn btn-info option'>Ver Libros</button></td>";
            });
            $('table tbody').html(html);
            //Presentacion del autor en el modal
            $('.option').click(function (e) {
                var idAuthor = $(this).attr('data-idAuthor');
                var url = "http://localhost:3000/api/getAuthor/" + idAuthor;
                $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    url: url,
                    success: function (data, textStatus, jqXHR) {
                        $("#idAuthorRelation").val(data.idAuthor);
                        $("#nameEdit").val(data.name);
                        $("#countriesEdit").val(data.country);
                        $("#idAuthorEdit").val(data.idAuthor);
                        $("#idAuthorDelete").val(data.idAuthor);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });

                var url1 = "http://localhost:3000/api/getBooksAuthor/"+idAuthor;
                $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    url: url1,
                    success: function (data, textStatus, jqXHR) {
                        var html = "";

                        if(data.length>0){
                            $.each(data, function (i, item) {
                                html += "<tr>";
                                html += "<td>" + (i + 1) + "</td>";
                                html += "<td>" + item.name + "</td>";
                                html += "</tr>";
                            });
                        }else{
                            html += "<tr>";
                            html += "<td></td>";
                            html += "<td><p class='text-center h4'>No tiene libros asociados</p></td>";
                            html += "</tr>";
                        }
                        $("#tableBooks").html(html);
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



