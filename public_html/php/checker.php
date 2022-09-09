<?php
function checkX($x){
    if (is_null($x)){
        return false;
    }else {
        if (($x >= -3) && ($x <= 3) && is_numeric($x)) return true;
    }
    return false;
}

function checkY($y){
    if (is_null($y)){
        return false;
    }else {
        if ((($y == -5) || ($y == -4) || ($y == -3) || ($y == -2) || ($y == -1) || ($y == 0) || ($y == 1) || ($y == 2) || ($y == 3)) && is_numeric($y)) return true;
    }return false;
}

function checkR($r){
    if (is_null($r)){
        return false;
    }else {
        if ((($r == 1) || ($r == 2) || ($r == 3) || ($r == 4) || ($r == 5)) && is_numeric($r)) return true;
    }return false;
}

function check($x, $y, $r){
    return checkX($x) && checkY($y) && checkR($r);
}

function setCode($x, $y, $r){
    if (is_numeric($x) && is_numeric($y) && is_numeric($r)){
        return 406;
    }else return 400;
}