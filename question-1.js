// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้

inventory.apple.quantity += 100; //1.เพิ่มจำนวนสินค้า Apple จาก 100 เป็น 200
inventory.orange = {price: 20, quantity:300}; //2.เพิ่มสินค้าใหม่ที่ชื่อ "orange" ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก

function totalQuantity() 
{
  let totalQuantity = 0;
  for(let keyQunantity in inventory)
  {
    totalQuantity += inventory[keyQunantity].quantity;
  }
  return totalQuantity;
}

function totalPrice() 
{
  let totalPrice = 0;
  for(let keyPrice in inventory) 
  {
    totalPrice += inventory[keyPrice].price * inventory[keyPrice].quantity;
  }
  return totalPrice;
}
console.log(totalQuantity(inventory)) //3.คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกด้วย Loop
console.log(`Total inventory value: ${totalPrice(inventory)} baht`) // 4.สุดท้าย ให้ Log มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกแสดงออกมาทางหน้าจอ Console ว่า Total inventory value: <total-value> baht

