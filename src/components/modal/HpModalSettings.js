import React from 'react'
import { ToggleTheme } from '../toggle/ToggleTheme';
import "./hp_modal_settings.scss";

export function HpModalSettings({ open, onClose }) {
   

    if (!open) return null


    return (
        <section >
            <div className="modal" id="modal" onClick={(e) => { e.stopPropagation() }}>
                <div className="modal1 flex-switch">
                    <h3 className="header">Settings</h3>
                    <button data-close-btn className="close-btn" onClick={onClose}>&times;</button></div>
                <h4>GLOBAL</h4>
                <div className="flex-switch">
                    <p>Dark Mode</p>
                    <ToggleTheme/>
                </div>
                <div className="flex-switch">
                    <p>Subgraph Health Indicator</p>
                    <sub>
                        <svg
                            viewBox="0 0 24 24"
                            color="textSubtle"
                            width="16px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-8a800401-0 eslIYO">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                        </svg>
                    </sub>
                    <input type="checkbox" className="checkbox1" id="chk1" />
                    <label className="label1" for="chk1">
                        <div className="ball1"></div>
                    </label>
                </div>
            </div>
            
        </section>
    );
}
