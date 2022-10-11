import React from "react";
import { useTranslation } from "react-i18next";
function LanguageSwitcher() {
    const { i18n } = useTranslation();
    return (
            <select className="selectI8n"
                value={i18n.language}
                onChange={(e) =>
                    i18n.changeLanguage(e.target.value)
                }
            >
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="ar">عربي</option>
            </select>
    );
}
export default LanguageSwitcher;