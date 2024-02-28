import React from "react";
import { bounceIn } from 'react-animations';
import styled, { keyframes } from "styled-components";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {isMobile} from 'react-device-detect';


const BounceInAnimation = keyframes`${bounceIn}`;
const BounceInDiv = styled.div`
  animation: infinite 3s ${BounceInAnimation};
`;

export default function HomePage() {
    const { t } = useTranslation();
    return (
        <section className="flex-container" id="aboutMe">
        <header className="content-header">
        <h6> {t('welcome')}</h6>
        <h2> {t('iam')}   {t('nom')} </h2>
        <h6> {t('titleProfile')}</h6>
        <h6>
             {t('msgAcc1')}
        </h6>
        <h6>
             {t('msgAcc2')} 
             <a
                                key={'Email'}
                                rel="noreferrer"
                                target="_blank"
                                className="btn btn-primary btn-floating m-1 contact-link"
                                href={'mailto:abdelbaki.mahmoudi@gmail.com'}
                                role="button"
                                data-tip={t('Email')}
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
         </h6>
          
        </header>
    <article className="content-section">
        <h1> {t('skill')} :</h1>
        
        {!isMobile && <div id ="browserdiv" className="row">
            <div className="col-2">
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/methode-agile.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/aws.jpg"} />
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
        </div> }
		
		{isMobile && <div id ="mobilediv" className="row">
            <div className="col-4">
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/methode-agile.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/aws.jpg"} />
                </BounceInDiv>
            </div>
            <div className="col-4">
            <BounceInDiv>
                <img alt= "" className="imgSkill" src={"./img/DevOps.jpg"} />
            </BounceInDiv>
            <BounceInDiv>
                <img alt= "" className="imgSkill" src={"./img/js.jpg"} />
            </BounceInDiv>
            </div>
            <div className="col-4">
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/React.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/Base-de-donnees.jpg"} />
                </BounceInDiv>
            </div>
            <div className="col-4">
                <BounceInDiv>
                    <img alt= ""  className="imgSkill" src={"./img/Java.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/css-banner.jpg"} />
                </BounceInDiv>
            </div>
            <div className="col-4">
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/spring.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= ""  className="imgSkill" src={"./img/sql.jpg"} />
                </BounceInDiv>
            </div>
            <div className="col-4">
                <BounceInDiv>
                    <img alt= ""  className="imgSkill" src={"./img/angular.jpg"} />
                </BounceInDiv>
                <BounceInDiv>
                    <img alt= "" className="imgSkill" src={"./img/node.jpg"} />
                </BounceInDiv>
            </div>
        </div> }

    </article>
    </section>

    );
}