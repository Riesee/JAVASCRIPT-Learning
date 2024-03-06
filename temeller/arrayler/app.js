let value;

const numbers = [43,56,33,23,44,35,5];

// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];

// Uzunluk
value = numbers.length;
// İndexleme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];


// Herhangi bir indexteki değiştirme

numbers[2] = 1000;

value = numbers;

// İndex Of

value = numbers.indexOf(1000);

// Arrayin Sonuna değer ekleme - Push

numbers.push(2000);


// Arrayin Başına değer ekleme - unshift

numbers.unshift(3000);



value = numbers;


// Sonundan değer atma

numbers.pop();

value = numbers;

// Başından Değer Atma

numbers.shift();

value = numbers;


// Belirli bir kısmı atma

numbers.splice(0,3);

value = numbers;



// Tersine Çevirme - Reverse


numbers.reverse()

value = numbers;


// Sıralama

numbers.sort(); // sadece ilk rakamına bakıyo

value = numbers;


value = numbers.sort(function(x,y){ // Küçükten büyüğe
    return x - y;
});

value = numbers.sort(function(x,y){ // Büyükten Küçüğe
    return y - x;
});




console.log(value);