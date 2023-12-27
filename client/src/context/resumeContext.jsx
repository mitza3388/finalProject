import { createContext, useEffect, useState } from "react";
import { collection, addDoc, getDocs, query, where} from 'firebase/firestore';
import {database, auth, storage} from '../FIREBASE/config'
import { onAuthStateChanged } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const ResumeContext = createContext()

const Provider = ({ children }) => {
  const collectionRef = collection(database, 'resumes');
  
  const adminId = "xkTYUp3qy3UB8QMRXpfK3Y9Q1Qf1"

  const [userId, setUserId] = useState("")

  const [userInfo, setUserInfo] = useState({
    ownerId: '',
    fullName: "",
    workExperience1: { companyName: "", timeFrame: { from: "", to: "" } },
    workExperience2: { companyName: "", timeFrame: { from: "", to: "" } },
    workExperience3: { companyName: "", timeFrame: { from: "", to: "" } },
    education1: { fieldOfStudys: "", timeFrame: { from: "", to: "" } },
    education2: { fieldOfStudys: "", timeFrame: { from: "", to: "" } },
    education3: { fieldOfStudys: "", timeFrame: { from: "", to: "" } },
    image: null,
    imageUrl: "",
  });

  const handleInputChange = (e, type) => {
    let { name, value, files } = e;
  
    if (type === 'image') {
      value = files[0]; // Assuming you only allow selecting one file
      setUserInfo({
        ...userInfo,
        [type]: value,
      });
    } else if (type === 'fullName' || type === 'imageUrl') {
      setUserInfo({
        ...userInfo,
        [type]: value,
      });
    } else {
      setUserInfo({
        ...userInfo,
        [type]: updateNestedProperty(userInfo[type], name, value),
      });
    }
  };
  

  const updateNestedProperty = (obj, path, value) => {
    const keys = path.split(".");
    const lastKey = keys.pop();

    keys.reduce((acc, key) => {
      if (!acc[key]) {
        acc[key] = {};
      }
      return acc[key];
    }, obj)[lastKey] = value;

    return obj;
  }



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
        if (user?.uid){
          setUserInfo({...userInfo, ownerId: user?.uid})
          setUserId(user.uid)
        } 
    });
}, [])

const handleImageUpload = async () => {
  try {
    if (userInfo.image) {
      const timestamp = new Date().getTime();
      const fileName = `cv_image_${timestamp}`;
      const storageRef = ref(storage, fileName);

      await uploadBytes(storageRef, userInfo.image);
      let imageUrl = await getDownloadURL(storageRef);

      setUserInfo({...userInfo, imageUrl: imageUrl})


      console.log('Image uploaded:', imageUrl);
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

  const handleSubmit = async(e) => {
    e.preventDefault()
    const { image, ...userInfoWithoutImage } = userInfo;
    console.log(userInfo);
    await handleImageUpload()
    addDoc(collectionRef, userInfoWithoutImage )
        .then(() => {
            console.log("Data added");
        })
        .catch((err) => {
            console.log(err.message);
        })
}


 
  const getData = async () => {
    
    let q = query(collectionRef,where('ownerId', '==', userInfo.ownerId));
    if (adminId == userId) q = collectionRef

    const response  = await getDocs(q)
          const arr=  response.docs.map((item)=>{
                return item.data()
            });
        return arr;
}


  const shared = { userInfo,setUserInfo, handleInputChange, handleSubmit, getData }
  return (
    <ResumeContext.Provider value={shared}>
      {children}
    </ResumeContext.Provider>
  )
}

export { Provider }; 

export default ResumeContext;