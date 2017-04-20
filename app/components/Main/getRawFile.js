let getRawFile = {
    getFile(repo) {
      return fetch('https://api.github.com/repos/'+repo+'/contents/')
      .then((response) => response.json())
      .then((responseJson) => {
      var tes=/README.md/;
      for(var i= 0; i < responseJson.length; i++){
        if(tes.test(responseJson[i].download_url) == true){
          return responseJson[i].download_url
          }
      }
    })
    .catch((error) => {
      console.log(error);
    })
  },
}
module.exports =  getRawFile;
