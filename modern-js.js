function greet(name, faculty) {
    return `สวัสดี ${name} คุณอยู่คณะ ${faculty}!`;
}

const greet_modern = (name, faculty) => `สวัสดี ${name} คุณอยู่คณะ ${faculty}!`;

console.log(greet("Pong", "IT"));
console.log(greet_modern("Pong", "IT"));

const student = { name: "ฟ้า", faculty: "CITU", year: 2 };
const { name, faculty } = student;          // ดึงค่าออกมาเป็นตัวแปร
const updated = { ...student, year: 3 };    // copy แล้วแก้บางค่า
console.log(name, faculty, updated);
