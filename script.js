var n1 = $(' #1 ');
var n2 = $(' #2 ');
var n3 = $(' #3 ');
var n4 = $(' #4 ');
var n5 = $(' #5 ');
var n6 = $(' #6 ');
var n7 = $(' #7 ');
var n8 = $(' #8 ');
var n9 = $(' #9 ');
var n10 = $(' #10 ');
var n11 = $(' #11 ');
var n12 = $(' #12 ');
var n13 = $(' #13 ');
var n14 = $(' #14 ');
var n15 = $(' #15 ');
var n16 = $(' #16 ');
var n17 = $(' #17 ');
var n18 = $(' #18 ');
var n19 = $(' #19 ');
var n20 = $(' #20 ');
var n21 = $(' #21 ');
var n22 = $(' #22 ');
var n23 = $(' #23 ');
var n24 = $(' #24 ');
var n25 = $(' #25 ');
var n26 = $(' #26 ');
var n27 = $(' #27 ');
var n28 = $(' #28 ');
var n29 = $(' #29 ');
var n30 = $(' #30 ');
var n31 = $(' #31 ');
var n32 = $(' #32 ');
var n33 = $(' #33 ');
var n34 = $(' #34 ');
var n35 = $(' #35 ');
var n36 = $(' #36 ');
var n37 = $(' #37 ');
var n38 = $(' #38 ');
var n39 = $(' #39 ');
var n40 = $(' #40 ');
var n41 = $(' #41 ');
var n42 = $(' #42 ');
var n43 = $(' #43 ');
var n44 = $(' #44 ');
var n45 = $(' #45 ');
var n46 = $(' #46 ');
var n47 = $(' #47 ');
var n48 = $(' #48 ');
var n49 = $(' #49 ');
var n50 = $(' #50 ');

var w1 = "Name1";
var w2 = "Name2";
var w3 = "Name3";
var w4 = "Name4";
var w5 = "Name5";
var w6 = "Name6";
var w7 = "Name7";
var w8 = "Name8";
var w9 = "Name9";
var w10 = "Name10";
var w11 = "Name11";
var w12 = "Name12";
var w13 = "Name13";
var w14 = "Name14";
var w15 = "Name15";
var w16 = "Name16";
var w17 = "Name17";
var w18 = "Name18";
var w19 = "Name19";
var w20 = "Name20";
var w21 = "Name21";
var w22 = "Name22";
var w23 = "Name23";
var w24 = "Name24";
var w25 = "Name25";
var w26 = "Name26";
var w27 = "Name27";
var w28 = "Name28";
var w29 = "Name29";
var w30 = "Name30";
var w31 = "Name31";
var w32 = "Name32";
var w33 = "Name33";
var w34 = "Name34";
var w35 = "Name35";
var w36 = "Name36";
var w37 = "Name37";
var w38 = "Name38";
var w39 = "Name39";
var w40 = "Name40";
var w41 = "Name41";
var w42 = "Name42";
var w43 = "Name43";
var w44 = "Name44";
var w45 = "Name45";
var w46 = "Name46";
var w47 = "Name47";
var w48 = "Name48";
var w49 = "Name49";
var w50 = "Name50";


var winnum = $(' #winningnumber ');
var winname = $(' #winningname ');

var button = $(' #button ');

var winningnum = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

button.click(function(){
    button.addClass("disabled");
    winningnum = getRandomInt(1, 51);
    
    setTimeout(function(){
        if (winningnum === 1){
            n1.css({"background-color": "green", "color": "white"});
            winnum.css({"background-color": "green", "color": "white"});
            winname.css({"background-color": "green", "color": "white"});
            winnum.html(winningnum);
            winname.html(w1);
        }
        else if (winningnum != 1){
            n1.css({"background-color": "red", "color": "white"});
            winnum.css({"background-color": "red", "color": "white"});
            winname.css({"background-color": "red", "color": "white"});
            winnum.html("1");
            winname.html(w1);
            

                setTimeout(function(){
                    if (winningnum === 2){
                        n2.css({"background-color": "green", "color": "white"});
                        winnum.css({"background-color": "green", "color": "white"});
                        winname.css({"background-color": "green", "color": "white"});
                        winnum.html(winningnum);
                        winname.html(w2);
                    }
                    else if (winningnum != 1){
                        n2.css({"background-color": "red", "color": "white"});
                        winnum.css({"background-color": "red", "color": "white"});
                        winname.css({"background-color": "red", "color": "white"});
                        winnum.html("2");
                        winname.html(w2);

                    }
                }, 1000);
        }
    }, 1000);

})

