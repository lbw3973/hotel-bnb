import React from 'react'
import * as S from './Footer.style.jsx'
// import { FooterIconBlog, FooterIconFacebook, FooterIconInstagram, FooterIconTwitter } from '@/assets/index.js'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterTop>
        <S.FooterTopItem>
          <S.FooterTopItemTitle>에어비앤비 지원</S.FooterTopItemTitle>
          <S.FooterTopItemText>도움말 센터</S.FooterTopItemText>
          <S.FooterTopItemText>에어커버</S.FooterTopItemText>
          <S.FooterTopItemText>장애인 지원</S.FooterTopItemText>
          <S.FooterTopItemText>예약 취소 옵션</S.FooterTopItemText>
          <S.FooterTopItemText>에어비앤비의 코로나19 대응 방안</S.FooterTopItemText>
          <S.FooterTopItemText>이웃 민원 신고</S.FooterTopItemText>
        </S.FooterTopItem>
        <S.FooterTopItem>
          <S.FooterTopItemTitle>커뮤니티</S.FooterTopItemTitle>
          <S.FooterTopItemText>Airbnb.org: 재난 구호 숙소</S.FooterTopItemText>
          <S.FooterTopItemText>차별 철폐를 위한 노력</S.FooterTopItemText>
        </S.FooterTopItem>
        <S.FooterTopItem>
          <S.FooterTopItemTitle>호스팅</S.FooterTopItemTitle>
          <S.FooterTopItemText>당신의 공간을 에어비앤비하세요</S.FooterTopItemText>
          <S.FooterTopItemText>호스트를 위한 에어커버</S.FooterTopItemText>
          <S.FooterTopItemText>호스팅 자료 둘러보기</S.FooterTopItemText>
          <S.FooterTopItemText>커뮤니티 포럼 방문하기</S.FooterTopItemText>
          <S.FooterTopItemText>책임감 있는 호스팅</S.FooterTopItemText>
        </S.FooterTopItem>
        <S.FooterTopItem>
          <S.FooterTopItemTitle>에어비앤비</S.FooterTopItemTitle>
          <S.FooterTopItemText>뉴스룸</S.FooterTopItemText>
          <S.FooterTopItemText>새로운 기능에 대해 알아보기</S.FooterTopItemText>
          <S.FooterTopItemText>에어비앤비 공동창업자의 메세지</S.FooterTopItemText>
          <S.FooterTopItemText>채용정보</S.FooterTopItemText>
          <S.FooterTopItemText>투자자 정보</S.FooterTopItemText>
        </S.FooterTopItem>
      </S.FooterTop>
      <S.FooterBtm>
        <S.FooterBtmWrapper>
          <div>
            <S.FooterInfo>© 2023 Airbnb, Inc</S.FooterInfo>
            <S.FooterInfo>개인정보 처리방침</S.FooterInfo>
            <S.FooterInfo>이용약관</S.FooterInfo>
            <S.FooterInfo>사이트맵</S.FooterInfo>
            <S.FooterInfo>한국의 변경된 환불 정책</S.FooterInfo>
            <S.FooterInfo>회사 세부정보</S.FooterInfo>
          </div>
          <div className="footerIcons">
            <img src="#" alt="facebook" />
            <img src="#" alt="twitter" />
            <img src="#" alt="instagram" />
            <img src="#" alt="naver blog" />
            <img src="#" alt="github" />
          </div>
        </S.FooterBtmWrapper>
        <S.DivisionLine />
        <S.FooterCopyrightText>
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2,
          D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호:
          IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트,
          080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
          에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다.
          에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당
          서비스를 제공하는 호스트에게 있습니다.
        </S.FooterCopyrightText>
      </S.FooterBtm>
    </S.Footer>
  )
}

export default Footer
