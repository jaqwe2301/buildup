import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
    BackHeader,
    FindMain,
    MemberBoxCover,
    MemberBox,
    OrangeTextBox,
    MainButton,
} from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Find_member = () => {
  const navigate = useNavigate();
  const goSelectCondition = () => {
    navigate("/select_condition");
  };

  var product_planner = false;
  var developer = false;
  var designer = false;
  var maketer = false;

  function product_plannerClick () {
    product_planner = true;
    developer = false;
    designer = false;
    maketer = false;
  };

  function developerClick () {
    product_planner = false;
    developer = true;
    designer = false;
    maketer = false;
  };

  function designerClick () {
    product_planner = false;
    developer = false;
    designer = true;
    maketer = false;
  };

  function maketerClick () {
    product_planner = false;
    developer = false;
    designer = false;
    maketer = true;  
  };

  return (
    <>
      <BackHeader>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ padding: "25px 0 0 23px", color: "" }}
        />
      </BackHeader>
      <FindMain>
        <p className="score600" style={{ fontSize: "100%" }}>당신이 찾는 팀원은 누구인가요?</p>
        <OrangeTextBox className="score600">
            당신이 찾는 팀원의 분야를 선택해주세요!
        </OrangeTextBox>
        <MemberBoxCover>
            <MemberBox onClick={product_plannerClick} type="button" className={(product_planner ? "cover" : "")}>
                <img src="/img/members/product_planner.png" alt="product_planner.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">기획자</p>
            </MemberBox>
            <MemberBox onClick={developerClick} type="button" className={(developer ? "cover" : "")}>
                <img src="/img/members/developer.png" alt="developer.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">개발자</p>
            </MemberBox>
        </MemberBoxCover>
        <MemberBoxCover>
            <MemberBox onClick={designerClick} type="button" className={(designer ? "cover" : "")}>
                <img src="/img/members/designer.png" alt="designer.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">디자이너</p>
            </MemberBox>
            <MemberBox onClick={maketerClick} type="button" className={(maketer ? "cover" : "")}>
                <img src="/img/members/maketer.png" alt="maketer.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">마케터</p>
            </MemberBox>
        </MemberBoxCover>
        <MainButton onClick={goSelectCondition} type="button" className="score600" style={{ padding: "1px 25px", fontSize: "15px"}}>
                다음
        </MainButton>
      </FindMain>
    </>
  );
};

export default Find_member;