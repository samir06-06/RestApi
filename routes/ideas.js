const express = require('express')
const router = express.Router()


const ideas = [
    { 
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.", 
      tag: 'Technology',
      username: 'TonyStark',
      date: '2024-01-02'
    },
    { 
      id: 2,
      text: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.", 
      tag: 'Science',
      username: 'BruceBanner',
      date: '2024-02-15'
    },
    { 
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh.", 
      tag: 'Engineering',
      username: 'PeterParker',
      date: '2024-03-20'
    },
    { 
      id: 4,
      text: "Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.", 
      tag: 'Innovation',
      username: 'ReedRichards',
      date: '2024-04-10'
    },
    { 
      id: 5,
      text: "Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.", 
      tag: 'Research',
      username: 'MattMurdock',
      date: '2024-05-01'
    }
  ]
  
  router.get('/', (req, res) => {
    res.send({ success: true,  data: ideas });
  });
  
  
  
  router.get('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
  
    if (!idea) {
      return res
        .status(404)
        .json({ success: false, error: "Resource is not found" });
    }
  
    res.json({ success: true, data: idea });
  });

  router.post('/', (req, res) => {
    const idea = {
      id: ideas.length+1,
      text: req.body.text,
      tag: req.body.tag,
      username: req.body.username,
      date: new Date().toISOString().slice(0,10)
    }

    console.log(idea)
    ideas.push(idea)
    res.send(idea)
  })

  router.put('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
  
    if (!idea) {
      return res
        .status(404)
        .json({ success: false, error: "Resource is not found" });
    }

    idea.text = req.body.text || idea.text
    idea.tag = req.body.tag || idea.tag
  
    res.json({ success: true, data: idea });
  });

  router.delete('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
  
    if (!idea) {
      return res
        .status(404)
        .json({ success: false, error: "Resource is not found" });
    }

    ideas.splice(idea.id - 1, 1)
  
    res.json({ success: true, data: idea });
  });


  


module.exports = router;
