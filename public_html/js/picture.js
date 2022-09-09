const coords = [];
const container = document.querySelector('.image');

container.addEventListener('click', e => {
        if(!RTest()){
            alert("Невозможно определить координату точки! Укажите радиус.")
        }else {
            const r = document.querySelector('input[name="chooseR"]:checked').value;
            const x1 = document.getElementById('img').getBoundingClientRect().left;
            const y1 = document.getElementById('img').getBoundingClientRect().top;
            const x = x1 + e.offsetX;
            const y = y1 + e.offsetY;

            coords.push({
                x: x,
                y: y
            });
            container.appendChild(createPoint(x, y));

            const x3 = Math.floor((e.offsetX-185)*((3*r)/378)*10)/10
            const y3 = Math.floor((185-e.offsetY)*(3*r)/378*10)/10

            $.ajax({
                url: 'php/pictureCheck.php',
                type: 'GET',
                cache: false,
                data: {'x': x3, 'y': y3, 'r': r},
                dataType: 'html',
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
}, false);

const createPoint = (x, y) => {
    const node = document.createElement('div');

    node.classList.add('container-point');

    node.style.left = `${x}px`;
    node.style.top = `${y}px`;

    return node;
}

function RTest(){
    if (document.querySelector('input[name="chooseR"]:checked') == null) {
        return false;
    } else {
        return true;
    }
}
