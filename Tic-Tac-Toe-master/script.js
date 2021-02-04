function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function run() {

    var success = 0;
    var map = {
        "#1":"first",
        "#2":"second",
        "#3":"third",
        "#4":"fourth",
        "#5":"fifth",
        "#6":"sixth",
        "#7":"seventh",
        "#8":"eighth",
        "#9":"ninth"
    }
    var num = 0;
    while(success == 0) {
        var y = getRandomInt(9) + 1;
        var val = '#' + y;
        var t = document.getElementById(map[val]).innerHTML;
        if (t != "O" && t != "X") {
            var t = document.getElementById(map[val]);
            success = 3;
            setTimeout(function(){ 
                    var count = document.getElementById('count');
                    if(count.innerHTML%2 == 0) {
                        t.innerHTML = "X";
                        count.innerHTML++;
                        test();
                    }
                    else {
                        if(document.getElementById('done').innerHTML != "done") {
                            t.innerHTML = "O";
                            test();
                            count.innerHTML++;
                        }
                    }
                 }, 800);
            setTimeout(800);
            test();
        }
        num++;
        console.log(num);
        if(num > 9) {
            success = 3;
        }
    }

}



function test() {

    $(".square").click(function() {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    var fourth = document.getElementById('fourth');
    var fifth = document.getElementById('fifth');
    var sixth = document.getElementById('sixth');
    var seventh = document.getElementById('seventh');
    var eighth = document.getElementById('eighth');
    var ninth = document.getElementById('ninth');

    if(first.innerHTML == second.innerHTML && second.innerHTML == third.innerHTML && first.innerText != "") {
        var one = document.getElementById('1');
        var two = document.getElementById('2');
        var three = document.getElementById('3');
        one.style.background = "limegreen";
        two.style.background = "limegreen";
        three.style.background = "limegreen";
        document.getElementById('done').innerHTML = "done";
        
    }
    if(first.innerHTML == fourth.innerHTML && fourth.innerHTML == seventh.innerHTML && first.innerText != "") {
        var one = document.getElementById('1');
        var seven = document.getElementById('7');
        var four = document.getElementById('4');
        one.style.background = "limegreen";
        four.style.background = "limegreen";
        seven.style.background = "limegreen";
        document.getElementById('done').innerHTML = "done";
    }
    if(fourth.innerHTML == fifth.innerHTML && fifth.innerHTML == sixth.innerHTML && fourth.innerText != "") {
        var four = document.getElementById('4');
        var five = document.getElementById('5');
        var six = document.getElementById('6');
        four.style.background = "limegreen";
        five.style.background = "limegreen";
        six.style.background = "limegreen";
        document.getElementById('done').innerHTML = "done";
    }
    if(second.innerHTML == fifth.innerHTML && fifth.innerHTML == eighth.innerHTML && second.innerText != "") {
        var two = document.getElementById('2');
        var five = document.getElementById('5');
        var eight = document.getElementById('8');
        two.style.background = "limegreen";
        five.style.background = "limegreen";
        eight.style.background = "limegreen";
        document.getElementById('done').innerHTML = "done";
    }
    if(third.innerHTML == sixth.innerHTML && sixth.innerHTML == ninth.innerHTML && third.innerText != "") {
        var three = document.getElementById('3');
        var six = document.getElementById('6');
        var nine = document.getElementById('9');
        three.style.background = "limegreen";
        six.style.background = "limegreen";
        nine.style.background = "limegreen";
        document.getElementById('done').innerHTML = "done";
    }
    if(seventh.innerHTML == eighth.innerHTML && eighth.innerHTML == ninth.innerHTML && seventh.innerText != "") {
        var seven = document.getElementById('7');
        var eight = document.getElementById('8');
        var nine = document.getElementById('9');
        seven.style.background = "limegreen";
        eighth.style.background = "limegreen";
        nine.style.background = "limegreen";
        document.getElementById('done').innerHTML = "done";
    }
    if(first.innerHTML == fifth.innerHTML && fifth.innerHTML == ninth.innerHTML && first.innerText != "") {
        var one = document.getElementById('1');
        var five = document.getElementById('5');
        var nine = document.getElementById('9');
        one.style.background = "limegreen";
        five.style.background = "limegreen";
        nine.style.background = "limegreen";
        document.getElementById('done').innerHTML = "done";
    }
    if(third.innerHTML == fifth.innerHTML && fifth.innerHTML == seventh.innerHTML && seventh.innerText != "") {
        var three = document.getElementById('3');
        var five = document.getElementById('5');
        var seven  = document.getElementById('7');
        three.style.background = "limegreen";
        five.style.background = "limegreen";
        seven.style.background = "limegreen";
        document.getElementById('done').innerHTML = "done";
    }

    return 0;

});

}
$("#1").click(function() {
    var first = document.getElementById('first');
    if (first.textContent == "O" || first.textContent == "X") {
        //Do nothing
    }
    else {
        var count = document.getElementById('count');
        if(count.innerHTML%2 == 0) {
            first.innerHTML = "X";
            count.innerHTML++;
            test();
            run();
        }
        else {
            first.innerHTML = "O";
            count.innerHTML++;
            test();
            run();
        }
    }
});
$("#2").click(function() {
    var first = document.getElementById('second');
    if (first.textContent == "O" || first.textContent == "X") {
        //Do nothing
    }
    else {
        var count = document.getElementById('count');
        if(count.innerHTML%2 == 0) {
            first.innerHTML = "X";
            count.innerHTML++;
            test();
            run();
        }
        else {
            first.innerHTML = "O";
            count.innerHTML++;
            test();
            run();
        }
    }
});
$("#3").click(function() {
    var first = document.getElementById('third');
    if (first.textContent == "O" || first.textContent == "X") {
        //Do nothing
    }
    else {
        var count = document.getElementById('count');
        if(count.innerHTML%2 == 0) {
            first.innerHTML = "X";
            count.innerHTML++;
            test();
            run();
        }
        else {
            first.innerHTML = "O";
            count.innerHTML++;
            test();
            run();
        }
    }
});
$("#4").click(function() {
    var first = document.getElementById('fourth');
    if (first.textContent == "O" || first.textContent == "X") {
        //Do nothing
    }
    else {
        var count = document.getElementById('count');
        if(count.innerHTML%2 == 0) {
            first.innerHTML = "X";
            count.innerHTML++;
            test();
            run();
        }
        else {
            first.innerHTML = "O";
            count.innerHTML++;
            test();
            run();
        }
    }
});
$("#5").click(function() {
    var first = document.getElementById('fifth');
    if (first.textContent == "O" || first.textContent == "X") {
        //Do nothing
    }
    else {
        var count = document.getElementById('count');
        if(count.innerHTML%2 == 0) {
            first.innerHTML = "X";
            count.innerHTML++;
            test();
            run();
        }
        else {
            first.innerHTML = "O";
            count.innerHTML++;
            test();
            run();
        }
    }
});
$("#6").click(function() {
    var first = document.getElementById('sixth');
    if (first.textContent == "O" || first.textContent == "X") {
        //Do nothing
    }
    else {
        var count = document.getElementById('count');
        if(count.innerHTML%2 == 0) {
            first.innerHTML = "X";
            count.innerHTML++;
            test();
            run();
        }
        else {
            first.innerHTML = "O";
            count.innerHTML++;
            test();
            run();
        }
    }
});
$("#7").click(function() {
    var first = document.getElementById('seventh');
    if (first.textContent == "O" || first.textContent == "X") {
        //Do nothing
    }
    else {
        var count = document.getElementById('count');
        if(count.innerHTML%2 == 0) {
            first.innerHTML = "X";
            count.innerHTML++;
            test();
            run();
        }
        else {
            first.innerHTML = "O";
            count.innerHTML++;
            test();
            run();
        }
    }
});
$("#8").click(function() {
    var first = document.getElementById('eighth');
    if (first.textContent == "O" || first.textContent == "X") {
        //Do nothing
    }
    else {
        var count = document.getElementById('count');
        if(count.innerHTML%2 == 0) {
            first.innerHTML = "X";
            count.innerHTML++;
            test();
            run();
        }
        else {
            first.innerHTML = "O";
            count.innerHTML++;
            test();
            run();
        }
    }
});
$("#9").click(function() {
    var first = document.getElementById('ninth');
    if (first.textContent == "O" || first.textContent == "X") {
        //Do nothing
    }
    else {
        var count = document.getElementById('count');
        if(count.innerHTML%2 == 0) {
            first.innerHTML = "X";
            count.innerHTML++;
            test();
            run();
        }
        else {
            first.innerHTML = "O";
            count.innerHTML++;
            test();
            run();
        }
    }
});