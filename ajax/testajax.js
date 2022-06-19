var req = new XMLHttpRequest();
req.onreadystatechange = function (){

if (req.readystate== req.DONE && req.status==200){
	console.log(req.responseText);
}

}
req.open("Get" ,"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest");
req.send();

