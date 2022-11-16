import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  BackHeader,
  FindMain,
  MemberGrid,
  MemberBox,
  OrangeTextBox,
  MainButton,
} from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Find_member = () => {
  const navigate = useNavigate();
  const goSelectCondition = () => {
    navigate("/select_condition");
  };
  const goBack = () => {
    navigate(-1);
  };

  // const [isActive1, setIsActive1] = useState(false);
  // const [isActive2, setIsActive2] = useState(false);
  // const [isActive3, setIsActive3] = useState(false);
  // const [isActive4, setIsActive4] = useState(false);

  // let count = 0;

  // const handleClick = (member) => {
  //   count++;
  //   console.log(count);

  //   if (true) {
  //     if ((member = "a")) {
  //       setIsActive1(!isActive1);
  //     } else if ((member = "b")) {
  //       setIsActive2(!isActive2);
  //     } else if ((member = "c")) {
  //       setIsActive3(!isActive3);
  //     } else if ((member = "d")) {
  //       setIsActive4(!isActive4);
  //     } else {
  //       setIsActive1(!isActive1);
  //       setIsActive2(!isActive2);
  //       setIsActive3(!isActive3);
  //       setIsActive4(!isActive4);
  //     }
  //   }
  // };

  const handleColor = (e) => {
    if (e.target.type === "button") {
      e.target.classList.toggle("change");
      if (e.target.classList.contains("change")) {
        e.target.style.backgroundColor = "orange";
      };
    };
  };

  // var a = false
  // var b = false
  // var c = false
  // var d = false

  // const Change_Color = (member) => {
  //   if (member='a'){
  //     a = true;
  //     b = false;
  //     c = false;
  //     d = false;
  //   } else if (member='b') {
  //     a = false;
  //     b = true;
  //     c = false;
  //     d = false;
  //   } else if (member='c') {
  //     a = false;
  //     b = false;
  //     c = true;
  //     d = false;
  //   } else if (member='d') {
  //     a = false;
  //     b = false;
  //     c = false;
  //     d = true;
  //   }

  // };

  // const [back1, setOrange1] = useState("transparent");
  // const [back2, setOrange2] = useState("transparent");
  // const [back3, setOrange3] = useState("transparent");
  // const [back4, setOrange4] = useState("transparent");

  // const toggleBackground1 = () => {
  //   setOrange1((back1) => !back1);
  // };
  // const toggleBackground2 = () => {
  //   setOrange2((back2) => !back2);
  // };
  // const toggleBackground3 = () => {
  //   setOrange3((back3) => !back3);
  // };
  // const toggleBackground4 = () => {
  //   setOrange4((back4) => !back4);
  // };

  return (
    <>
      <BackHeader>
        <FontAwesomeIcon
          onClick={goBack}
          icon={faArrowLeft}
          style={{ padding: "25px 0 0 23px", color: "" }}
        />
      </BackHeader>
      <FindMain>
        <p className="score600" style={{ fontSize: "100%", marginTop: "20px" }}>
          당신이 찾는 팀원은 누구인가요?
        </p>
        <OrangeTextBox className="score600" style={{ marginTop: "40px" }}>
          당신이 찾는 팀원의 분야를 선택해주세요!
        </OrangeTextBox>
        <MemberGrid>
          <MemberBox onClick={handleColor} type="button">
            <img
              src="/img/members/product_planner.png"
              alt="product_planner.png"
              style={{ height: "62px", marginBottom: "20px" }}
            />
            <p className="score600">기획자</p>
          </MemberBox>
          <MemberBox onClick={handleColor} type="button">
            <img
              src="/img/members/developer.png"
              alt="developer.png"
              style={{ height: "62px", marginBottom: "20px" }}
            />
            <p className="score600">개발자</p>
          </MemberBox>
          <MemberBox onClick={handleColor} type="button">
            <img
              src="/img/members/designer.png"
              alt="designer.png"
              style={{ height: "62px", marginBottom: "20px" }}
            />
            <p className="score600">디자이너</p>
          </MemberBox>
          <MemberBox onClick={handleColor} type="button">
            <img
              src="/img/members/maketer.png"
              alt="maketer.png"
              style={{ height: "62px", marginBottom: "20px" }}
            />
            <p className="score600">마케터</p>
          </MemberBox>
        </MemberGrid>
        <MainButton
          onClick={goSelectCondition}
          type="button"
          className="score600"
          style={{ padding: "1px 25px", fontSize: "15px", marginTop: "70px" }}
        >
          다음
        </MainButton>
      </FindMain>
      <Footer />
    </>
  );
};

export default Find_member;
