//*************Created By Akshit Gupta*************
import React, { useState, useRef } from "react";
import "./Departments.css";
import list from "./departmentInfo";
import { departmentinfo } from "./DepartmentName";
import { slides } from "./AcadCarouselData";
import Crousel from "../Crousel/Crousel";
import plus from "./Assets/plus.svg";
import minus from "./Assets/minus.svg";
import backArrow from "./Assets/BackArrow.svg";
import forArrow from "./Assets/ForArrow.svg";
import MyMobile from "../../helperComponents/MyMobile";
import MyDesktop from "../../helperComponents/MyDesktop";

const Departments = () => {
  const [background, setBackground] = useState("");
  const [clickBackground, setClickBackground] = useState("");
  const [id, setId] = useState("");
  const myRef = useRef();
  const backgroundColor_List = ["#feba10", "#f96508", "#06ca3d", "#026ba1"];
  const [depPage, setDepPage] = useState(1);

  const OnHoverHandler = () => {
    let indx;
    do {
      indx = Math.floor(4 * Math.random());
    } while (background === backgroundColor_List[indx]);
    setBackground(backgroundColor_List[indx]);
  };

  const handleSelection = (index) => {
    setId(index);
    setClickBackground(background);
    console.log(myRef.current);
    myRef.current.scrollIntoView();
  };

  const handlePageForward = () => {
    if (depPage === 4) {
      return setDepPage(1);
    }
    return setDepPage(depPage + 1);
  };

  const handlePageBackward = () => {
    if (depPage === 1) {
      return setDepPage(4);
    }
    return setDepPage(depPage - 1);
  };

  return (
    <>
      <h1 id="Departments_heading">Departments</h1>
      <div className="containerD">
        <MyMobile>
          {list.map((data, idx) => {
            return (
              <>
                {idx < 6 * depPage && idx >= 6 * (depPage - 1) ? (
                  <div
                    className={`cardD ${
                      idx === id ? "selectedBackground" : ""
                    }`}
                    key={data.id}
                    onClick={() => handleSelection(idx)}
                  >
                    <p>{data.dep}</p>
                  </div>
                ) : null}
              </>
            );
          })}
          <div className="counterDepartment">
            <img src={backArrow} alt="" onClick={handlePageBackward} />
            <div>
              Swipe to navigate <br /> {depPage} of 4
            </div>
            <img src={forArrow} alt="" onClick={handlePageForward} />
          </div>
        </MyMobile>
        <MyDesktop>
          {list.map((data, idx) => {
            return (
              <div
                className="cardD"
                key={data.id}
                onClick={() => handleSelection(idx)}
                onMouseEnter={OnHoverHandler}
                style={{
                  backgroundColor: `${id === idx ? clickBackground : ""}`,
                  coloimppr: `${id === idx ? "#ffff" : ""}`,
                  "--hover_color": background,
                }}
              >
                <p>{data.dep}</p>
              </div>
            );
          })}
        </MyDesktop>
      </div>
      <div ref={myRef}></div>
      <div
        className="crouselDep"
        id="dep"
        style={{ visibility: `${id === "" ? "hidden" : ""}` }}
      >
        {id !== "" ? (
          <>
            <h1 id="Departments_heading">{departmentinfo[id].name}</h1>
            <Crousel slides={slides} />
            <div className="imgDescription_Dep">
              <p>{departmentinfo[id].info1}</p>
              <p>{departmentinfo[id].info2}</p>
              <b>{departmentinfo[id].degree}</b>
              <br />
              <b>
                {departmentinfo[id].bcstats}
                {"  "}
                {departmentinfo[id].correct}
                {"  "}

                <img src={plus} alt="" />
                {"  "}
                {departmentinfo[id].wrong}
                {"  "}
                <img src={minus} alt="" />
              </b>
              <br />
              <div className="button">
                <button>Placement Statistics</button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Departments;
