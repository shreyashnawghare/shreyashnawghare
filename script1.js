var request=new XMLHttpRequest();
//2.opening a connection(specify the URL)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending a connection 
request.send();
//4.once the server responded successfully then we have to process the data
request.onload=function(){
    var data=JSON.parse(this.response);
    
    for(var i=0;i<250;i++){
     var cname=data[i].name;
     var lang=data[i].latlng;   
     weatherdata(cname,...lang);
    }
}


function weatherdata(name,lat,lang){
    var req=new XMLHttpRequest();
    var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=0ddf743715e8d23728ec100c0bfe87fe'
    req.open('GET',url,true);
    req.send();
    req.onload=function(){
     var data=JSON.parse(this.response);
     console.log(`${name} : ${data.main.temp}`)
    
    }
    }
