
// 1.feetToMile

function feetToMile (feet){
    var mile = feet*0.000189394;
    return mile;
}
var calMile = feetToMile(500);
console.log(calMile);


// 2.woodCalculator
// note:woodCalculator er output ta Cubic feet a asa

function woodCalculator (chair,table,bed){
    var calChair = chair*1;
    var calTable = table*3;
    var calBed = bed*5;
    var total = calChair+calTable+calBed;
    return total;
}
var calculateWood = woodCalculator(5,2,5);
console.log(calculateWood);


// 3.brickCalculator

function brickCalculator (building){
    var tenTala = 10;
    if (tenTala>=building){
        var calTenTala = building*15000;
    }
    var twentyTala=20;
    if (tenTala < building && twentyTala>=building){
        var getTwentyTala=building-tenTala;
        var resultTwentyTala = getTwentyTala*12000;
        var resultTenTala =tenTala*15000;
        var calTwentyTala = resultTenTala+resultTwentyTala;
    }
    if (twentyTala<building){
        var getTwentyTalaPlus =building-twentyTala;
        var resultTwentyTalaPlus= getTwentyTalaPlus*10000;
        var calTwentyTalaPlus = resultTwentyTalaPlus+270000;
    
    }

    return calTenTala || calTwentyTala || calTwentyTalaPlus;
}

var calBrickToCreateBuildings = brickCalculator (30);
console.log(calBrickToCreateBuildings);


// 4.tinyFriend

function tinyFriend (str){
    var smallName = str[0];
    for (var i=0; i<str.length; i++){
        var element = str [i];
        if (element.length < smallName.length){
            smallName = element;
        }
    }
    return smallName;
}
var friendNameSmall = tinyFriend(['azizul','shamim','morsalin','anik','ridoy']);
console.log(friendNameSmall);