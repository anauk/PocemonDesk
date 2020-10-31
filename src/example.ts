


let tsString: string = 'srt';
tsString = '9';

const sum = (arr: number[]) => arr.reduce((a,b) => a+b);

console.log(sum([1, 2]));

const tsNum = 3;
const tsSt = 'str';
const result = tsNum + tsSt;
const result1 = tsNum - +tsSt;
const result2 = +tsSt - tsNum;

type StringOrNumber = string | number;
const stringOrNumber: StringOrNumber  = 'str';
const stringOrNumber1: StringOrNumber = '1';
const stringOrNumber2: StringOrNumber = 1;

type AllUnionTypeAlias = string | number | null | undefined | boolean | symbol | void | bigint | object | [];

// 1. const arrTs: number[] = [1, 3, 5];
// 2. const arrTs: (number | string)[] = [1, 3, 5];
// type AliasTs = (number | string);
// 3. const arrTs: AliasTs[] = [1, 3, 5];
//  const arrTs: Array<AliasTs> = [1, 3, 5];

const nextArr: [number, string] = [1, 'edr']


