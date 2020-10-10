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
});