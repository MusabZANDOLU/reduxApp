import React from "react";
import { useSelector } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

function CourseValue() {
  const totalCost = useSelector(({ form, courses: { data, searchTerm } }) => {
    // const filteredCourses = data.filter((course) => //aşağıdaki kod kapanırsa bu şekilde yazılır
    return data
      .filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, course) => acc + course.cost, 0); //aşağıdaki yorumlu satırla aynı işi yapar
    // let cost = 0;
    // for (let course of filteredCourses) {
    //   cost += course.cost;
    // }
    // return cost;
  });
  return (
    <div style={{ textAlign: "right", padding: "30px", fontSize: "30px" }}>
      Toplam Tutar: {totalCost} TL
    </div>
  );
}

export default CourseValue;
