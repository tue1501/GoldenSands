// Hàm hiển thị màn hình loading trong 5 giây khi trang được tải
window.addEventListener('load', function() {
    // Lấy phần tử loading
    const loadingContainer = document.getElementById('loading-container');
    const content = document.getElementById('content');
    
    // Hiển thị màn hình loading
    loadingContainer.style.display = 'flex';
    
    // Ẩn loading và hiển thị nội dung sau 5 giây
    setTimeout(() => {
        loadingContainer.style.display = 'none'; // Ẩn loading
        content.style.display = 'block'; // Hiển thị nội dung
    }, 3000); // 5000ms = 5 seconds
});
