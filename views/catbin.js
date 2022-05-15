import {
    PrismaClient
} from "@prisma/client";

const prisma = new PrismaClient();

//get single by id 
export const getBin = async (req, res, next) => {
    try {
        const id = req.params.id
        const paste = await prisma.paste.findUnique({
            where: {
                id: id
            }
        })
        res.json(paste)
    } catch (error) {
        next(error)
    }


}
//create new
export const createBin = async (req, res, next) => {

    try {
        let data = req.body
        const paste = await prisma.paste.create({
            data
        })
        let url = `${req.protocol}://${req.get('host')}${req.originalUrl}${paste.id}`
        res.json({
            "message": "Created",
            "paste ID": paste.id,
            "link": url
        })
    } catch (error) {
        next(error)
    }
}