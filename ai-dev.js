const calcFare = (distanceKm) => {
    // ตรวจสอบระยะทางให้เป็นตัวเลขจำกัดและไม่ติดลบ
    if (!Number.isFinite(distanceKm) || distanceKm < 0) {
        return 0;
    }

    const roundedDistance = Math.ceil(distanceKm);
    return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

// ทดสอบฟังก์ชันคำนวณค่าโดยสาร
const testCases = [
    { distance: 1, expectedFare: 10 },
    { distance: 2, expectedFare: 10 },
    { distance: 2.1, expectedFare: 12 },
    { distance: 4, expectedFare: 14 },
    { distance: -1, expectedFare: 0 },
    { distance: "2", expectedFare: 0 },
];

testCases.forEach(({ distance, expectedFare }) => {
    const actual = calcFare(distance);
    if (actual !== expectedFare) {
        throw new Error(`ทดสอบไม่ผ่าน สำหรับระยะทาง ${distance} ควรได้ ${expectedFare} แต่ได้ ${actual}`);
    }
});

console.log("ทดสอบ calcFare ผ่านทุกกรณี");