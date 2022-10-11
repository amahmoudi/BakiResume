import React, {Fragment}  from 'react';
import Boxes from "../../components/Boxes";
import { useTranslation } from 'react-i18next';

export default function Projects({data}) {
    const { t } = useTranslation();
    return (
        <section className="flex-container" id="projectsId">
            <header className="content-header">
                <h1> {t('listProjects')}</h1>
            </header>
            <article className="content-section">
                <Fragment>
                    <Boxes data = {data}/>
                </Fragment>
            </article>
        </section>
    )
}