import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Map from "../../components/Map";
import {
    faTwitter,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { useTranslation } from 'react-i18next';

const contactArray = [
    {
        type: "Email",
        reference: "mailto:abdelbaki.mahmoudi@gmail.com",
        icon: faEnvelope,
    },
    {
        type: "Phone",
        reference: "tel:+330612278875",
        icon: faPhone,
    },
    {
        type: "GitHub",
        reference: "https://github.com/amahmoudi",
        icon: faGithub,
    },
    {
        type: "LinkedIn",
        reference: "https://www.linkedin.com/in/abdelbaki-mahmoudi-2a456726/",
        icon: faLinkedin,
    },
    {
        type: "Twitter",
        reference: "https://twitter.com/bakbouk87",
        icon: faTwitter,
    },
];

export default function Contact() {
    const { t } = useTranslation();
    return (
        <article>
        <header>
            <h2 className="h2 article-title">{t('contactMe')}</h2>
        </header>
            <Map/>

        <section className="flex-container " id="contacts">
            <address className="content-section d-flex flex-column flex-sm-row justify-content-between align-items-center">
                <div className="d-inline-block w-100 h-100">
                    <h2 className="mb-2">
                        {t('contactMeMsg')}
                    </h2>
                    <ul className="p-4 d-flex">
                        {contactArray.map((contact) => (
                            <li
                                key={contact.type}
                                className="d-flex justify-content-center align-items-center flex-column col-2"
                            >
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href={contact.reference}
                                    className="contact-anchor d-flex flex-column align-items-center"
                                >
                                    <FontAwesomeIcon className="fa-5x" icon={contact.icon} />
                                    <h3 className="contact-label">{contact.type}</h3>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </address>
        </section>
        </article>
    );
}