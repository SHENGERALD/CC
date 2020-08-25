let weatherdata;
let c=0;
let i=0,j=0;
$.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-079?Authorization=CWB-37CEBCEC-7976-402E-9E74-DB7CA924BC2F', function(data) {
    weatherdata=data;
  
setInterval("showdetail()","2000");
setInterval("showData()","28000");
