function myfunc() {
        var c1,c2,c3,c4,c5,c6,c7,c8,c9;
        c1=document.getElementById("row-1-1").innerHTML;
        c2=document.getElementById("row-1-2").innerHTML;
        c3=document.getElementById("row-1-3").innerHTML;
        c4=document.getElementById("row-2-1").innerHTML;
        c5=document.getElementById("row-2-2").innerHTML;
        c6=document.getElementById("row-2-3").innerHTML;
        c7=document.getElementById("row-3-1").innerHTML;
        c8=document.getElementById("row-3-2").innerHTML;
        c9=document.getElementById("row-3-3").innerHTML;

        var winner=0;

        // Checking for the X' Player Won and disabling other

        if((c1=='X') && (c2=='X') && (c3=='X'))
        {
            document.getElementById('winner').innerHTML="1st Player Won !!";
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-2').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            document.getElementById('row-3-1').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            document.getElementById('row-3-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c1==='X') && (c4==='X') && (c7==='X'))
        {
            document.getElementById('winner').innerHTML="1st Player  Won !!";
            document.getElementById('row-1-2').style.pointerEvents = 'none';
            document.getElementById('row-1-3').style.pointerEvents = 'none';
            document.getElementById('row-2-2').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            document.getElementById('row-3-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c1==='X') && (c5==='X') && (c9==='X'))
        {
            document.getElementById('winner').innerHTML="1st Player  Won !!";
            document.getElementById('row-1-2').style.pointerEvents = 'none';
            document.getElementById('row-1-3').style.pointerEvents = 'none';
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            document.getElementById('row-3-1').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            winner=1;
        }
        
        else if((c2==='X') && (c5==='X') && (c8==='X'))
        {
            document.getElementById('winner').innerHTML="1st Player  Won !!";
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-3').style.pointerEvents = 'none';
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            document.getElementById('row-3-1').style.pointerEvents = 'none';
            document.getElementById('row-3-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c3==='X') && (c5==='X') && (c7==='X'))
        {
            document.getElementById('winner').innerHTML="1st Player  Won !!";
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-2').style.pointerEvents = 'none';
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            document.getElementById('row-3-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c3==='X') && (c6==='X') && (c9==='X'))
        {
            document.getElementById('winner').innerHTML="1st Player  Won !!"
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-2').style.pointerEvents = 'none';
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-2').style.pointerEvents = 'none';
            document.getElementById('row-3-1').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            winner=1;

        }

        else if((c4==='X') && (c5==='X') && (c6==='X')){
            document.getElementById('winner').innerHTML="1st Player  Won !!"
            document.getElementById('row-3-1').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            document.getElementById('row-3-3').style.pointerEvents = 'none';
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-2').style.pointerEvents = 'none';
            document.getElementById('row-1-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c7==='X') && (c8==='X') && (c9==='X')){
            document.getElementById('winner').innerHTML="1st Player  Won !!"
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-3').style.pointerEvents = 'none';
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-2').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            winner=1;
        }

        

        // Checking for O's Player win and displaying the others 

        if((c1==='O') && (c2==='O') && (c3==='O')){
            document.getElementById('winner').innerHTML="2nd Player  Won !!";
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-2').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            document.getElementById('row-3-1').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            document.getElementById('row-3-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c1==='O') && (c4==='O') && (c7==='O')){
            document.getElementById('winner').innerHTML="2nd Player  Won !!";
            document.getElementById('row-1-2').style.pointerEvents = 'none';
            document.getElementById('row-1-3').style.pointerEvents = 'none';
            document.getElementById('row-2-2').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            document.getElementById('row-3-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c1==='O') && (c5==='O') && (c9==='O')){
            document.getElementById('winner').innerHTML="2nd Player  Won !!";
            document.getElementById('row-1-2').style.pointerEvents = 'none';
            document.getElementById('row-1-3').style.pointerEvents = 'none';
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            document.getElementById('row-3-1').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            winner=1;
        }
        
        else if((c2==='O') && (c5==='O') && (c8==='O')){
            document.getElementById('winner').innerHTML="2nd Player  Won !!";
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-3').style.pointerEvents = 'none';
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            document.getElementById('row-3-1').style.pointerEvents = 'none';
            document.getElementById('row-3-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c3==='O') && (c5==='O') && (c7==='O')){
            document.getElementById('winner').innerHTML="2nd Player  Won !!";
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-2').style.pointerEvents = 'none';
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            document.getElementById('row-3-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c3==='O') && (c6==='O') && (c9==='O')){
            document.getElementById('winner').innerHTML="2nd Player  Won !!"
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-2').style.pointerEvents = 'none';
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-2').style.pointerEvents = 'none';
            document.getElementById('row-3-1').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c4==='O') && (c5==='O') && (c6==='O')){
            document.getElementById('winner').innerHTML="2nd Player  Won !!"
            document.getElementById('row-3-1').style.pointerEvents = 'none';
            document.getElementById('row-3-2').style.pointerEvents = 'none';
            document.getElementById('row-3-3').style.pointerEvents = 'none';
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-2').style.pointerEvents = 'none';
            document.getElementById('row-1-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if((c7==='O') && (c8==='O') && (c9==='O')){
            document.getElementById('winner').innerHTML="2nd Player  Won !!"
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-1').style.pointerEvents = 'none';
            document.getElementById('row-1-3').style.pointerEvents = 'none';
            document.getElementById('row-2-1').style.pointerEvents = 'none';
            document.getElementById('row-2-2').style.pointerEvents = 'none';
            document.getElementById('row-2-3').style.pointerEvents = 'none';
            winner=1;
        }

        else if ((c1 == 'X' || c1 == 'O') && (c2 == 'X'
        || c2 == 'O') && (c3 == 'X' || c3 == 'O') &&
        (c4 == 'X' || c4 == 'O') && (c5 == 'X' ||
        c5 == 'O') && (c6 == 'X' || c6 == 'O') &&
        (c7 == 'X' || c7 == 'O') && (c8 == 'X' ||
        c8 == 'O') && (c9 == 'X' || c9 == 'O'))
         {
        document.getElementById('winner').innerHTML = "Match Tie";
         }

        else {
 
            if (flag == 1) {
                document.getElementById('chance')
                    .innerHTML = " 1st Player Turn";
            }
            else if(winner == 0 ) {
                document.getElementById('chance')
                    .innerHTML = " 2nd Player Turn";
            }
        }
}

flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("row-1-1").innerHTML = "X";
        document.getElementById('row-1-1').style.pointerEvents = 'none';
        flag = 0;
    }
    else {
        document.getElementById("row-1-1").innerHTML = "O";
        document.getElementById('row-1-1').style.pointerEvents = 'none';
        flag = 1;
    }
}
 
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("row-1-2").innerHTML = "X";
        document.getElementById('row-1-2').style.pointerEvents = 'none';
        flag = 0;
    }
    else {
        document.getElementById("row-1-2").innerHTML = "O";
        document.getElementById('row-1-2').style.pointerEvents = 'none';
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("row-1-3").innerHTML = "X";
        document.getElementById('row-1-3').style.pointerEvents = 'none';
        flag = 0;
    }
    else {
        document.getElementById("row-1-3").innerHTML = "O";
        document.getElementById('row-1-3').style.pointerEvents = 'none';
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("row-2-1").innerHTML = "X";
        document.getElementById('row-2-1').style.pointerEvents = 'none';
        flag = 0;
    }
    else {
        document.getElementById("row-2-1").innerHTML = "O";
        document.getElementById('row-2-1').style.pointerEvents = 'none';
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("row-2-2").innerHTML = "X";
        document.getElementById('row-2-2').style.pointerEvents = 'none';
        flag = 0;
    }
    else {
        document.getElementById("row-2-2").innerHTML = "O";
        document.getElementById('row-2-2').style.pointerEvents = 'none';
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("row-2-3").innerHTML = "X";
        document.getElementById('row-2-3').style.pointerEvents = 'none';
        flag = 0;
    }
    else {
        document.getElementById("row-2-3").innerHTML = "O";
        document.getElementById('row-2-3').style.pointerEvents = 'none';
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("row-3-1").innerHTML = "X";
        document.getElementById('row-3-1').style.pointerEvents = 'none';
        flag = 0;
    }
    else {
        document.getElementById("row-3-1").innerHTML = "O";
        document.getElementById('row-3-1').style.pointerEvents = 'none';
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("row-3-2").innerHTML = "X";
        document.getElementById('row-3-2').style.pointerEvents = 'none';
        flag = 0;
    }
    else {
        document.getElementById("row-3-2").innerHTML = "O";
        document.getElementById('row-3-2').style.pointerEvents = 'none';
        flag = 1;
    }
}
 
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("row-3-3").innerHTML = "X";
        document.getElementById('row-3-3').style.pointerEvents = 'none';
        flag = 0;
    }
    else {
        document.getElementById("row-3-3").innerHTML = "O";
        document.getElementById('row-3-3').style.pointerEvents = 'none';
        flag = 1;
    }
}

// Reset The game

function myfunc_2() {
    location.reload();
    document.getElementById('row-1-1').value = '';
    document.getElementById("row-1-2").value = '';
    document.getElementById("row-1-3").value = '';
    document.getElementById("row-2-1").value = '';
    document.getElementById("row-2-2").value = '';
    document.getElementById("row-2-3").value = '';
    document.getElementById("row-3-1").value = '';
    document.getElementById("row-3-2").value = '';
    document.getElementById("row-3-3").value = '';
    document.getElementById("winner").value = '';
}

