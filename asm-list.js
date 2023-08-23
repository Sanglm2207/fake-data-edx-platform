var faker = require('faker');

function asmList() {
    var messages = [];
    for (var id = 0; id < 10; id++) {
        
        let course_code = faker.hacker.phrase();
        let asssessment_element_title = faker.hacker.phrase();
        let status = faker.random.number(1);
        let asssessment_type_title = faker.random.number(1);
        let mark = faker.random.number({ min: 0, max: 10 });
        let review_times = faker.random.number(1);
        let review_times_max = faker.random.number(1);
        let expired_time = faker.date.between("2018-01-01", "2018-07-31").toISOString().split("T")[0];
        messages.push({
            "Status": status,
            "expired_time": expired_time,
            "assessment_element_list": [
                {
                    "asssessment_element_id": course_code,
                    "asssessment_element_title": asssessment_element_title,
                    "asssessment_type_title": asssessment_type_title,
                    "option": ["1","2"],
                    "Required_File": true,
                    "Required_Interview": true,
                    "Status": status,
                    "Mark": mark,
                    "Review_times": review_times,
                    "Review_times_max": review_times_max
                }
            ]
        });
    }

    return { messages };
}

module.exports = asmList;
