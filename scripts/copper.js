var id;

function circleTrigger() {
    var e = document.getElementById("circle-button");

    function alertTest() {
        document.location.href = '/'
        e.className = "circle-button-done";
        clearTimeout(id);
    }

    if (e.className != "circle-button-done") {
        id = setTimeout(alertTest, 1450);
    }
}

function clearTiming() {
    clearTimeout(id);
}