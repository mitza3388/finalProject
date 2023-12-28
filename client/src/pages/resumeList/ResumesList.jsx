// import React, { useContext, useEffect, useState } from 'react'
// import ResumeContext from '../../context/resumeContext';
// import './resumesList.css'
// import { Link } from 'react-router-dom';
// import ResumeCard from './ResumeCard';


// export default function ResumesList() {
//   const { userInfo, handleInputChange, getData } = useContext(ResumeContext);
//   const [data, setData] = useState([]);

//   const getMyData = async () => {
//     let temp = await getData();
//     setData(temp);
//   };

//   useEffect(() => {
//     if (userInfo.ownerId) getMyData();
//   }, []);

//   return (
//     <>
//       <h2>Your resumes:</h2>
//       <div className="resume-container">
//         {data.map((resume, index) => (
//           <div key={index}>
//             {handleInputChange({ name: " fullName", value: resume.fullName }, 'fullName')}
//             {handleInputChange({ name: "companyName", value: resume.workExperience1.companyName }, 'workExperience1')}
//             {handleInputChange({ name: "timeFrame.to", value: resume.workExperience1.timeFrame.to }, 'workExperience1')}
//             {handleInputChange({ name: "timeFrame.from", value: resume.workExperience1.timeFrame.from }, 'workExperience1')}
//             {handleInputChange({ name: "companyName", value: resume.workExperience2.companyName }, 'workExperience2')}
//             {handleInputChange({ name: "timeFrame.to", value: resume.workExperience2.timeFrame.to }, 'workExperience2')}
//             {handleInputChange({ name: "timeFrame.from", value: resume.workExperience2.timeFrame.from }, 'workExperience2')}
//             {handleInputChange({ name: "companyName", value: resume.workExperience3.companyName }, 'workExperience3')}
//             {handleInputChange({ name: "timeFrame.to", value: resume.workExperience3.timeFrame.to }, 'workExperience3')}
//             {handleInputChange({ name: "timeFrame.from", value: resume.workExperience3.timeFrame.from }, 'workExperience3')}
//             {handleInputChange({ name: "fieldOfStudys", value: resume.education1.fieldOfStudys }, 'education1')}
//             {handleInputChange({ name: "timeFrame.from", value: resume.education1.timeFrame.from }, 'education1')}
//             {handleInputChange({ name: "timeFrame.to", value: resume.education1.fieldOfStudys }, 'education1')}
//             {handleInputChange({ name: "fieldOfStudys", value: resume.education2.fieldOfStudys }, 'education2')}
//             {handleInputChange({ name: "timeFrame.from", value: resume.education2.timeFrame.from }, 'education2')}
//             {handleInputChange({ name: "timeFrame.to", value: resume.education2.fieldOfStudys }, 'education2')}
//             {handleInputChange({ name: "fieldOfStudys", value: resume.education3.fieldOfStudys }, 'education3')}
//             {handleInputChange({ name: "timeFrame.from", value: resume.education3.timeFrame.from }, 'education3')}
//             {handleInputChange({ name: "timeFrame.to", value: resume.education3.fieldOfStudys }, 'education3')}
//             {handleInputChange({ name: " imageUrl ", value: resume.imageUrl, files: [] }, 'imageUrl')}

//             {/* JSX for each resume */}
//             <ResumeCard />
//           </div>
//         ))}
//         <Link to="/form">Create new resume</Link>
//       </div>
//     </>
//   );
// }
import React, { useContext, useEffect, useState } from 'react'
import ResumeContext from '../../context/resumeContext';
import './resumesList.css'
import { Link } from 'react-router-dom';
import ResumeCard from './ResumeCard';

export default function ResumesList() {

  const { handleInputChange, userInfo } = useContext(ResumeContext);

  const { getData } = useContext(ResumeContext);


  const [data, setData] = useState([])

  const getMyData = async () => {
    let temp = await getData()
    setData(temp)
    console.log(temp);
  }

  useEffect(() => {
    if (userInfo.ownerId) getMyData()

  }, [])


  data?.map((resume) => {
    handleInputChange({ name: " fullName", value: resume.fullName }, 'fullName')
    handleInputChange({ name: "companyName", value: resume.workExperience1.companyName }, 'workExperience1')
    handleInputChange({ name: "timeFrame.to", value: resume.workExperience1.timeFrame.to }, 'workExperience1')
    handleInputChange({ name: "timeFrame.from", value: resume.workExperience1.timeFrame.from }, 'workExperience1')
    handleInputChange({ name: "companyName", value: resume.workExperience2.companyName }, 'workExperience2')
    handleInputChange({ name: "timeFrame.to", value: resume.workExperience2.timeFrame.to }, 'workExperience2')
    handleInputChange({ name: "timeFrame.from", value: resume.workExperience2.timeFrame.from }, 'workExperience2')
    handleInputChange({ name: "companyName", value: resume.workExperience3.companyName }, 'workExperience3')
    handleInputChange({ name: "timeFrame.to", value: resume.workExperience3.timeFrame.to }, 'workExperience3')
    handleInputChange({ name: "timeFrame.from", value: resume.workExperience3.timeFrame.from }, 'workExperience3')
    handleInputChange({ name: "fieldOfStudys", value: resume.education1.fieldOfStudys }, 'education1')
    handleInputChange({ name: "timeFrame.from", value: resume.education1.timeFrame.from }, 'education1')
    handleInputChange({ name: "timeFrame.to", value: resume.education1.fieldOfStudys }, 'education1')
    handleInputChange({ name: "fieldOfStudys", value: resume.education2.fieldOfStudys }, 'education2')
    handleInputChange({ name: "timeFrame.from", value: resume.education2.timeFrame.from }, 'education2')
    handleInputChange({ name: "timeFrame.to", value: resume.education2.fieldOfStudys }, 'education2')
    handleInputChange({ name: "fieldOfStudys", value: resume.education3.fieldOfStudys }, 'education3')
    handleInputChange({ name: "timeFrame.from", value: resume.education3.timeFrame.from }, 'education3')
    handleInputChange({ name: "timeFrame.to", value: resume.education3.fieldOfStudys }, 'education3')
    handleInputChange({ name: " image ", value: resume.image, files: [] }, 'image')
  })



  return (
    <>
      <h2>Your resumes:</h2>
      <div className="resume-container">
        {data?.map((resume, index) => (
          <ResumeCard className="resume-content" />
        ))}
      </div>
      <br />
      <Link to={"/form"}> Create new resume </Link>
    </>
  );
}
