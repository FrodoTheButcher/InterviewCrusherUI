import React, { useState } from 'react';
import { TextField, Button, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { JSONTree } from 'react-json-tree';

function CreateTemplate() {
  const [templateData, setTemplateData] = useState({
    title: '',
    description: '',
    avarageTimeToFinish: '',
    video: '',
    algorithms: [],
    chapters: [],
  });

  // Function to handle changes in input fields
  const handleInputChange = (event, section = null, index = null) => {
    const { name, value } = event.target;
    if (section === null) {
      // Update main fields
      setTemplateData((prev) => ({ ...prev, [name]: value }));
    } else {
      // Update dynamic fields (algorithms, chapters)
      const updatedSection = [...templateData[section]];
      updatedSection[index] = { ...updatedSection[index], [name]: value };
      setTemplateData((prev) => ({ ...prev, [section]: updatedSection }));
    }
  };

  // Add a new algorithm or chapter
  const addNewItem = (section) => {
    const newItem =
      section === 'algorithms'
        ? { name: '', description: '', difficulty: '', category: '', rate: 0, successRate: 0, hint: '', points: 0, testCases: [], examples: [] }
        : { name: '', videos: [], quizes: [] };
    setTemplateData((prev) => ({ ...prev, [section]: [...prev[section], newItem] }));
  };

  // Render the dynamic form fields
  const renderAlgorithms = () => {
    return templateData.algorithms.map((algorithm, index) => (
      <Accordion key={index}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Algorithm {index + 1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={algorithm.name}
                onChange={(e) => handleInputChange(e, 'algorithms', index)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={algorithm.description}
                onChange={(e) => handleInputChange(e, 'algorithms', index)}
              />
            </Grid>
            {/* Add other algorithm fields similarly */}
          </Grid>
        </AccordionDetails>
      </Accordion>
    ));
  };

  const renderChapters = () => {
    return templateData.chapters.map((chapter, index) => (
      <Accordion key={index}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Chapter {index + 1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={chapter.name}
                onChange={(e) => handleInputChange(e, 'chapters', index)}
              />
            </Grid>
            {/* Add fields for videos, quizes similarly */}
          </Grid>
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        JSON Template Builder
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={templateData.title}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={templateData.description}
            onChange={handleInputChange}
          />
        </Grid>
        {/* Add more input fields for other top-level attributes like avarageTimeToFinish, video */}
      </Grid>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Algorithms
        </Typography>
        {renderAlgorithms()}
        <Button variant="contained" color="primary" onClick={() => addNewItem('algorithms')}>
          Add Algorithm
        </Button>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Chapters
        </Typography>
        {renderChapters()}
        <Button variant="contained" color="primary" onClick={() => addNewItem('chapters')}>
          Add Chapter
        </Button>
      </Box>

      <Box mt={4}>
        <Typography variant="h6">Preview JSON:</Typography>
        <JSONTree data={templateData} />
      </Box>
    </Box>
  );
}

export default CreateTemplate;
