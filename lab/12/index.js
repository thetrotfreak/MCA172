const express = require("express")
const fs = require("fs").promises
const cors = require('cors')
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const postDirectory = './posts/';

app.post('/posts', async (req, res) => {
  const {title, content} = req.body;

  const fileName = `${title}.txt`;
  try {
    await fs.writeFile(`${postDirectory}${fileName}`, content);
    res.json({message : 'Blog post created successfully', title : title});
  } catch (error) {
    res.json({message : 'Failed to create blog post'});
  }
});

// Read a blog post
app.get('/posts/:filename', async (req, res) => {
  const {filename} = req.params;
  try {
    const content = await fs.readFile(`${postDirectory}${filename}`, 'utf-8');
    res.json({content});
  } catch (error) {
    res.json({message : 'Blog post not found'});
  }
});

// Update a blog post
app.put('/posts/:filename', async (req, res) => {
  const {filename} = req.params;
  const {content} = req.body;
  try {
    await fs.writeFile(`${postDirectory}${filename}`, content);
    res.json({
      message : 'Blog post updated successfully',
    });
  } catch (error) {
    res.json({message : 'Failed to update blog post'});
  }
});

// Delete a blog post
app.delete('/posts/:filename', async (req, res) => {
  const {filename} = req.params;
  console.log(filename)
  try {
    await fs.unlink(`${postDirectory}${filename}`);
    res.json({message : 'Blog post deleted successfully'});
  } catch (error) {
    res.json({message : 'Failed to delete blog post'});
  }
});

app.listen(port, () => { console.log(`Server is running on port ${port}`); });
