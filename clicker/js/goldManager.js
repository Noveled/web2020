let obj = { gold: 0, lev : 0 , po : 1}
 
Object.defineProperties(obj, {
    "getGold": { get: function () { return this.gold; } },
    "setGold": { set: function (x) { this.gold = this.gold + x; } },
    //"levUp" : { function() { this.lev += 1; } }
    "levInfo": { get: function () { return this.lev; } },
    "levUp": { set: function (x) { this.lev = this.lev + x;  } },

    "poInfo": { get: function () { return this.po; } },
    "poUp": { set: function (x) { this.po = this.po + x;  } },
});

function addGold(pgold) {
    obj.setGold = obj.poInfo; 
    //console.log(obj.getGold);
    console.log("우와앗!!");
    game.querySelector("p").innerHTML = "gold : " + obj.getGold;
    //return gold;
}


function upGold() {
    if(obj.getGold >= 10){
        obj.setGold = -10; 
        obj.poUp = 1;
        console.log("파워 레벨업! " + obj.poInfo);
        game.querySelector("p").innerHTML = "gold : " + obj.getGold;
        game.querySelector("#goldLev").innerHTML = "goldLev : " + obj.poInfo;
    }
}

function upAuto() {
    if(obj.getGold >= 100){
        obj.setGold = -100; 
        obj.levUp = 1;
        console.log("레벨업! " + obj.levInfo);
        game.querySelector("p").innerHTML = "gold : " + obj.getGold;
        game.querySelector("#autoLev").innerHTML = "autoLev : " + obj.levInfo;
    }
}

function autoGold() {
    console.log("autoGold 시작");
    setInterval(() => {
        //console.log("autoGold 반복" + obj.levInfo > 0);
        if(obj.levInfo > 0){
            obj.setGold = 10 * obj.levInfo; 
            game.querySelector("p").innerHTML = "gold : " + obj.getGold;
            //console.log("autoGold 반복2");
        }
    }, 1000);
}