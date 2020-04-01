//실습. Destructuring and Set 활용

/*lotto 번호 만들기.
    1. 유일한 값을 추출하는 과정에서 Set을 사용하기
    2. getRandomNumber함수에 변수를 전달하는 과정에서
        Destructuring을 사용해본다
*/

const SETTING = {
    name : "LUCKY LOTTO!",
    count : 6,
    maxNumber : 45
  }
  
  function getRandomNumber({maxNumber,count}){
    //랜덤한 유일한 숫자값을 추출
   let lottoSet = new Set();
   for(; lottoSet.size < count;){
     lottoSet.add(Math.floor(Math.random() * (maxNumber-1))+1);
   }
    return lottoSet;
  }
  
  console.log(getRandomNumber(SETTING));
  
  