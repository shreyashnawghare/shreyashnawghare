var request=new XMLHttpRequest();
//2.opening a connection(specify the URL)
request.open('GET','https://api.covid19api.com/summary',true);
//3.sending a connection 
request.send();
//4.once the server responded successfully then we have to process the data
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);


        console.log(data.Global);
    
    }


