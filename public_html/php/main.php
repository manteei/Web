<?php
    require_once "validator.php";
    require_once "checker.php";
    $x=$_GET['x'];
    $y=$_GET['y'];
    $r=$_GET['r'];


    if (!check($x, $y, $r)){
        http_response_code(setCode($x, $y, $r));
        echo ("<div>Ошибка валидации</div>");
    }else{
        date_default_timezone_set('Europe/Moscow');
        $start = microtime(true);
        $current_time = date("H:i:s");
        $hit_result = validate($x, $y, $r) ? "<span style='color: green'>TRUE</span>" : "<span style='color: red'>FALSE</span>";
        $script_time = number_format(microtime(true) - $start, 8, ".", "") * 1000000;

        echo ("<tr>
                <td> </td>
                <td>$x</td>
                <td>$y</td>
                <td>$r</td>
                <td>$hit_result</td>
                <td>$script_time</td>
                <td>$current_time</td>
            </tr>");
    }
