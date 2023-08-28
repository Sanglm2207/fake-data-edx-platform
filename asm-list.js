var faker = require('faker');

function asmList() {
    var data = {
        "Status_res": "",
        "expired_time": "",
        "assessment_element_list": []
    };

    var Status_res1 = ['Input Matched', 'Cannot Find'];
    var statusValues = {
        'NULL': 1,
        'File Submitted': 2,
        'Submitted': 3,
        'Assigned': 4,
        'Passed': 5,
        'Not Passed': 6
    };

    var assignmentElementTitles = ['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5', 'Assignment 6'];
    var otherElementTitles = ['Lab', 'Final Exam'];

    for (var id = 0; id < 10; id++) {
        let asssessment_element_title = faker.random.arrayElement([...assignmentElementTitles, ...otherElementTitles]);
        let statusLabel = faker.random.arrayElement(Object.keys(statusValues));
        let statusValue = statusValues[statusLabel];
        let Status_res = faker.random.arrayElement(Status_res1);
        let expired_date = faker.date.between("2018-01-01", "2018-07-31");
        let expired_time = `${expired_date.getDate().toString().padStart(2, '0')}/${(expired_date.getMonth() + 1).toString().padStart(2, '0')}/${expired_date.getFullYear()}`;
        
        let asssessment_type_title = '';
        if (assignmentElementTitles.includes(asssessment_element_title)) {
            asssessment_type_title = 'Assignment';
        } else if (asssessment_element_title === 'Lab') {
            asssessment_type_title = 'Lab';
        } else if (asssessment_element_title === 'Final Exam') {
            asssessment_type_title = 'Final Exam';
        }

        data.Status_res = Status_res;
        data.expired_time = expired_time;

        data.assessment_element_list.push({
            "asssessment_element_title": asssessment_element_title,
            "asssessment_type_title": asssessment_type_title,
            "option": ["1", "2"],
            "Required_File": true,
            "Required_Interview": true,
            "Status": statusValue,
            "Mark": faker.random.number({ min: 0, max: 10 }),
            "Review_times": faker.random.number(1),
            "Review_times_max": faker.random.number(1)
        });
    }

    return data;
}

module.exports = asmList;
