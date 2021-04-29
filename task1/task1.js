function revertString(str){
  let revertedString = ''
  for (let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
      revertedString += str[i]
    }
  }
  let sortedString = sort(revertedString);
  return sortedString;
}


function sort(str) {
  var sorted = str.split('');
  for (var i = 0; i < sorted.length; i++) {
      for(var j = i + 1; j <= sorted.length - 1; j++) {
        if(sorted[i] > sorted[j]){
          [sorted[i], sorted[j]] = [sorted[j], sorted[i]]
        }
      }
  }
  return sorted.join('');
}

function anagram(arr) {
  let result = []
  let groupWord = {}
  for (let i = 0; i < arr.length; i++) {
    let reverted = revertString(arr[i])
    if(!groupWord[reverted]){
      groupWord[reverted] = [];
      groupWord[reverted].push(arr[i])
    }else{
      groupWord[reverted].push(arr[i])
    }
  }
  for (const key in groupWord) {
    if(Object.hasOwnProperty.call(groupWord, key)) {
      result.push(groupWord[key]);
    }
  }
  return result
}


let test1 = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
console.log(anagram(test1))