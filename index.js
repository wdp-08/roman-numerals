function toRoman(num) {
    let roman = {
        I : 1,
        IV : 4,
        V : 5,
        IX : 9,
        X : 10,
        XL : 40,
        L : 50,
        XC : 90,
        C : 100,
        CD : 400,
        D : 500,
        CM : 900,
        M : 1000
    }
    let str = '';

    for (let i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }
    return str;
}

// Drive code
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("——————|——————————|———————");
console.log("4     | IV       | ", toRoman(4));
console.log("9     | IX       | ", toRoman(9));
console.log("13    | XIII     | ", toRoman(13));
console.log("1453  | MCDLIII  | ", toRoman(1453));
console.log("1646  | MDCXLVI  | ", toRoman(1646));
