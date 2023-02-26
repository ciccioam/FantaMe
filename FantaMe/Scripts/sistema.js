//$(document).ready(function () {
//    $("#provalbl").on("click", function () {
//        $(this).hide();
//    });
//    $("#provalbl").mouseenter(function () {
//        alert("You entered label!");
//    });
//});
$(document).ready(function () {

    $('#lblPart1').on({

        click: function () {
            $(this).css({
                "border-color": "#ff0000",
                "border-width": "3px",
                "border-style": "solid"
            });
            $('#lblPart2').css({"border-color": "black"})
            $('#lblPart3').css({ "border-color": "black" })
            $('#lblPart4').css({ "border-color": "black" })
            $('#lblPart5').css({ "border-color": "black" })
            $('#lblPart6').css({ "border-color": "black" })
            $('#lblPart7').css({ "border-color": "black" })
            $('#lblPart8').css({ "border-color": "black" })
            var textbox = document.forms[0]['txtIdSel'];
            textbox.value = "1";
            //alert(textbox.value);
            
        },

    });

    $('#lblPart2').on({

        click: function () {
            $(this).css({
                "border-color": "#ff0000",
                "border-width": "3px",
                "border-style": "solid"
            });
            $('#lblPart1').css({ "border-color": "black" })
            $('#lblPart3').css({ "border-color": "black" })
            $('#lblPart4').css({ "border-color": "black" })
            $('#lblPart5').css({ "border-color": "black" })
            $('#lblPart6').css({ "border-color": "black" })
            $('#lblPart7').css({ "border-color": "black" })
            $('#lblPart8').css({ "border-color": "black" })
            var textbox = document.forms[0]['txtIdSel'];
            textbox.value = "2";
        },

    });

    $('#lblPart3').on({

        click: function () {
            $(this).css({
                "border-color": "#ff0000",
                "border-width": "3px",
                "border-style": "solid"
            });
            $('#lblPart1').css({ "border-color": "black" })
            $('#lblPart2').css({ "border-color": "black" })
            $('#lblPart4').css({ "border-color": "black" })
            $('#lblPart5').css({ "border-color": "black" })
            $('#lblPart6').css({ "border-color": "black" })
            $('#lblPart7').css({ "border-color": "black" })
            $('#lblPart8').css({ "border-color": "black" })
            var textbox = document.forms[0]['txtIdSel'];
            textbox.value = "3";
        },

    });

    $('#lblPart4').on({

        click: function () {
            $(this).css({
                "border-color": "#ff0000",
                "border-width": "3px",
                "border-style": "solid"
            });
            $('#lblPart1').css({ "border-color": "black" })
            $('#lblPart2').css({ "border-color": "black" })
            $('#lblPart3').css({ "border-color": "black" })
            $('#lblPart5').css({ "border-color": "black" })
            $('#lblPart6').css({ "border-color": "black" })
            $('#lblPart7').css({ "border-color": "black" })
            $('#lblPart8').css({ "border-color": "black" })
            var textbox = document.forms[0]['txtIdSel'];
            textbox.value = "4";
        },

    });

    $('#lblPart5').on({

        click: function () {
            $(this).css({
                "border-color": "#ff0000",
                "border-width": "3px",
                "border-style": "solid"
            });
            $('#lblPart1').css({ "border-color": "black" })
            $('#lblPart3').css({ "border-color": "black" })
            $('#lblPart4').css({ "border-color": "black" })
            $('#lblPart2').css({ "border-color": "black" })
            $('#lblPart6').css({ "border-color": "black" })
            $('#lblPart7').css({ "border-color": "black" })
            $('#lblPart8').css({ "border-color": "black" })
            var textbox = document.forms[0]['txtIdSel'];
            textbox.value = "5";
        },

    });

    $('#lblPart6').on({

        click: function () {
            $(this).css({
                "border-color": "#ff0000",
                "border-width": "3px",
                "border-style": "solid"
            });
            $('#lblPart1').css({ "border-color": "black" })
            $('#lblPart3').css({ "border-color": "black" })
            $('#lblPart4').css({ "border-color": "black" })
            $('#lblPart5').css({ "border-color": "black" })
            $('#lblPart2').css({ "border-color": "black" })
            $('#lblPart7').css({ "border-color": "black" })
            $('#lblPart8').css({ "border-color": "black" })
            var textbox = document.forms[0]['txtIdSel'];
            textbox.value = "6";
        },

    });

    $('#lblPart7').on({

        click: function () {
            $(this).css({
                "border-color": "#ff0000",
                "border-width": "3px",
                "border-style": "solid"
            });
            $('#lblPart1').css({ "border-color": "black" })
            $('#lblPart3').css({ "border-color": "black" })
            $('#lblPart4').css({ "border-color": "black" })
            $('#lblPart5').css({ "border-color": "black" })
            $('#lblPart6').css({ "border-color": "black" })
            $('#lblPart2').css({ "border-color": "black" })
            $('#lblPart8').css({ "border-color": "black" })
            var textbox = document.forms[0]['txtIdSel'];
            textbox.value = "7";
        },

    });

    $('#lblPart8').on({

        click: function () {
            $(this).css({
                "border-color": "#ff0000",
                "border-width": "3px",
                "border-style": "solid"
            });
            $('#lblPart1').css({ "border-color": "black" })
            $('#lblPart3').css({ "border-color": "black" })
            $('#lblPart4').css({ "border-color": "black" })
            $('#lblPart5').css({ "border-color": "black" })
            $('#lblPart6').css({ "border-color": "black" })
            $('#lblPart7').css({ "border-color": "black" })
            $('#lblPart2').css({ "border-color": "black" })
            var textbox = document.forms[0]['txtIdSel'];
            textbox.value = "8";
        },

    });

});

function onMouseOver(rowIndex) {
    var gv = document.getElementById("GridView1");
    var rowElement = gv.rows[rowIndex];
    rowElement.style.backgroundColor = "#c8e4b6";
    rowElement.cells[1].style.backgroundColor = "green";
}

function onMouseOut(rowIndex) {
    var gv = document.getElementById("GridView1");
    var rowElement = gv.rows[rowIndex];
    rowElement.style.backgroundColor = "#fff";
    rowElement.cells[1].style.backgroundColor = "#fff";
}