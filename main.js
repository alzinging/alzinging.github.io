var endpoint = "https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a1";
function geturl(){
    var url = document.getElementById("urlinput").value;
    return checkurl(url);
}


function checkurl(urida) {
    url = urida;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if(!protocol_ok){
        newurl = "http://"+url;
        return newurl;
        }else{
            return url;
        }
}

function decode64(input) {
    var keyStr = "ABCDEFGHIJKLMNOP" +
    "QRSTUVWXYZabcdef" +
    "ghijklmnopqrstuv" +
    "wxyz0123456789+/" +
    "=";
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;
    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    var base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input)) {
        alert("There were invalid base64 characters in the input text.\n" +
        "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
        "Expect errors in decoding.");
    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);
    return decodeURI(output);
}
function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function genhash(){
    if (window.location.hash == ""){
        window.location.hash = getrandom();
    } else {
	savedhash= window.location.hash;
        window.location.hash = getrandom();
    }
}

function send_request2(url,hac) {
    this.url = url;
    $.ajax({
        'url': endpoint + "/" + hac,
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}
function send_request(url) {
    this.url = url;
    $.ajax({
        'url': endpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
//        'date': new Date(),
//        'srcurl': window.location.href(substr,1,window.location.indexOf("#")),
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}

function shorturl(){
    var longurl = geturl();
    genhash();
    send_request(longurl);
    displuk();
    
}

function displuk(){
   document.getElementById("op").innerHTML = window.location.href;
}

var hashh = window.location.hash.substr(1);
var primehash = null;
var savedhash = null;

function wtd(idk) {
	var newurl = niale(window.location.hash.substr(1));
        console.log(newurl);

	window.location.hash = newurl;
        newhash= getrandom();
	//send_request2(newurl,newhash);
        if (primehash!=null) {
	 window.location.href=checkurl(newurl+""+primehash);
	 return "OK";
	}
	$.getJSON(endpoint + "/" + newhash, function (data) {
	  data=data["result"];
        if (data !=null) {        
  	  window.location.href=checkurl(data+"#"+newhash);
        } else { 
	 window.location.href=checkurl(newurl +"#"+newhash); }
	});

}
function niale(pstr) {
  if (pstr == null) return null;
  mopstr = pstr;
  if (pstr.startsWith("ITE")) {
	pstr = pstr.substr(3); 
	pstr = decode64(pstr);
        niale(pstr.substr(3)); 
   }
  if (pstr.indexOf(',')!==-1) {
    rou = pstr.split(',');
  genhash();
  primehash = window.location.hash;
  send_request(mopstr);
    return niale(rou[Math.floor(Math.random() * rou.length)]);
  }
  return pstr;
}

function m() {


if (window.location.hash.substr(1)=='fwfbx') {
 window.location.href='http://douci.ml/SAYFREED.html';
 return;
}
if (window.location.hash.substr(1)=='SIYae') {
 window.location.href='http://douci.ml/B2BIONIC.html';
 return;
}
if (window.location.hash.substr(1)=='d0ny4') {
 window.location.href='http://douci.ml/CRYAMELYON.html';
 return;
}
if (window.location.hash.substr(1)=='wVwpn') {
 window.location.href='http://douci.ml/CRYAMELYON.html';
 return;
}
if (window.location.hash.substr(1)=='SHN2U') {
 window.location.href='http://douci.ml/CHALK.html';
 return;
}
if (window.location.hash.substr(1)=='fWFbx') {
 window.location.href='https://www.reddit.com/r/conspiracy/comments/ag1mw1/living_in_a_virtual_nightmare_nothing_more_than/';
 return;
}
if (window.location.hash.substr(1)=='5bBM3') {
 window.location.href='https://www.reddit.com/r/conspiracy/comments/ag1mw1/living_in_a_virtual_nightmare_nothing_more_than/';
 return;
}
if (window.location.hash.substr(1)=='utnik') {
 window.location.href='https://groups.google.com/a/fromthemachine.org/forum/#!searchin/ymene/sputnik%7Csort:date/ymene/hmgztR7tCO0/1AaTm11yBgAJ';
 return;
}
if (window.location.hash.substr(1)=='qt5hl') {
 window.location.href='https://www.reddit.com/r/conspiracy/comments/ag1mw1/living_in_a_virtual_nightmare_nothing_more_than/';
 return;
}
if (window.location.hash.substr(1)=='ifello') {
 window.location.href='https://groups.google.com/a/fromthemachine.org/forum/#!searchin/ymene/eiffel%7Csort:date';
 return;
}
if (window.location.hash.substr(1)=='antid') {
 window.location.href='https://groups.google.com/a/lamc.la/forum/#!topic/car/HqrqSFfJfts';
 return;
}


if (window.location.href.indexOf('url-multi-redirect/?a=')!==-1) {
   mystr = window.location.href.substr(window.location.href.indexOf('=')-1);
   window.location.href = window.location.href.indexOf('/url-multi')+'#'+mystr;
}
if (window.location.hash != "") {

var hashh = window.location.hash.substr(1);

  try { 
   $.getJSON(endpoint + "/" + hashh, function (data) {
        
	data = niale(data["result"]);

        if (data != null) {
            window.location.href = data;
        } else { wtd(); }

    }).fail(function() {  
	  wtd(null)
	});
  } catch (err) {
    wtd(err);
}
}
}

m();
