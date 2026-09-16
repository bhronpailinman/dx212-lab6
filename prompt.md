## Part A: Prompt แย่ vs Prompt ดี

### Prompt A1 (ตั้งใจให้แย่)
- **Prompt ที่ใช้:** "เขียนฟังก์ชันคำนวณค่ารถด้วย JavaScript ให้หน่อย"
- **ผลลัพธ์ย่อ (เอาโค้ดสั้นๆ อันแรกที่คุณได้มาวางตรงนี้):**
  ```javascript
  function calculateFare(distance, pricePerKm) {
      let fare = distance * pricePerKm;
      return fare;
  }
  let total = calculateFare(10, 5);
  console.log(total);

## Part B — Code Review
- **Prompt ที่ใช้อธิบาย:** "อธิบายโค้ดนี้ทีละบรรทัดให้นักศึกษาปี 2..."
- **การตรวจคำอธิบาย:** ตรวจแล้วถูก
- **Prompt ที่ใช้รีวิว:** "รีวิวโค้ดนี้ในฐานะ senior developer: บอกจุดที่ควรปรับปรุง 3 ข้อ เรียงตามความสำคัญ พร้อมเหตุผลและโค้ดที่แก้แล้ว"
- **ข้อแนะนำที่เลือก:** ใช้ `Number.isFinite()` เช็กค่า NaN/Infinity ตามคำแนะนำข้อที่ 1
- **ข้อที่ไม่เลือก:** ข้อ 2 และ 3 เนื่องจากโครงสร้างเดิมอ่านง่ายอยู่แล้ว และต้องการรักษา Test Cases ตรงตามที่โจทย์ระบุ