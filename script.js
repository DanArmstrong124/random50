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

var button = $(' #button ');

var winningnum = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

button.click(function(){
    winningnum = getRandomInt(1, 51);
})

