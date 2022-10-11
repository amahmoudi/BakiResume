import React from "react";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
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
    }
];

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="text-center text-white p-0 pt-2 mt-auto footer">
            <div className="container-fluid p-4 pb-0">
                <section className="mb-4">
                    {contactArray.map((contact, index) => (
                        <>
                            <a
                                key={contact.type}
                                rel="noreferrer"
                                target="_blank"
                                className="btn btn-primary btn-floating m-1 contact-link"
                                href={contact.reference}
                                role="button"
                                data-tip={t(contact.type)}
                            >
                                <FontAwesomeIcon icon={contact.icon} />
                            </a>
                            <ReactTooltip place="top" type="dark" effect="float" />
                        </>
                    ))}
                </section>
            </div>
            <div className="text-center p-3 copyright">
                © 2022 Copyright: Abdelbaki Mahmoudi
            </div>
        </footer>
    );
}