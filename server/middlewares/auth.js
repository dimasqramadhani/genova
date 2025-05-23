import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {
    const {token} = req.headers;

    if(!token) {
        return res.json({success: false, message: 'Tidak memiliki otoritas untuk login'});
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        
        if(tokenDecode.id) {
            req.body = req.body || {};
            req.body.userId = tokenDecode.id;    
        }else {
            return res.json({success: false, message: 'Tidak memiliki otoritas untuk login'})
        }

        next();

    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export default userAuth