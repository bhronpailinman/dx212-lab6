const calcFare = (distanceKm) => {
    // ตรวจสอบระยะทาง
    if (typeof distanceKm !== "number" || Number.isNaN(distanceKm) || distanceKm < 0) {
        return 0;
    }

    // ปัดเศษกิโลเมตรขึ้น
    const km = Math.ceil(distanceKm);

    // 2 กม.แรก 10 บาท ที่เหลือ กม.ละ 2 บาท
    return km <= 2 ? 10 : 10 + (km - 2) * 2;
};
