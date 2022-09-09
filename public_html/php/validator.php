<?php

function validate($x, $y, $r)
{
    if (($x * $x + $y * $y <= $r * $r) && ($x >= 0) && ($y <= 0)) return true;
    else if (($x < 0) && ($y < 0) && ($x >= -$r/2) && ($y >= -$r)) return true;
    else if (($x <= 0) && ($y >= 0) && ($y-$x<=$r/2)) return true;
    else return false;
}
