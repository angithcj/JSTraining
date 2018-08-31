function printLanguage(country){

      return function(){
        if(country=="America"){
          console.log("language is english");
        }
        if(country=="France"){
          console.log("language is french");
        }
      }
}

var languageAmerica=printLanguage("America");
var languageFrance=printLanguage("France");

languageAmerica();
languageFrance();
