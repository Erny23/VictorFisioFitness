import { OAuth2Client } from 'google-auth-library';
import path from 'path';
import fs from 'fs';

const controller = {};

controller.check = (req, res) => {
    const file = path.resolve('./controllers/info.json');
    const data = fs.readFileSync(file, 'utf8');
    const info = JSON.parse(data);
    res.json(info);
};

controller.google =  async(req, res) => {

    const body = await req.body;
    const client = new OAuth2Client(process.env.VITE_CLIENT_ID);

    if (!body) {
        const response = res.json(
            { message: "No hay token" },
            { status: 400 }
        );
        return response;
    };

    async function verify(body) {
        const ticket = await client.verifyIdToken({
            idToken: body.token,
            audience: process.env.VITE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        return payload
    };

    try {
        const payload = await verify(body);
        return res.json(payload);
    } catch (error) {
        const response = res.json(
            { message: error instanceof Error ? error.message: "Token invalido" },
            { status: 400 }
        );
        return response
    }
};

export default controller