const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido!' });
    }

    const tokenLimpo = token.split(' ')[1] || token;

    jwt.verify(tokenLimpo, 'SECRET_KEY_MUITO_SEGURA', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido ou expirado!' });
        }
        req.usuarioId = decoded.id;
        req.usuarioTipo = decoded.tipo;
        next();
    });
};
