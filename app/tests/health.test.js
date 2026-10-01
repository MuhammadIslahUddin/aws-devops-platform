const assert = require('assert');
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/health',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const body = JSON.parse(data);
      assert.strictEqual(body.status, 'healthy');
      console.log('✅ PASS: /health returns { status: "healthy" }');
      process.exit(0);
    } catch (err) {
      console.error('❌ FAIL:', err.message);
      process.exit(1);
    }
  });
});

req.on('error', (err) => {
  console.error('❌ ERROR: Could not connect to server —', err.message);
  process.exit(1);
});

req.end();

