import express from 'express'

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email , password, username} = req.body

        if()
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}