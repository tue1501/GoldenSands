function showPhoneNumber() {
    // Hiển thị số điện thoại trong thông báo
    alert("Số điện thoại liên hệ là: 0969194193");
}

function confirmLogout(event) {
    // Ngừng hành động mặc định của liên kết
    event.preventDefault();
    
    // Hiển thị hộp thoại xác nhận
    const isConfirmed = confirm("Bạn có chắc chắn muốn đăng xuất?");
    
    // Nếu người dùng xác nhận, chuyển hướng đến trang login.html
    if (isConfirmed) {
        window.location.href = "login.html";  // Chuyển hướng đến trang đăng nhập
    } else {
        // Nếu người dùng không xác nhận, không làm gì (không chuyển trang)
        console.log("Đăng xuất bị hủy bỏ.");
    }
}

let currentPage = 0; // Biến lưu trữ trang hiện tại

// Hàm hiển thị trang hiện tại
function showPage(pageIndex) {
    const rooms = document.querySelectorAll('.rooms');
    const dots = document.querySelectorAll('.dots span');

    rooms.forEach((room, index) => {
        room.classList.remove('active');
        if (index === pageIndex) {
            room.classList.add('active');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === pageIndex) {
            dot.classList.add('active');
        }
    });
}

// Hàm chuyển đến trang trước
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

// Hàm chuyển đến trang tiếp theo
function nextPage() {
    const rooms = document.querySelectorAll('.rooms');
    if (currentPage < rooms.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}
let currentIndex = 0;
const slides = document.querySelectorAll('.hero .slider .slide');

// Hàm đổi ảnh mỗi 3s
function changeImage() {
    slides[currentIndex].classList.remove('active'); // Ẩn ảnh hiện tại
    currentIndex = (currentIndex + 1) % slides.length; // Chuyển sang ảnh tiếp theo
    slides[currentIndex].classList.add('active'); // Hiển thị ảnh tiếp theo
}

// Thực hiện thay đổi ảnh mỗi 3s
setInterval(changeImage, 2000);

// Khởi tạo ảnh đầu tiên là visible
slides[currentIndex].classList.add('active');


// Gọi hàm `showPage` khi trang được tải lần đầu
window.onload = function() {
    showPage(currentPage);
};
