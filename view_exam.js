var faker = require('faker');

function view_exam() {

    var data =
    {
        "course_code": "SWQ391x_1.2-A_VN",
        "asssessment_element_title": "Final exam",
        "Status": 5,
        "Mark": 9,
        "Review_times": 1,
        "Review_times_max": 3,
        "date_register": "17/08/2023",
        "time_register": "Evening", // Morning / Afternoon/ Evening
        "datetime_interview": "21:00 17/08/2023",
        "File_link": "https://youtu.be/FudyUokcrG8?si=-z5ikqa1JjYuKgI_",
        "Mentor_email": "xuandta1@funix.edu.vn",
        "Option_selected": "1",
        "Comment_Mentor": "Học viên làm bài tốt, hiểu bài",
        "Criteria_detail": [
            
        ]
    };

    return data;
}

module.exports = view_exam;
