$(document).ready(function() {
    var total = 0.00;
    $("#cafe").click(function() {
        var markup = "<tr><td>Café</td><td>12.50</td><td>1</td><td>12.50</td></tr>";
        $("#lista tbody").append(markup);
        total += parseFloat("12.50");
        $("#total").val(total.toFixed(2));
    });

    $("#latte").click(function() {
        var markup = "<tr><td>Latte</td><td>14.50</td><td>1</td><td>14.50</td></tr>";
        $("#lista tbody").append(markup);
        total += parseFloat("14.50");
        $("#total").val(total.toFixed(2));
    });

    $("#choco").click(function() {
        var markup = "<tr><td>Chocolate</td><td>13.50</td><td>1</td><td>13.50</td></tr>";
        $("#lista tbody").append(markup);
        total += parseFloat("13.50");
        $("#total").val(total.toFixed(2));
    });

    $("#borrar").click(function() {
        $("#lista tbody").html("");
        $("#respuesta").val("");
        total = 0.00;
        $("#total").val("0.00");
    });

    $("#pagar-chip").click(function() {
        var ippos = $("#ippos option:selected").text();
        var urlb = "http://localhost:3000/chip/" + ippos + "/" + $("#total").val();

        $.ajax({
            url: urlb,
            headers: {
                'Content-Type': 'application/json'
            },
            type: "GET",
            dataType: "json",
            timeout: 60000,
            error: function(data) {
                if (data) {
                    $("#respuesta").val(JSON.stringify(data, undefined, 4));
                } else {
                    $("#respuesta").val("Error de tiempo de espera");
                }

            },
            success: function(data) {
                console.log(data);
                $("#respuesta").val(JSON.stringify(data, undefined, 4));
            }
        });
    });

    $("#pagar-ctl").click(function() {
        var ippos = $("#ippos option:selected").text();
        var urlb = "http://localhost:3000/ctl/" + ippos + "/" + $("#total").val();

        $.ajax({
            url: urlb,
            headers: {
                'Content-Type': 'application/json'
            },
            type: "GET",
            dataType: "json",
            timeout: 60000,
            error: function(data) {
                if (data) {
                    $("#respuesta").val(JSON.stringify(data, undefined, 4));
                } else {
                    $("#respuesta").val("Error de tiempo de espera");
                }
            },
            success: function(data) {
                $("#respuesta").val(JSON.stringify(data, undefined, 4));
            }
        });
    });

    $("#cierre").click(function() {
        var ippos = $("#ippos option:selected").text();
        var urlb = "http://localhost:3000/cierre/" + ippos + "/1";

        $.ajax({
            url: urlb,
            headers: {
                'Content-Type': 'application/json'
            },
            type: "GET",
            dataType: "json",
            timeout: 80000,
            error: function(data) {
                if (data) {
                    $("#respuesta").val(JSON.stringify(data, undefined, 4));
                } else {
                    $("#respuesta").val("Error de tiempo de espera");
                }
            },
            success: function(data) {
                $("#respuesta").val(JSON.stringify(data, undefined, 4));
            }
        });
    });

    $("#anular").click(function() {
        var ippos = $("#ippos option:selected").text();
        var recibo = $("#numrecibo").val();
        var urlb = "http://localhost:3000/anulacion/" + ippos + "/" + recibo;

        if ($("#numrecibo").val()) {
            $.ajax({
                url: urlb,
                headers: {
                    'Content-Type': 'application/json'
                },
                type: "GET",
                dataType: "json",
                timeout: 60000,
                error: function(data) {
                    if (data) {
                        $("#respuesta").val(JSON.stringify(data, undefined, 4));
                    } else {
                        $("#respuesta").val("Error de tiempo de espera");
                    }

                },
                success: function(data) {
                    $("#respuesta").val(JSON.stringify(data, undefined, 4));
                }
            });
        } else {
            alert('Para anular debe ingresar un número de recibo.');
        }
    });

    $("#inicializar").click(function() {
        var ippos = $("#ippos option:selected").text();
        var urlb = "http://localhost:3000/inicializar/" + ippos + "/1";
        $.ajax({
            url: urlb,
            timeout: 40000,
            error: function(data) {
                if (data) {
                    $("#respuesta").val(JSON.stringify(data, undefined, 4));
                } else {
                    $("#respuesta").val("Error de tiempo de espera");
                }
            },
            success: function(data) {
                $("#respuesta").val(data);
            }
        });
    });

});