$("#send").on("click", function (){
   // import {cleanTable} from "cleanTable.js";
    const x = $("#x").val();
    const y = $("#y").val();
    const form = document.querySelector('.checkerForm');
    const valueX = form.querySelector('.formX');
    const container = document.querySelector('.image');

    const xForm = document.getElementById("Xerror"),
        newX = document.createElement("div"),
        textX = document.createTextNode(fieldXTest(valueX));
    newX.appendChild(textX);
    xForm.replaceChild(newX, xForm.childNodes[0]);

    const rForm = document.getElementById("Rerror"),
        newR = document.createElement("div"),
        textR = document.createTextNode(fieldRTest());
    newR.appendChild(textR);
    rForm.replaceChild(newR, rForm.childNodes[0]);
    event.preventDefault();

    if (textX.data + textR.data === "") {
        var r = document.querySelector('input[name="chooseR"]:checked').value;

        $.ajax({
            url: 'php/main.php',
            type: 'GET',
            cache: false,
            data: {'x': x, 'y': y, 'r': r},
            dataType: 'html',
            beforeSend: function () {
                $("#send").prop("disabled", true);
            },
            success: function (data) {
                $("#send").prop("disabled", false)
                $("#checkerForm").trigger("reset")

                if (data !== undefined){
                    let localS = localStorage.getItem("1");
                    if (localS === null){
                        localStorage.setItem("1", data);
                    }
                    else {
                        localStorage.setItem("1", (localStorage.getItem("1") + data));
                    }
                    cleanTable();
                    document.getElementById("resultTable").innerHTML += localStorage.getItem("1");

                }
                const x1 = document.getElementById('img').getBoundingClientRect().left;
                const y1 = document.getElementById('img').getBoundingClientRect().top;
                container.appendChild(createPoint(x1 + 185 + 413/(3*r)*x, y1 + 185 - 378/(3*r)*y));
            }
        });
    }


});


function fieldXTest(field) {
    if (!(field.value.trim() === "")) {
        if (/^(0$|-?[0-9]\d*(\.\d*[0-9]$)?|-?0\.\d*[0-9])$/.test(field.value)) {
            if ((parseFloat(field.value) >= -3) && (parseFloat(field.value) <= 3) && (!/^-?3[.,][0]+[1-9]$/.test(field.value))) {
                    return "";
            } else return "Координата X задается числом в промежутке {-3...3}!\n";
        } else return "Координата X задается числом!\n";
    } else return "Не введена координата X!\n";
}


function fieldRTest(){
    if (document.querySelector('input[name="chooseR"]:checked') == null) {
        return "Поле не может быть невыбранным!";
    } else {
        return "";
    }
}

function cleanTable() {
    let standard = "<tr>"+
        "<td>    </td>"+
        "<td>X</td>"+
        "<td>Y</td>"+
        "<td>R</td>"+
        "<td>Результат</td>"+
        "<td>Время выполнения</td>"+
        "<td>Текущее время</td>"+
        "</tr>"

    $('#resultTable').html(standard);

}

function clean(){
    cleanTable();
    localStorage.clear();
    removePoint();
}