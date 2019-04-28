var get_url = function(url,data){
    var back_data ={};
    for (let key in data) {
        back_data[data[key]] = '';

        back_data[data[key]] = url.substr(url.indexOf(data[key])+data[key].length+1)
       if(url.substr(url.indexOf(data[key])+data[key].length+1).indexOf("&")>-1){
            back_data[data[key]] = url.substr(url.indexOf(data[key])+data[key].length+1).substr(0,url.substr(url.indexOf(data[key])+data[key].length+1).indexOf("&"));
       }
    }
    return back_data; 
}


 var urldata = get_url(location.search,['id']);
 console.log(urldata);
