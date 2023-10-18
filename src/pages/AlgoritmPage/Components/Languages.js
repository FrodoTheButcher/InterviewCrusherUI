import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguagesAction } from '../../../actions/algorithmAction';
import Loader from '../../../components/Spinner';
import Message from '../../../components/Message';

function Languages({ selectedLang, setSelectedLang }) {
  const dispatch = useDispatch();
  const languagesData = useSelector((state) => state.getLanguages);
  const { error, loading, languages } = languagesData;

  useEffect(() => {
    if (languages === undefined) {
      dispatch(getLanguagesAction());
    } else {
      if (languages) {
        setSelectedLang(languages[0]);
      }
    }
  }, [dispatch, error, loading, languagesData]);

  const handleLanguageChange = (e) => {
    setSelectedLang(e.target.value);
  };

  return (
    <Form.Select aria-label="Default select example" onChange={handleLanguageChange}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : languages && selectedLang ? (
        <>
          <option value={selectedLang.judge0LanguageId}>{selectedLang.name}</option>
          {languages.map((lang) => (
            <option key={lang.judge0LanguageId} value={lang.judge0LanguageId}>
              <strong>{lang.name}</strong>
            </option>
          ))}
        </>
      ) : null}
    </Form.Select>
  );
}

export default Languages;
