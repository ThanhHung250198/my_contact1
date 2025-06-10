function addContact() {
  // Lấy dữ liệu người dùng nhập
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;

  // Kiểm tra nếu ô nào đó trống thì cảnh báo
  if (name === "" || phone === "") {
    alert("Vui lòng nhập đầy đủ tên và số điện thoại!");
    return;
  }

  // Tạo 1 dòng mới hiển thị tên và số
  var li = document.createElement("li");
  li.textContent = name + " - " + phone;

  // Thêm vào danh sách
  document.getElementById("contact-list").appendChild(li);

  // Xóa ô nhập sau khi thêm
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
}
