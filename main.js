/* 
comment
*/

// var val1 = "var変数";
// console.log(val1);

// //var 変数なので値を上書きできる。
// val1 = "uwagaki"
// console.log(val1);

// //再宣言可能な変数
// var val1 = "再宣言"
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数上書き";
// console.log(val2);

// // letは再宣言できない
// let val2 = "再宣言"

// const val3 = "const変数"
// console.log(val3)

// constは上書き不可
// val3 = "test"

// constは再宣言不可
// const val3 = "const変数"
// console.log(val3)

// constで定義したオブジェクトはプロパティの変更可
// const val4 = {
//     name: "test",
//     age: 31
// }
// console.log(val4)
// val4.name = "kkkk"
// val4.address = "fukuoka"
// console.log(val4)

// constで定義した配列もプロパティの変更可
// const val5 = ["dog", "cat"]
// console.log(val5)
// val5[0] = "bird"
// val5.push("lll")
// console.log(val5)

// テンプレート文字列
// const name = "白々さじき";
// const age = 31;

//従来
// const message1 = "私は" + name + "です" + age + "歳です。";
// console.log(message1);

// テンプレート文字列
// const message2 = `私は${name}です${age}歳です`
// console.log(message2)

// アロー関数
// function func1(str) {
//     return str
// }

// const func1 = function (str){
//     return str
// }
// console.log(func1("test"))

//アロー関数 1つの場合は（）なくても動くし、{}やreturnがなくてもいける
// const fun2 = str => str;
// console.log(fun2("funfufn"))

// const fun3 = (num1, num2) => ({
//     hoge: num1,
//     fuga: num2
// });
// console.log(fun3(1,2))

//分割代入
// const myProfile = {
//     name: "白々さじき",
//     age: 31
// }

// const message1 = `名前は${myProfile.name}`
// console.log(message1)

// const { name, age } = myProfile;
// const message2 = `私は${name}です${age}歳です`
// console.log(message2)

// const myProfile = ["白々さじき", 31]
// const message3 = `私は${myProfile[0]}です${myProfile[1]}歳です`
// console.log(message3)

// const [test, tosi] = myProfile
// const message4 = `私は${test}です${tosi}歳です`
// console.log(message4)

// デフォルト値 = 値が設定されてない場合の初期値
// const sayHello = (name = `ゲスト`) => console.log(`こんにちは:${name}さん`)
// sayHello(`test`)

// const myProfile = {
//     age: 31,
// };
// const {age, name = `ゲスト`} = myProfile;
// console.log(age);
// console.log(name);

// オブジェクトの省略記法
// const name = `白々さじき`;
// const age = 31;

// const myProfile = {name,age}
// console.log(myProfile);

// スプレッド構文 ...
//配列の展開

// const arr1 = [1,2];
// 中身をそのまま表示してくれる。
// console.log(...arr1);

// const funSum = (num1, num2) => console.log(num1 + num2);
// console.log(funSum(arr1[0], arr1[1]))
// funSum(...arr1)

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1)
// console.log(num2)
// console.log(arr3)

// 配列のコピー
// const arr4 = [10, 20]
// const arr5 = [3,4]

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6)
// console.log(arr4)
// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// 同一参照になるので、arr8の変更がarr4にも変更される。
// const arr8 = arr4
// arr8[0] = 100
// console.log(arr8)
// console.log(arr4)

// mapやfillterを使った配列の処理
const nameArr = ["yamada", "tanaka", "sirajira"];
// 従来
// for (let index = 0; index < nameArr.length; index++){
//     console.log(`${index +1}番目は${nameArr[index]}`)
// }

// const nameArr2 = nameArr.map((name) => {
//     return name
// });

// console.log(nameArr2)

// nameArr.map((name, index) => console.log(`${name}${index}`));

// filtter
// const numArr = [1,2,3,4,5]
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr)

// const newNameArr = nameArr.map((name) => {
//    if(name === `sirajira`){
//     return name;
//    } 
//    else{
//     return `${name}さん`
//    }
// });
// console.log(newNameArr)

//三項演算子

//ある条件 ? 条件がtrueの時 : 条件がFalseの時
// const val1 = 1 > 2 ? "tureです" : "falseです"
// console.log(val1)

// const num = "1300"
// console.log(num.toLocaleString())

// const formattedNum = typeof num === `number` ? num.toLocaleString() : "数値入れて"
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? "100を超えています" : "セーフ"
// }
// console.log(checkSum(100,20))

// 論理演算子の意味
//truthy falsyについて
// 暗黙的に型の変換をしてくれる。暗黙的にtrueに設定するものをtruthyという
// 逆の場合はfalsyという

// const val = ``;
// if(val){
//     console.log("truthy")
// }
// else{
//     console.log("falthy")
// }

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//     console.log("どっちかTrue")
// }
// if (flag1 && flag2){
//     console.log("両方True")
// }

// ||は左側がtruthyの時にその時点で返却する。
// const num = 122;
// const fee = num || "金額なし"
// console.log(fee);

// && は左側がfalsyの時点で返却する
// const num2 = 0;
// const fee2 = num2 && "設定済み"
// console.log(fee2);


