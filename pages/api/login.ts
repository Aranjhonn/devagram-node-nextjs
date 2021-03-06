import type { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (
    req : NextApiRequest,
    res : NextApiResponse
) => {
    if (req.method === 'POST') {
        const { login, senha } = req.body

        if (login === 'admin@admin.com' && senha === 'Admin123') {
            res.status(200).json({ msg : 'Usuário autenticado com sucesso'})
        }
        return res.status(400).json({ erro : 'Usuário ou Senha não encontrado' }) 
    }
    return res.status(405).json({ erro : 'Método informado não é válido' })
}