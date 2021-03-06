import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import GlobalStyle from "components/Common/GlobalStyle"
import { AiOutlineMail, AiOutlineGithub, AiOutlineHome } from "react-icons/ai"

const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100vw;
  }
`

const MainAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  margin-bottom: 100px;
  margin-top: 50px;
`

const AbstarctAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  margin-bottom: 100px;
`

const ProjectsAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`

const ContactAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  margin-bottom: 100px;
`

const ContactAreaItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const ContactAreaItem = styled(Link)`
  padding: 30px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`
const ContactAreaMailItem = styled.a`
  padding: 30px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`
const MainHeaderText = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  font-size: 64px;
  font-weight: 800;
  border-top: solid;
  border-top-width: thick;
  border-bottom: solid;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const LinkText = styled(Link)`
  text-decoration: underline;
`
const ImpactText = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
const DescriptionText = styled.div`
  font-size: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const UserNameText = styled.div`
  font-size: 45px;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`

const MainLinkText = styled(Link)`
  font-size: 23px;
  padding: 5px;
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const MailLinkText = styled.a`
  font-size: 23px;
  padding: 5px;
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const SubHeaderText = styled.div`
  font-size: 35px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const NotFoundPage: FunctionComponent = function () {
  return (
    <AboutPageWrapper>
      <GlobalStyle />
      <MainAreaWrapper>
        <MainHeaderText>Growth Is All I need</MainHeaderText>
        <UserNameText>Yongwoo Song</UserNameText>
        <MailLinkText href="mailto:ywsong.dev@kakao.com">
          ywsong.dev@kakao.com
        </MailLinkText>
        <MainLinkText to="http://facerain.club">
          http://facerain.club
        </MainLinkText>
      </MainAreaWrapper>
      <AbstarctAreaWrapper>
        <SubHeaderText>Abstract</SubHeaderText>
        <ImpactText>"????????? ????????? ????????? ?????? ?????? ????????????"</ImpactText>
        <DescriptionText>
          ????????? ????????? ??????????????? ??? ?????? ????????? ????????????{" "}
          <strong>NLP ????????????</strong>??? ????????? ????????????. <br />
          ???????????? <strong>?????? ??????</strong>???{" "}
          <strong>?????? ????????? ??????</strong>??? ????????? ????????????.
          <br />
          ?????? ?????????, ?????????, ???????????? ?????? ???????????????.
          <br />
          ???????????? ??????????????? ????????? ???????????? ??????????????? ????????? ????????? ????????????.
          <br />
          ????????? ?????? ?????????{" "}
          <LinkText to="https://facerain.club">?????? ?????????</LinkText>??? ????????????
          ????????? ????????????. <br />
        </DescriptionText>
      </AbstarctAreaWrapper>

      <ProjectsAreaWrapper>
        <SubHeaderText>Projects</SubHeaderText>
        <DescriptionText>TBA</DescriptionText>
      </ProjectsAreaWrapper>

      <ContactAreaWrapper>
        <SubHeaderText>Contact</SubHeaderText>
        <ContactAreaItemWrapper>
          <ContactAreaItem to="https://facerain.club">
            {" "}
            <AiOutlineHome size={"5em"}></AiOutlineHome>
          </ContactAreaItem>
          <ContactAreaItem to="https://github.com/FacerAin">
            {" "}
            <AiOutlineGithub size={"5em"}></AiOutlineGithub>
          </ContactAreaItem>
          <ContactAreaMailItem href="mailto:ywsong.dev@kakao.com">
            <AiOutlineMail size={"5em"}></AiOutlineMail>
          </ContactAreaMailItem>
        </ContactAreaItemWrapper>
      </ContactAreaWrapper>
    </AboutPageWrapper>
  )
}

export default NotFoundPage
