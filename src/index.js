module.exports = function check(str, bracketsConfig) {
    
    for (i = str.length; i > 0; --i){
        for (j = 0; j < bracketsConfig.length; j++){
            let temp = bracketsConfig[j].join('');
            let indicator = str.includes(temp);
        //  console.log('New =',indicator,temp);
          if (indicator){
            str = str.replace(temp, '');
            console.log(str);
          } ;
        };
      };
      return str === "";
    }

