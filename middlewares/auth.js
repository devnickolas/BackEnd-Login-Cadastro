import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {
    
    const token = req.header.authorization

    if(!token){
        return res.status(401).json({ message: 'Acesso negado'})
    }
    
    try{
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET)

        req.userId = decoded.id

        next()
    }catch(err){
        return res.status(401).json({ Messagem: 'Token invalido'})
    }

}

export default auth