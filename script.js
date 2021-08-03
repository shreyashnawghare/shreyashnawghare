var request=new XMLHttpRequest();
//2.opening a connection(specify the URL)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending a connection 
request.send();
//4.once the server responded successfully then we have to process the data
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

  var result=data.filter((element)=>element.region==='Asia');
  console.log(result);
  var result1=data.filter((element)=>element.population<200000);
  console.log(result1);

  var result2=data.filter((element)=>{
  for(let i in element.currencies){
  if(element.currencies[i].code ==='USD'){
      return true;
  }
  }
});
  console.log(result2);
    
}
var sum=data.reduce((0,element.countries)=>{
    0+element.countries);
console.log(sum);
}
