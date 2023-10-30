document.addEventListener('DOMContentLoaded', function () {
    // Dữ liệu Mentor - Điền thông tin Mentor vào mảng JSON
    var mentors = [
        {
            id: 1,
            Mentor: "Lê Đình Tư",
            phanloai: "mentor",
            monhoc: "Toán",
            thoigian: "08:00 - 10:00",
            date: "2023-10-30"
        },
        {
            id: 2,
            Mentor: "Nguyễn Ngọc Đại",
            phanloai: "mentor",
            monhoc: "Văn",
            thoigian: "10:00 - 12:00",
            date: "2023-10-30"
        },
        // Thêm thông tin Mentor khác
    ];

    // Lắng nghe sự kiện thay đổi trong các lựa chọn (hoạt động, môn học, ngày, giờ)
    document.getElementById('activity').addEventListener('change', fillterMentors);
    document.getElementById('subject').addEventListener('change', fillterMentors);
    document.getElementById('date').addEventListener('change', fillterMentors);
    document.getElementById('time').addEventListener('change', fillterMentors);

    // Hàm fillter dựa trên các lựa chọn
    function fillterMentors() {
        var selectedActivity = document.getElementById('activity').value;
        var selectedSubject = document.getElementById('subject').value;
        var selectedDate = document.getElementById('date').value;
        var selectedTime = document.getElementById('time').value;

        var filteredMentors = mentors.filter(function (mentor) {
            return mentor.phanloai === selectedActivity &&
                mentor.monhoc === selectedSubject &&
                mentor.date === selectedDate &&
                mentor.thoigian === selectedTime;
        });

        displayMentors(filteredMentors);
    }

    // Hàm đổ dữ liệu Mentor vào bảng "Mentor phụ trách"
    function displayMentors(mentors) {
        var mentorTableBody = document.getElementById('mentor-table-body');
        mentorTableBody.innerHTML = '';

        if (mentors.length > 0) {
            mentors.forEach(function (mentor) {
                var row = document.createElement('tr');
                var selectCell = document.createElement('td');
                var mentorNameCell = document.createElement('td');

                var selectInput = document.createElement('input');
                selectInput.type = 'radio';
                selectInput.name = 'table';
                selectInput.value = mentor.id;

                var mentorName = document.createTextNode(mentor.Mentor);

                selectCell.appendChild(selectInput);
                mentorNameCell.appendChild(mentorName);

                row.appendChild(selectCell);
                row.appendChild(mentorNameCell);

                mentorTableBody.appendChild(row);
            });
        } else {
            // Nếu không có dữ liệu Mentor thỏa mãn, hiển thị "No data"
            var noDataRow = document.createElement('tr');
            var noDataCell = document.createElement('td');
            noDataCell.colSpan = 2;

            var noDataText = document.createTextNode('No data');

            noDataCell.appendChild(noDataText);
            noDataRow.appendChild(noDataCell);

            mentorTableBody.appendChild(noDataRow);
        }
    }

    // Lắng nghe sự kiện khi người dùng nhấn nút "Đặt lịch"
    document.getElementById('book-appointment').addEventListener('click', function () {
        // Ở đây, bạn có thể thực hiện kiểm tra hợp lệ của thông tin người dùng trước khi đặt lịch

        // Sau khi kiểm tra hợp lệ, hiển thị modal xác nhận
        var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
        myModal.show();
    });

    // Mặc định, fillter dữ liệu Mentor khi trang web được tải
    fillterMentors();
});
