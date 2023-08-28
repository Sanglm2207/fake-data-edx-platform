var faker = require('faker');

function asmList() {
    var data = [];
    var statusValues = [null, 'File Submitted', 'Submitted', 'Assigned', 'Passed', 'Not Passed'];
    var assignmentElementTitles = ['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5', 'Assignment 6'];
    var otherElementTitles = ['Lab', 'Final Exam'];
    var Status_res1 = ['Input Matched', 'Cannot Find'];
    
    for (var id = 0; id < 10; id++) {
        let course_code = faker.hacker.phrase();
        let asssessment_element_title = faker.random.arrayElement([...assignmentElementTitles, ...otherElementTitles]);
        let status = faker.random.arrayElement(statusValues);
        let Status_res = '';
        
        // Check Status and set corresponding Status_res
        if (status === 'NULL') {
            Status_res = 'Input Matched';
        } else if (status === 'File Submitted') {
            Status_res = 'Cannot Find Email';
        } else if (status === 'Submitted') {
            Status_res = 'Cannot Find Instant';
        } else {
            Status_res = faker.random.arrayElement(Status_res1);
        }

        // Check if the selected assessment element title is an assignment from 1 to 6
        if (assignmentElementTitles.includes(asssessment_element_title)) {
            var asssessment_type_title = 'Assignment';
        } else if (asssessment_element_title === 'Lab') {
            var asssessment_type_title = 'Lab';
        } else if (asssessment_element_title === 'Final Exam') {
            var asssessment_type_title = 'Final Exam';
        }

        let mark = faker.random.number({ min: 0, max: 10 });
        let review_times = faker.random.number(1);
        let review_times_max = faker.random.number(1);
        let expired_time = faker.date.between("2018-01-01", "2018-07-31").toISOString().split("T")[0];

        data.push({
            "Status_res": Status_res,
            "expired_time": expired_time,
            "assessment_element_list": [
                {
                    // "asssessment_element_id": course_code,
                    "asssessment_element_title": asssessment_element_title,
                    "asssessment_type_title": asssessment_type_title,
                    "option": ["1", "2"],
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

    return data;
}

module.exports = asmList;
