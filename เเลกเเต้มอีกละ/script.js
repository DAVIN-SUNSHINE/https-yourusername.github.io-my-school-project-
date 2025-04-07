let score = 5; // เริ่มต้นที่ 5 คะแนน

document.getElementById('upload-form').addEventListener('submit', function(event) {
  event.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อส่งฟอร์ม

  // รับข้อมูลจากฟอร์ม
  const name = document.getElementById('name').value;
  const grade = document.getElementById('grade').value;
  const fileInput = document.getElementById('file-input');

  // ตรวจสอบว่ามีการเลือกรูปภาพหรือไม่
  if (fileInput.files.length === 0) {
    document.getElementById('status').innerText = "กรุณาเลือกรูปขยะ!";
    return;
  }

  // หากมีการเลือกไฟล์ ให้เพิ่มคะแนน 5
  score = 5; // กำหนดให้คะแนนเป็น 5 เมื่อทำการส่งทุกครั้ง

  document.getElementById('score').innerText = score;

  // แสดงข้อความสถานะ
  document.getElementById('status').innerText = `${name} ชั้น ${grade} ส่งรูปขยะเรียบร้อยแล้ว! คะแนนปัจจุบัน: ${score}`;

  // เปลี่ยนสีปุ่มหลังจากส่ง
  document.querySelector('button').style.backgroundColor = "#8BC34A";
  setTimeout(() => {
    document.querySelector('button').style.backgroundColor = "#4CAF50";
  }, 1000);

  // เคลียร์ฟอร์มหลังจากการส่ง
  document.getElementById('name').value = '';
  document.getElementById('grade').value = '';
  fileInput.value = '';
});
