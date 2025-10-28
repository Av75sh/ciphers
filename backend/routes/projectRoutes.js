const express = require('express');
const Project = require('../models/Project');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.userId }).sort({ updatedAt: -1 });
    res.json({ projects });
  } catch (error) {
    res.status(500).json({ message: 'Error in fetching projects' });
  }
});

router.post('/', authenticate, async (req, res) => {
  try {
    const { name, code } = req.body;
    const project = await Project.create({ name, code, userId: req.userId });
    res.json({ project });
  } catch (error) {
    res.status(500).json({ message: 'Error in creating project' });
  }
});

router.get('/:id', authenticate, async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id, userId: req.userId });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ project });
  } catch (error) {
    res.status(500).json({ message: 'Error in fetching project' });
  }
});

router.put('/:id', authenticate, async (req, res) => {
  try {
    const { code, name } = req.body;
    const updateData = {};
    if (code !== undefined) updateData.code = code;
    if (name !== undefined) updateData.name = name;

    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      updateData,
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ project });
  } catch (error) {
    res.status(500).json({ message: 'Error in updating project' });
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project is deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error on deleting project' });
  }
});

module.exports = router;