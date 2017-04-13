import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions.js';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        // setting a local state
        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);        
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        // because we did not set the second parameter in the connect(), 
        // we have a dispatch property-function attached to props now
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;        
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />

                <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />                    
            </div>
        );
    }
}

// some validations so the linting will stop complaining
CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

// optional parameter in connect()
// function mapDispatchToProps() {

// }

export default connect(mapStateToProps)(CoursesPage);