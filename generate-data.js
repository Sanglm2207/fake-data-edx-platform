var faker = require('faker');

function generateData() {
    var messages = [];
    for (var id = 0; id < 10; id++) {
        
        let course_code = faker.hacker.phrase();
        let asssessment_element_title = faker.hacker.phrase();
        let status = faker.random.number(1);
        let mark = faker.random.number({ min: 0, max: 10 });
        let review_times = faker.random.number(1);
        let review_times_max = faker.random.number(1);
        let date_register = faker.date.between("2018-01-01", "2018-07-31").toISOString().split("T")[0];
        let time_register =  faker.random.number(1);
        let datetime_interview = faker.date.between("2018-01-01", "2018-07-31").toISOString().split("T")[0];
        messages.push({
            "course_code": course_code,
            "asssessment_element_title": asssessment_element_title,
            "Status": status,
            "Mark": mark,
            "Review_times": review_times,
            "review_times_max": review_times_max,
            "date_register": date_register,
            "time_register": time_register, // Morning / Afternoon/ Evening
            "datetime_interview": datetime_interview,
            "File_link": "https://cdn.theforage.com/vinternships/companyassets/MdKvo8dBLF8h9wCnx/boCQJL8iMAvgjLKmf/1665629767406/image%20(1).pdf",
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
                },
                {
                    "Weight": 1,
                    "Criteria_desc": "Quay lại video quá trình cài đặt phần mềm theo yêu cầu: - Unikey - Phần mềm office",
                    "Criteria_Mark": 5,
                    "Criteria_Comment": "Đạt yêu cầu",
                    "Mandatory": "Không bắt buộc"
                }
            ]
        });
    }

    return { messages };
}

module.exports = generateData;
