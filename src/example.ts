
// let tsString: string = 'srt';
// tsString = '9';
//
// const sum = (arr: number[]) => arr.reduce((a,b) => a+b);
//
// console.log(sum([1, 2]));
//
// const tsNum = 3;
// const tsSt = 'str';
// const result = tsNum + tsSt;
// const result1 = tsNum - +tsSt;
// const result2 = +tsSt - tsNum;
//
// type StringOrNumber = string | number;
// const stringOrNumber: StringOrNumber  = 'str';
// const stringOrNumber1: StringOrNumber = '1';
// const stringOrNumber2: StringOrNumber = 1;
//
// type AllUnionTypeAlias = string | number | null | undefined | boolean | symbol | void | bigint | object | [];

// 1. const arrTs: number[] = [1, 3, 5];
// 2. const arrTs: (number | string)[] = [1, 3, 5];
// type AliasTs = (number | string);
// 3. const arrTs: AliasTs[] = [1, 3, 5];
//  const arrTs: Array<AliasTs> = [1, 3, 5];

// const nextArr: [number, string] = [1, 'edr']
// function identity<T>(value: T): T{
//     return value;
// }
// interface MyArr<T> {
//     [n: number]: T;
//     map<U>(fn: (el: T) => U):U[];
// }
// const tsArr: MyArr<number> = [1,2,3,4];
// tsArr.map((i:number)=> i+1);
// tsArr.map((i:number)=> `${i}+1`);
//
// function getLen<T extends Array<any>>(arr: T): number{
//     return arr.length;
// }

const concat = (hello: string, world: string) => hello + ' ' + world;
concat('Hello ', 'World') // -> Hello World;

// interface obTs {
//     howIDoIt: string;
//     simeArray: (number | string)[];
//     withData?: Array<obTs>
// }

interface obTs {
    howIDoIt: string;
    simeArray: Array<number | string>;
    withData?: Array<obTs>
}

const MyHometask: obTs = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [
        { howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }
        ],
}

interface MyArray<T> {
    [N: number]: T;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U): U;
}

const tsArr: MyArray<number> = [1,2,3,4];
tsArr.reduce((a: number, b: number) => a+b);