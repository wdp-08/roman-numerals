function toRoman(num) {
    let romanNum = [
        {dec : 1000, rom : "M"},
        {dec : 900, rom : "CM"},
        {dec : 500, rom : "D" },
        {dec : 400, rom : "CD" },
        {dec : 100, rom : "C" },
        {dec : 90, rom : "XC" },
        {dec : 50, rom : "L"},
        {dec : 40, rom : "XL"},
        {dec : 10, rom : "L"},
        {dec : 9, rom : "X"},
        {dec : 5, rom : "V"},
        {dec : 4, rom : "IV"},
        {dec : 1, rom : "I"},
    ];
    
let hasil = " "; //variable kosong untuk menyimpan hasil

    for (let i = 0; i < romanNum.length; i++) {
        while (num >= romanNum[i].dec) {
            hasil += romanNum[i].rom;
            num -= romanNum[i].dec;
        }
    }

    return hasil

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
