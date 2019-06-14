var get_url = function (url, data) {
          var back_data = {};
          url = url.substr(url.indexOf('?') + 1, url.length);
          for (let key in data) {
              back_data[data[key]] = '';
              if(url.indexOf(data[key])>-1){
                back_data[data[key]] = url.substr(url.indexOf(data[key])+data[key].length+1)
                if(url.substr(url.indexOf(data[key])+data[key].length+1).indexOf("&")>-1){
                      back_data[data[key]] = url.substr(url.indexOf(data[key])+data[key].length+1).substr(0,url.substr(url.indexOf(data[key])+data[key].length+1).indexOf("&"));
                }
              }
          }
          return back_data; 
      }
