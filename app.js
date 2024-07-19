const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const app = express();
const port = 3000;

const secretKey = 'e563799a-2117-4831-a3b4-e70ee613a834';
const workspaceId = '4898e7c9-491e-4777-b5d3-81191a7aa508';

// Enable CORS
app.use(cors());

function generateRandomEmail() {
    return `user${crypto.randomBytes(4).toString('hex')}@example.com`;
}

function createToken(email) {
    const userData = {
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
        email: email, // required
        firstName: 'John',
        lastName: 'Doe',
        company: JSON.stringify({
            name: 'Foo Company',
            revenue: 1000
        }),
        workspace_id: workspaceId // required
    };
    return jwt.sign(userData, secretKey, { algorithm: 'HS256' });
}

app.get('/api/token', (req, res) => {
    const email = generateRandomEmail();
    const token = createToken(email);
    res.json({ token });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
