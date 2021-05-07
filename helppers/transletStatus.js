export const translateStatus = (status) => {
  if (status === "Paid") return "จ่ายเงินแล้ว";
  else if (status === "Shipping") return "กำลังส่งสินค้า";
  else if (status === "Success") return "ดำเนินการเสร็จสิ้น";
  else return "ยกเลิกออเดอร์";
};
