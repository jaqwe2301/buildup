import React from "react";
<<<<<<< Updated upstream

const TeamBuild = () => {
  return <>{/*  여기 작업해 주세요! */}</>;
=======
import {
  Header,
  HeaderTop,
  HeaderRightDiv,
  HeaderRightIcon,
  HeaderTextBox,
  Footer,
  Asd,
} from "../styledComponents";

import { faUserGroup, faBookmark, faEllipsis, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamBuild = () => {
  return (
    <>
      <Header>
        <HeaderTop>
          <img className="headerlog" src="/img/logo.png" alt="buildup_logo.png" />
          <HeaderRightDiv>
            <HeaderRightIcon>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </HeaderRightIcon>
            <HeaderRightIcon>
              <FontAwesomeIcon icon={faEllipsis} />
            </HeaderRightIcon>
          </HeaderRightDiv>
        </HeaderTop>

        <HeaderTextBox>
          <li className="score600 lifirst">공모전</li>
          <li className="score600">대외활동</li>
          <li className="score600">사이드프로젝트</li>
          <li className="score600">창업</li>
        </HeaderTextBox>
      </Header>
      <Asd></Asd>
      <Footer>
        <button>
          <img src="/img/bottomicon.png" alt="bottomicon.png" style={{ height: "40px" }} />
        </button>
        <button>
          <FontAwesomeIcon className="fa-2x" icon={faBookmark} />
        </button>
        <button>
          <FontAwesomeIcon className="fa-2x" icon={faUserGroup} />
        </button>
        <button className="userimgcover">
          <img src="/img/user.png" alt="user.png" className="userimg" />
        </button>
      </Footer>
    </>
  );
>>>>>>> Stashed changes
};

export default TeamBuild;
