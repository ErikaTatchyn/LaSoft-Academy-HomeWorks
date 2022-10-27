[1, 2, 3] + {}; // '1,2,3[object Object]';
1 + "3" - 2; // 11 ;
1 + ("3" - 2); //2;
NaN === NaN; //false;
const o = { a: 1 }; //undefined;
o + (1)[(1, 2, 3)] + "a"; //'[object Object]undefineda';
undefined + 1; //Nan
2 / 0; //Infinity
0 / 0; //Nan
const ob = {
  a: 1,
  toString() {
    return this.a;
  },
}; //undefined
ob + 1; //2
