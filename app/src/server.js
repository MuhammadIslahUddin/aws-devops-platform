const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || '1.0.0';

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    application: "AWS DevOps Platform",
    status: "running",
    version: VERSION,
    author: "Muhammad Islah Uddin"
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: "healthy"
  });
});

// Version endpoint
app.get('/version', (req, res) => {
  res.json({
    version: VERSION
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AWS DevOps Platform v${VERSION} running on port ${PORT}`);
  console.log(`📍 Endpoints:`);
  console.log(`   http://localhost:${PORT}/`);
  console.log(`   http://localhost:${PORT}/health`);
  console.log(`   http://localhost:${PORT}/version`);
});

module.exports = app;

