function greet(name, faculty) {
    return `สวัสดี ${name} คุณอยู่คณะ ${faculty}!`;
}

const greet_modern = (name, faculty) => `สวัสดี ${name} คุณอยู่คณะ ${faculty}!`;

console.log(greet("Pong", "IT"));
console.log(greet_modern("Pong", "IT"));