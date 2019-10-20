
function goPython() {
    $.ajax({
        url: "orbit/x_y.py",
        context: document.body
    })
}

goPython()
