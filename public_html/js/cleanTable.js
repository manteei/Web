export function cleanTable() {
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
