import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './gallery.css';

const Gallery = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState(new FormData());

  const handleUpload = () => {
    formData.append('file', file);
    axios.post('http://localhost:1200/api/v1/upload', formData)
      .then(res => {
        console.log(res);
        // אתה יכול להוסיף ידית את הקובץ שהוספת ל- files כאן
        setFiles([...files, res.data]);  // או כל שיטה אחרת שתגיע עם הקובץ החדש
      })
      .catch(err => console.log(err));
  };


  useEffect(() => {
    axios.get('http://localhost:1200/api/v1/getImages')
      .then(res => {
        // פילטר לבדיקה של כל תמונה עם axios
        const promises = res.data.map(image => {
          return axios.head(`http://localhost:1200/images/${image.image}`)
            .then(response => {
              // אם התמונה קיימת, נחזיר אותה
              return image;
            })
            .catch(error => {
              // אם התמונה לא קיימת, נחזיר null
              return null;
            });
        });

        // אחרי שכל הפרומיססים סיימו, נסנן את התמונות שלא נמצאו
        Promise.all(promises)
          .then(existingImages => {
            const filteredImages = existingImages.filter(image => image !== null);
            setFiles(filteredImages);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container row p-3'>
      <h2 className='text-center p-3'>Gallery</h2>
      <div className='d-flex justify-content-center'>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button style={{ width: '150px' }} onClick={handleUpload}>Upload</button>
      </div>
      <br />
      <div className="gallery-container">
        {files.map((file, index) => (
          <div key={index} className="gallery-item">
            <img src={`http://localhost:1200/images/${file.image}`} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
