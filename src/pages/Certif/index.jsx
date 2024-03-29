import React from "react";
import { bounceIn } from 'react-animations';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import {isMobile} from 'react-device-detect';


const BounceInAnimation = keyframes`${bounceIn}`;
const BounceInDiv = styled.div`
  animation: infinite 3s ${BounceInAnimation};
`;

export default function Certif() {
    const { t } = useTranslation();
    return (
        <section className="flex-container" id="certificationId">
        <header className="content-header">
        <h2> {t('badges')}</h2> 
        </header>
    <article className="content-section">
        <h1> {t('certifications')} :</h1>
        {!isMobile && <div id="browserCertifId" className="row">
            <div className="col-2">
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/OracleCertif.png"} />
                </BounceInDiv>             
            </div>
            <div className="col-2">
            <BounceInDiv>
                <img alt= "" className="imgSkill" src={"./img/AwsCertif.png"} />
            </BounceInDiv>           
            </div>       
        </div> }
        {isMobile && <div id="mobileCertifId" className="row">
            <div className="col-4">
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/OracleCertif.png"} />
                </BounceInDiv>             
            </div>
            <div className="col-4">
            <BounceInDiv>
                <img alt= "" className="imgSkill" src={"./img/AwsCertif.png"} />
            </BounceInDiv>           
            </div>       
        </div> }
        

    </article>
    </section>

    );
}