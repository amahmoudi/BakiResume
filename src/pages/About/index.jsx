import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Aboutus() {
    const { t } = useTranslation();
    return (
        <section className="flex-container" id="aboutMe">
            <header className="content-header">
                <img
                    src={"./img/myPhoto.jpg"}
                    alt="Abdel Baki"
                    id="imgPerso"
                    className="float-end ms-3 rounded"
                />
            </header>

            <article className="content-section col">
                <p>
                    {t('presentation')}
                    <Link to="/contactus">{t('contactMe')}</Link>.
                </p>
            </article>
        </section>
    );
}