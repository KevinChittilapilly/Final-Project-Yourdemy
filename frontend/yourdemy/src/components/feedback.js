import React from "react";

function FeedbackForm() {
    return (
        <div className="container feedbackform">
            <h2>Feedback Form</h2>
            <form action="submit_feedback.php" method="post">
                <label htmlFor="videoLength">Were the options provided for video chunk length suitable for the course?</label><br />
                <input type="radio" id="yes_videoLength" name="videoLength" value="Yes" />
                <label htmlFor="yes_videoLength">Yes</label>
                <input type="radio" id="no_videoLength" name="videoLength" value="No" />
                <label htmlFor="no_videoLength">No</label><br /><br />
                
                <label htmlFor="options">If no, what options would you like to have?</label><br />
                <select id="options" name="options">
                    <option value="15">15 mins</option>
                    <option value="20">20 mins</option>
                    <option value="10">10 mins</option>
                    <option value="25">25 mins</option>
                    <option value="30">30 mins</option>
                </select><br /><br />

                <label htmlFor="quizOptions">Were the options for suitable for you?</label><br />
                <input type="radio" id="yes_quizOptions" name="quizOptions" value="Yes" />
                <label htmlFor="yes_quizOptions">Yes</label>
                <input type="radio" id="no_quizOptions" name="quizOptions" value="No" />
                <label htmlFor="no_quizOptions">No</label><br /><br />

                <label htmlFor="quizOptions">If no, what options would you like to have?</label><br />
                <select id="quizOptions" name="quizOptions">
                    <option value="15">Quiz every 15 mins</option>
                    <option value="20">Quiz every 20 mins</option>
                    <option value="10">Quiz half way through</option>
                    <option value="25">Quiz at the end of the module</option>
                    <option value="30">Quiz at the end of the course</option>
                </select><br /><br />
                
                <label htmlFor="suggestions">What suggestions would you have to improve the website?</label><br />
                <textarea id="suggestions" name="suggestions"></textarea><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FeedbackForm;
