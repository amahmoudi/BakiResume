import React from "react";
import { bounceIn } from 'react-animations';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';


const BounceInAnimation = keyframes`${bounceIn}`;
const BounceInDiv = styled.div`
  animation: infinite 3s ${BounceInAnimation};
`;

export default function HomePage() {
    const { t } = useTranslation();
    return (
        <section className="flex-container" id="aboutMe">
        <header className="content-header">
        <h2> {t('welcome')}</h2>
        <h2> {t('iam')}   {t('nom')} </h2>
         <h4> {t('titleProfile')}</h4>
         <h6>
             {t('msgAcc1')}
         </h6>
         <h6>
             {t('msgAcc2')}
         </h6>
        </header>
    <article className="content-section">
        <h1> {t('skill')} :</h1>
        <div className="row">
            <div className="col-2">
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/methode-agile.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/Scrum.jpg"} />
                </BounceInDiv>
            </div>
            <div className="col-2">
            <BounceInDiv>
                <img alt= "" className="imgSkill" src={"./img/DevOps.jpg"} />
            </BounceInDiv>
            <BounceInDiv>
                <img alt= "" className="imgSkill" src={"./img/js.jpg"} />
            </BounceInDiv>
            </div>
            <div className="col-2">
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/React.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/Base-de-donnees.jpg"} />
                </BounceInDiv>
            </div>
            <div className="col-2">
                <BounceInDiv>
                    <img alt= ""  className="imgSkill" src={"./img/Java.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/css-banner.jpg"} />
                </BounceInDiv>
            </div>
            <div className="col-2">
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/spring.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= ""  className="imgSkill" src={"./img/sql.jpg"} />
                </BounceInDiv>
            </div>
            <div className="col-2">
                <BounceInDiv>
                    <img alt= ""  className="imgSkill" src={"./img/angular.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/node.jpg"} />
                </BounceInDiv>
            </div>
        </div>

    </article>
    </section>

    );
}