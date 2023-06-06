function toRoman(num) {
  // Tuliskan kode disini
  const romanNumerals = [
    { desimal: 1000, romawi: "M" },
    { desimal: 900, romawi: "CM" },
    { desimal: 500, romawi: "D" },
    { desimal: 400, romawi: "CD" },
    { desimal: 100, romawi: "C" },
    { desimal: 90, romawi: "XC" },
    { desimal: 50, romawi: "L" },
    { desimal: 40, romawi: "XL" },
    { desimal: 10, romawi: "X" },
    { desimal: 9, romawi: "IX" },
    { desimal: 5, romawi: "V" },
    { desimal: 4, romawi: "IV" },
    { desimal: 1, romawi: "I" },
  ];

  let hasil = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].desimal) {
      hasil += romanNumerals[i].romawi;
      num -= romanNumerals[i].desimal;
    }
  }

  return hasil;
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
