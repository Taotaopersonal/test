/** 生成范围随机数Min生成范围最小值,Max生成范围最大值 **/
function RandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.floor(Rand * Range); //舍去
  return num;
}
/** len生成数组的长度，min生成数最小值，max生成数的最大值 **/
function RandomArr(len, min, max) {
  if (max - min < len) {
    //可生成数的范围小于数组长度
    return null;
  }
  var hash = [];

  while (hash.length < len) {
    var num = RandomNum(min, max);

    if (hash.indexOf(num) == -1) {
      hash.push(num);
    }
  }
  return hash;
}
/** 数组排序 **/
function sort(targetArr){
  return JSON.parse(JSON.stringify(testArr)).sort((a,b)=>a-b)
}
const testNum = RandomNum(1,100000)
const testArr = RandomArr(100,1,100000)
const sortedArr = sort(testArr)
const index = sortedArr.findIndex(v=> {
  return v >= testNum
})
console.log('测试随机数为',testNum)
console.log('测试随机数组并排序为',sortedArr)
console.log('测试随机数在随机数组中的范围是',index,'-',index+1)