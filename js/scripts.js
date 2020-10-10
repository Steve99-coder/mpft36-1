$(document).ready(function () {
    $("#design-image").click(function () {
        $("#design-image").slideDown('2000').hide('1500');
        $("#design").show('2000');
    });
    $("#design").click(function () {
        $("#design").slideUp('2000');
        $("#design-image").slideDown('2000');
    });
    $("#development-image").click(function () {
        $("#development-image").slideDown('2000').hide('1500');
        $("#development").show('2000');
    });
    $("#development").click(function () {
        $("#development").slideUp('2000');
        $("#development-image").slideDown('2000');
    });
    $("#product-image").click(function () {
        $("#product-image").slideDown('2000').hide('1500');
        $("#product").show('2000');
    });
    $("#product").click(function () {
        $("#product").slideUp('2000');
        $("#product-image").slideDown('2000');
    });

    $("#work1").mouseover(function () {
        $("#hover1").show();
    }).mouseout(function () {
        $("#hover").hide();
    });

    $("#work2").mouseover(function () {
        $("#hover2").show();
    }).mouseout(function () {
        $("#hover2").hide();
    });

    $("#work3").mouseover(function () {
        $("#hover3").show();
    }).mouseout(function () {
        $("#hover3").hide();
    });

    $("#work4").mouseover(function () {
        $("#hover4").show();
    }).mouseout(function () {
        $("#hover4").hide();
    });

    $("#work5").mouseover(function () {
        $("#hover5").show();
    }).mouseout(function () {
        $("#hover5").hide();
    });

    $("#work6").mouseover(function () {
        $("#hover6").show();
    }).mouseout(function () {
        $("#hover6").hide();
    });

    $("#work7").mouseover(function () {
        $("#hover7").show();
    }).mouseout(function () {
        $("#hover7").hide();
    });

    $("#work8").mouseover(function () {
        $("#hover8").show();
    }).mouseout(function () {
        $("#hover8").hide();
    });


    $("form#form1").submit(function () {
        var name = $("input#NAME1").val();
        var email = $("input#EMAIL1").val();
        var message = $("textarea#comment").val();
        if ($("input#NAME1").val() && $("input#EMAIL1").val()) {
            alert(name + "  thank you for reaching out to us,we have received your message.");
        }
        else {
            alert("Please enter your name and email!");
        }

    });
});

