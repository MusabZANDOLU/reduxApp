import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      courses: filteredCourses,
    };
    // return state.courses.data;
  });
  const renderedCourses = courses.map((course) => {
    return (
      <div
        key={course.id}
        className="panel"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "15px",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button
          onClick={() => {
            dispatch(removeCourse(course.id));
          }}
          className="button is-danger"
        >
          Sil
        </button>
      </div>
    );
  });
  return <div className="courseList">{renderedCourses}</div>;
}

export default CourseList;
