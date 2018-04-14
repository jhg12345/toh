/**
 * Created by eastflag on 2016-10-14.
 */
// 1. 아래의 내용을 리터럴 객체로 담는 array list를 생성하시오.
//title	          price	  author	order
//--------------------------------------
//콩쥐팥쥐	      20000	  미상	  1
//흥부놀부	      25000	  미상	  2
//자바의정석	    35000	  정석	  3
//안드로이드정복	15000	  김상형	4
var books = [
      {title: "콩쥐팥쥐", price: 20000, author: "미상", order: 1},
      {title: "흥부놀부", price: 25000, author: "미상", order: 2},
      {title: "자바의정석", price: 35000, author: "정석", order: 3},
      {title: "안드로이드정복", price: 15000, author: "김상형", order: 4},
    ],
    // arr배열에 있는 title 값을 concat 함.
    fnBooksAllTitle = ((arr) => {
      var strTitle = '';
      arr.forEach((val, index) => (index === 0)?strTitle = val.title:strTitle = [strTitle, val.title].join(', '));
      return strTitle;
    }),
    // books에 추가할 배열 값
    specialBook = {title: "이것이자바다", price: 40000, author: "김상형", order: 5};

console.log('1. books array list create complete');
// 2. books의 type은 무엇인가? 자바스크립트의 타입은 몇가지가 있는가?
console.log('2. ㄱ) books type -> ['+typeof books+']');

  // javascript 타입 확인 배열
var jsTypeArr = ['aaa'
      ,123
      ,true
      ,{'id':1}
      ,new String('aaa')
      ,null
      ,() => a = a+1
      ,Symbol()
    ];
var fnObjectYn = (jsType) => (jsType instanceof Object)?'Y':'N';

console.log('   ㄴ) 자바스크립트 타입 -> string, number, boolean, object(array, String, null), function, symbol, undefined');
console.log('                            Object -> String, array, function');
console.log('       [참고] null, Object를 instanceof한 결과 -> ' + (jsTypeArr[5] instanceof Object));
console.log('       [아래는 arr에 데이터를 넣고 typeof한 결과와 데이터가 Object인지 instanceof한 결과임.]');
jsTypeArr.forEach((jsType, index) => console.log("       ["+index+"] -> type ["+typeof jsType+"], Object Y/N ["+fnObjectYn(jsType)+"]"));
console.log('       [last] -> type ['+typeof jsTypeArr[jsTypeArr.length]+'], Object Y/N ['+fnObjectYn(jsTypeArr[jsTypeArr.length])+']');
// typeof     : 변수의 primitive 타입을 스트링으로 return. null도 object로 return 함.
// instanceof : 변수의 prototype 의 chain 2번째 인자와 비교하여 true/false 값 return

console.log(jsTypeArr[8] instanceof Object);

//3. 맨 앞쪽에 이것이자바다, 40000, 김상형, 5를 추가하시오 (힌트: unshift)
books.unshift(specialBook);
console.log('3. Add a Special Book in front of books       -> ('+fnBooksAllTitle(books)+')');
//4. 맨 앞쪽에 추가한것을 지우시오,
books.splice(0,1);
console.log('4. Delete the first one added                 -> ('+fnBooksAllTitle(books)+')');
// 5. 맨 뒷쪽에 추가하시오. (힌트: push)
books.push(specialBook);
console.log('5. Add a Special Book at the end of books     -> ('+fnBooksAllTitle(books)+')');

// 6. 맨 뒤쪽에 추가한것을 지우시오,
books.splice(books.length-1,1);
console.log('6. Delete this last one added                 -> ('+fnBooksAllTitle(books)+')');

// 7. 흥부놀부와 자바의정석 사이에 삽입하시오. (힌트: splice)
books.splice(2,0,specialBook);
console.log("7. Insert between '홍부놀부' and '자바의정석' -> ("+fnBooksAllTitle(books)+")");
// 8. 방금 삽입한거를 삭제하시오.
books.splice(2,1);
console.log('8. Delete what you just add                   -> ('+fnBooksAllTitle(books)+')');

// 9. 원본 배열에서 자바의 정석을 찾아서 저자를 남궁성으로 바꾸시오(힌트: forEach)
books.forEach((book, index, arr) => (book.title === '자바의정석')?book.title = '남궁성':book.title=book.title);
console.log("9. books '자바의정석' search '남궁성' change  -> ("+fnBooksAllTitle(books)+')');

// 10. 책의 총 비용을 출력하시오
var sumPrice = 0;
books.forEach(book => sumPrice = sumPrice + book.price);
console.log("10. books sum Price                           -> ("+sumPrice+')');

// // 11. 제목앞에 판매순위를 등수를 붙인 새로운 배열을 생성하시오.(힌트: map)
// var newBooks = books.map((book, index) => {
//       return {'title':[book.order, book.title].join("등 ")
//               ,'price':book.price
//               ,'author':book.author
//               ,'order':book.order};
//     });

var newBooks = books.map((book) => Object.assign({},book, {title:[book.order, book.title].join("등 ")}));
//newBooks = newBooks.map(book => book.title = [book.order, book.title].join("등 "));

console.log("11. order + title = newBooks                  -> ("+fnBooksAllTitle(newBooks)+')');
console.log("                    books                     -> ("+fnBooksAllTitle(books)+')');

// 12. 새로운 배열을 만들되 3등안에 있는것만 따로 만든다. (힌트: filter)
var newBooks2 = newBooks.filter(book => book.order <= 3);
console.log("12. order 3등안에 있는 것 newBooks2           -> ("+fnBooksAllTitle(newBooks2)+')');
console.log("                          newBooks            -> ("+fnBooksAllTitle(newBooks)+')');
console.log("                          books               -> ("+fnBooksAllTitle(books)+')');
