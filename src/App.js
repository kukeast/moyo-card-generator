import * as html2pdf from 'html2pdf.js';
import queryString from 'query-string';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Logo from './assets/logo';
import { GlobalStyle } from './global-style';

const Wrapper = styled.div`
  cursor: pointer;
`

const Card = styled.div`
  width: 347px;
  height: 195px;
  background-color: #FFFFFF;
  display: flex;
  padding: 29.5px 30.5px 30px;
  box-sizing: border-box;
`
const FrontCard = styled(Card)`
  justify-content: space-between;
  align-items: flex-end;
`
const TextBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`
const BackCard = styled(Card)`
  align-items: center;
  justify-content: center;
`
const Font13 = styled.p`
  font-size: 13px;
  font-weight: bold;
`
const Font11 = styled.p`
  font-size: 11px;
`
const Job = styled(Font11)`
  margin-top: 4px;
`
const Address = styled(Font11)`
  margin-top: 4px;
  font-weight: 500;
`
const PhoneNumber = styled(Font11)`
  
`
const Email = styled(Font11)`
  margin-top: 3px;
`
const SmallLogo = styled(Logo)`
  margin-bottom: -2px;
`
const WebUrl = styled(Font11)`
  color: #868E96;
  margin-top: 10px;
`
function App() {
  const cardRef = useRef();
  const params = queryString.parse(window.location.search);
  console.log(params)
  var opt = {
    filename:     `${params.name} 명함.pdf`,
    html2canvas:  { scale: 30 },
    pagebreak: { mode: 'avoid-all', after: '.card' },
    jsPDF:        { unit: 'mm', format: [52, 92], orientation: 'landscape' }
  };
  const aa = () => {
    html2pdf().set(opt).from(cardRef.current).save();
  }
  return (
    <>
      <GlobalStyle/>
      <Wrapper onClick={() => aa()} ref={cardRef}>
        <FrontCard className="card" >
          <TextBox>
            <div>
              <Font13 className='ko'>{params.name ? params.name : '이름'}</Font13>
              <Job className='en'>{params.job ? params.job : 'Job'}</Job>
            </div>
            <div>
              <PhoneNumber className='en'>{params.phone ? params.phone : 'PhoneNumber'}</PhoneNumber>
              <Email className='en'>{params.email ? params.email : 'Email@moyoplan.com'}</Email>
              {params.address === 'TRUE' && <Address className='ko'>서울 강남구 테헤란로20길 20, 8층</Address>}
              <WebUrl className='en'>www.moyoplan.com</WebUrl>
            </div>
          </TextBox>
          <SmallLogo width={79}/>
        </FrontCard>
        <BackCard className="card">
          <Logo width={127}/>
        </BackCard>
      </Wrapper>
    </>
  );
}

export default App;
