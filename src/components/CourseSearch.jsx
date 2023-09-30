import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/slices/courseSlice";

function CourseSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.courses.searchTerm;
  });

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3 className="title is-3">Kurslarım</h3>
      <div className="field is-horizontal">
        <label className="label">Ara</label>
        <input
          className="input"
          onChange={(e) => {
            dispatch(changeSearchTerm(e.target.value));
          }}
          value={searchTerm}
        />
      </div>
    </div>
  );
}

export default CourseSearch;
