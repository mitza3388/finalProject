import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './gallery.css';

const Gallery = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState(new FormData());

  const handleUpload = async () => {
    // אם יש קובץ נוסף להוסיף
    if (file) {
      formData.delete('file'); // נקה את הקובץ הקיים ב- formData
      formData.append('file', file); // הוסף את הקובץ החדש

      try {
        const res = await axios.post('http://localhost:1200/api/v1/upload', formData);
        setFiles([...files, res.data]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    axios.get('http://localhost:1200/api/v1/getImages')
      .then(res => {
        const promises = res.data.map(image => {
          return axios.head(`http://localhost:1200/images/${image.image}`)
            .then(() => image)
            .catch(() => null);
        });

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
};

export default Gallery;
