import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguagesAction } from '../../../actions/algorithmAction';
import Loader from '../../../components/Spinner';
import Message from '../../../components/Message';

function Languages({ selectedLang, setSelectedLang }) {

  const roadmapItem = useSelector(state=>state.roadmapItem)
  const {roadmap,error,loading}=roadmapItem
  useEffect(() => {
       if (roadmap?.languages.length>0)
       setSelectedLang(roadmap?.languages[0].judge0LanguageId);
  }, [roadmap]);

  const handleLanguageChange = (e) => {
    setSelectedLang(e.target.value);
  };

  return (
    <Form.Select aria-label="Default select example" onChange={handleLanguageChange}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : selectedLang ? (
        <>
          {roadmap.languages.map((lang) => (
            <option onChange={e=>setSelectedLang(e)} key={lang.judge0LanguageId} value={lang.judge0LanguageId}>
              <strong>{lang.name}</strong>
            </option>
          ))}
        </>
      ) : null}
    </Form.Select>
  );
}

export default Languages;
