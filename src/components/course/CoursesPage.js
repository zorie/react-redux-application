import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions.js';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList.js';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        // setting a local state
        // this.state = {
        //     course: { title: "" }
        // };

        // this.onTitleChange = this.onTitleChange.bind(this);
        // this.onClickSave = this.onClickSave.bind(this);        
    }

    // onTitleChange(event) {
    //     const course = this.state.course;
    //     course.title = event.target.value;
    //     this.setState({course: course});
    // }

    // onClickSave() {
    //     // because we did not set the second parameter in the connect(), 
    //     // we have a dispatch property-function attached to props now
    //     this.props.actions.createCourse(this.state.course);
    // }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;        
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        // optional
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>

                <input 
                    type="submit"
                    value="Add course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}/>

                <CourseList courses={courses}/>                
                {/*<CourseList courses={this.props.courses}/>                */}

            </div>
        );
    }
}

// some validations so the linting will stop complaining
CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    // createCourse: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,    
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

// optional parameter in connect()
function mapDispatchToProps(dispatch) {
    return {
        // createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);