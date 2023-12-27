import React, { useContext, useRef } from 'react'
import ResumeContext from '../../context/resumeContext';
import './resume.css'
import html2pdf from 'html2pdf.js'
import { Link } from 'react-router-dom';

export default function Resume() {

    const { userInfo } = useContext(ResumeContext);

    const resumeRef = useRef();

    const handleDownload = () => {
        const resumeElement = resumeRef.current;

        if (resumeElement) {
            const pdfOptions = {
                margin: 10,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            };

            html2pdf().from(resumeElement).set(pdfOptions).save();
        }
    };




    return (
        <>
            <div ref={resumeRef} className='myresume'>
                <section className="profile-container">
                    <header>
                        <div className="name">
                            <h1 style={{ color: 'orange' }}>{userInfo.fullName}</h1>
                        </div>
                        {userInfo.image ? <img src={URL.createObjectURL(userInfo.image)} width="120px" height="120px" alt="profile pic" /> : userInfo.imageUrl && <img src={userInfo.imageUrl} width="120px" height="120px" alt="profile pic" />}
                    </header>
                </section>
                <section className="experience-container">
                    <div className='resume-box'>
                        <h2> WORK EXPERIENCE</h2>
                        <div className='list'>
                            <header>
                                <b>{userInfo.workExperience1.companyName}</b> : <span>{userInfo.workExperience1.timeFrame.from} - {userInfo.workExperience1.timeFrame.to}</span>
                            </header>
                            <header>
                                <b>{userInfo.workExperience2.companyName}</b> : <span>{userInfo.workExperience2.timeFrame.from} - {userInfo.workExperience2.timeFrame.to}</span>
                            </header>
                            <header>
                                <b>{userInfo.workExperience3.companyName}</b> : <span>{userInfo.workExperience3.timeFrame.from} - {userInfo.workExperience3.timeFrame.to}</span>
                            </header>
                        </div>
                    </div>
                </section>
                <section className="education-container">
                    <div className='resume-box'>
                        <h2> EDUCATION</h2>
                        <div className='list'>
                            <header>
                                <b>{userInfo.education1.fieldOfStudys}</b> : {userInfo.education1.timeFrame.from} - {userInfo.education1.timeFrame.to}
                            </header>
                            <header>
                                <b>{userInfo.education2.fieldOfStudys}</b> : {userInfo.education2.timeFrame.from} - {userInfo.education2.timeFrame.to}
                            </header>
                            <header>
                                <b>{userInfo.education3.fieldOfStudys}</b> : {userInfo.education3.timeFrame.from} - {userInfo.education3.timeFrame.to}
                            </header>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <button onClick={handleDownload}>Download as PDF</button>
            </div>
            <Link to={"/ResumesList"}> Back </Link>
        </>
    )
}

