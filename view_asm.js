var faker = require('faker');

function view_asm() {

    var data =
    {
        "course_code": "WEB101-2A",
        "asssessment_element_title": "Assignment 1",
        "Status": 5,
        "Mark": 9,
        "Review_times": 1,
        "Review_times_max": 3,
        "date_register": "17/08/2023",
        "time_register": "Evening", // Morning / Afternoon/ Evening
        "datetime_interview": "21:00 17/08/2023",
        "File_link": "https://youtu.be/xTyLiqWL3uk?si=9ideF_u-4_LcsAnY",
        "Mentor_email": "mentorabc@funix.edu.vn",
        "Option_selected": "1",
        "Comment_Mentor": "Học viên làm bài tốt, hiểu bài",
        "Criteria_detail": [
            {
                "Weight": 1.5,
                "Criteria_desc": "Quay lại video quá trình cài đặt hệ điều hành trên máy ảo",
                "Criteria_Mark": "Passed",
                "Criteria_Comment": "Đạt yêu cầu",
                "Mandatory": "Bắt buộc"
            },
            {
                "Weight": 1,
                "Criteria_desc": "Quay lại video quá trình cài đặt phần mềm theo yêu cầu: - Unikey - Phần mềm office",
                "Criteria_Mark": 5,
                "Criteria_Comment": "Đạt yêu cầu",
                "Mandatory": "Không bắt buộc"
            }
        ]
    };

    return data;
}

module.exports = view_asm;
