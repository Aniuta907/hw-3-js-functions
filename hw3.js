//task1
function splitAndMerge(str,sp){
    var words = str.split(' ');
    var symbols = [];
    
    for (i=0;i<words.length;i++){
    symbols.push(words[i].split('').join(sp));
    }
    return symbols.join(sp);
    }
    
    console.log(splitAndMerge("Hello World!",","));
    console.log(splitAndMerge("My name is John"," "));


    //task2
    function convert(obj){
        var arr = [];
        var resultArr = [];
        for (var key in obj) {
            arr.push(key,obj[key]);
            resultArr.push(arr);
            arr=[];
        }
        return resultArr;
        }

    console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));


    //task3
    function toCamelCase(str){
        var words = str.split('_').join('-').split('-');
        for (i=1; i<words.length; i++) {
          words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join("");
        }
    
        console.log(toCamelCase("the-stealth-warrior"));
        console.log(toCamelCase("The_Stealth_Warrior"));


    //task4
    function reverseWords(str){
        var words = str.split(' ');
        words = words.map(function(word){
            return word.split("").reverse().join("");
        });
        return words.join(' ');
    }

    console.log(reverseWords(" A fun little challenge! "));


    //task5
    function stringExpansion(str) {
        var characters = str.split('');
        var times = 1;  
        var result = characters.reduce(function(newStr, character) {
          if (isFinite(character)) {
            times = character;
          } else {
            for (var i = 0; i < times;i++) {
            newStr += character;
          }        
          times = 1;
        }
          return newStr;
        }, "");
        return result;
      }

      console.log(stringExpansion('3D2a5d2f') === 'DDDaadddddff');
      console.log(stringExpansion('3d332f2a') === 'dddffaa');
      console.log(stringExpansion('abcde') === 'abcde');


    //task6
    function largest(){
        var max = arguments[0];
        for (var i = 0; i < arguments.length; i++)
            if (arguments[i]>max)
                max = arguments[i];
        return max;
    }

    console.log(largest(2, 0.1, -5, 100, 3)); 

    function smallest(){
        var min = arguments[0];
        for (var i = 0; i < arguments.length; i++)
            if (arguments[i]<min)
                min = arguments[i];
        return min;
    }

    console.log(smallest(2, 0.1, -5, 100, 3)); 


    //task7


    //task8
    function sum(acc){
        if (arguments.length === 1)
            return acc;
        var argsFromSecondEl = [].slice.call(arguments, 1);
        return sum.apply(null, argsFromSecondEl) + acc;
    }

    console.log(sum(1,3,5,7)); 

    
    //task9


    //task10
