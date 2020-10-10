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
});