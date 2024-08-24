function showTabContent(tabId) {
    // Ẩn tất cả nội dung tab chính
    var contents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    // Hiển thị nội dung tab chính được chọn
    document.getElementById(tabId).classList.add('active');
    
    // Ẩn tất cả nội dung tab con
    var subContents = document.getElementsByClassName('sub-tab-content');
    for (var j = 0; j < subContents.length; j++) {
        subContents[j].classList.remove('active');
    }
}

function showSubTabContent(subTabId) {
    // Ẩn tất cả nội dung tab con
    var subContents = document.getElementsByClassName('sub-tab-content');
    for (var i = 0; i < subContents.length; i++) {
        subContents[i].classList.remove('active');
    }
    // Hiển thị nội dung tab con được chọn
    document.getElementById(subTabId).classList.add('active');
}
