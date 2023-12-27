import React from 'react'
import './resumeCard.css'
import { useContext } from 'react';
import ResumeContext from '../../context/resumeContext';

export default function ResumeCard() {

    const { userInfo } = useContext(ResumeContext);

    return (
        <div className='resume'>
            <section className="profile-container">
                <header>
                    <div className="name">
                        <h3 style={{ color: 'orange' }}>{userInfo.fullName}</h3>
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
    )
}