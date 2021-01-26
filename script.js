var zonks = 0;
var zorks = 0;
var zoops = 0;
var zotes = 0;

var zork_reveal = false;
var zoop_reveal = false;
var zote_reveal = false;

var zonkers = 0;
var zorkers = 0;
var zoopers = 0;
var zoteers = 0;

function on_load() {
  document.getElementById("btn_zork").style.visibility = "hidden";
  document.getElementById("btn_zoop").style.visibility = "hidden";
  document.getElementById("btn_zote").style.visibility = "hidden";
  document.getElementById("shop_buy_zonker").style.visibility = "hidden";
  document.getElementById("shop_buy_zorker").style.visibility = "hidden";
  document.getElementById("shop_buy_zooper").style.visibility = "hidden";
  document.getElementById("shop_buy_zoteer").style.visibility = "hidden";

  document.getElementById("zonkercounter").style.visibility = "hidden";
  document.getElementById("zorkercounter").style.visibility = "hidden";
  document.getElementById("zoopercounter").style.visibility = "hidden";
  document.getElementById("zoteercounter").style.visibility = "hidden";
}
function refresh() {
  document.getElementById('zonkcounter').innerHTML = "Zonks = " + Math.round(zonks);
  if (zork_reveal) {
    document.getElementById("btn_zork").style.visibility = "visible";
    document.getElementById('zorkcounter').innerHTML = "Zorks = " + Math.round(zorks);
  }
  if (zoop_reveal) {
    document.getElementById("btn_zoop").style.visibility = "visible";
    document.getElementById('zoopcounter').innerHTML = "Zoops = " + Math.round(zoops);
  }
  if (zote_reveal) {
    document.getElementById("btn_zote").style.visibility = "visible";
    document.getElementById('zotecounter').innerHTML = "Zotes = " + Math.round(zotes);
  }
  if (shop_reveal) {
    document.getElementById("shop_buy_zonker").style.visibility = "visible";
    document.getElementById("zonkercounter").style.visibility = "visible";
    document.getElementById('zonkercounter').innerHTML = "Zonkers = " + zonkers;

    if (zonkers >= 10) {
      document.getElementById("shop_buy_zorker").style.visibility = "visible";
      document.getElementById("zorkercounter").style.visibility = "visible";
      document.getElementById('zorkercounter').innerHTML = "Zorkers = " + zorkers;
    }
    if (zorkers >= 10) {
      document.getElementById("shop_buy_zooper").style.visibility = "visible";
      document.getElementById("zoopercounter").style.visibility = "visible";
      document.getElementById('zoopercounter').innerHTML = "Zoopers = " + zoopers;
    }
    if (zoopers >= 10){
      document.getElementById("shop_buy_zoteer").style.visibility = "visible";
      document.getElementById("zoteercounter").style.visibility = "visible";
      document.getElementById('zoteercounter').innerHTML = "Zoteers = " + zoteers;
    }
  }
}
function zonk() {
  zonks += 1;
  if (zonks >= 10) {
    zork_reveal = true;
  }
  refresh();
}
function zork() {
  if (zonks >= 1) {
    zorks += 1;
    zonks -= 1;
  }
  if (zorks >= 10) {
    zoop_reveal = true;
  }
  refresh();
}
function zoop() {
  if (zorks >= 1 && zonks >= 2) {
    zorks -= 1;
    zonks -= 2;
    zoops += 1;
  }
  if (zoops >= 10) {
    zote_reveal = true;
    shop_reveal = true;
  }
  refresh();
}
function zote() {
  if (zonks >= 4 && zorks >= 2 && zoops >= 1) {
    zonks -= 4;
    zorks -= 2;
    zoops -= 1;
    zotes += 1
  }
  refresh();
}

function buy_zonker() {
  if (zorks >= 5) {
    zonkers += 1;
    zorks -= 5;
  }

  refresh();
}
function buy_zorker() {
  if (zoops >= 5) {
    zorkers += 1;
    zoops -= 5;
  }
  refresh();
}
function buy_zooper() {
  if (zotes >= 5) {
    zoopers += 1;
    zotes -= 5;
  }
  refresh();
}
function buy_zoteer() {
}

var inverval = window.setInterval(function(){tick()}, 1000);
function tick() {
  zorks += .2 * zorkers;
  zonks += .2 * zonkers;
  zoops += .2 * zoopers;
  zotes += .2 * zoteers;
  console.log("tick");
  refresh();
}
