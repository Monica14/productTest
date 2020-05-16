import { fetchData, saveData, deleteData, updateData } from '../modules/lib/products';
import { hashPassword } from '../helpers/token.helper';


export const list = async function (req, res, next) {
    try {
        const productList = await fetchData({});
        return res.status(200).json({ products: productList });
    }
    catch (e) {
        console.log(e)
    }
}

export const save = async function (req, res, next) {
    try {
        if (req.body) {
            console.log(req.file)
            const data = {
                title: req.body.title,
                image: req.file.filename,
                mrp: req.body.mrp,
                rating: req.body.rating
            }
            const productList = await saveData(data);
            if (!productList) {
                throw new Error('Error Occured')
            }
            return res.send({ status: "success", data: 'Product Saved' })
        }
        return res.send({ status: "fail", data: 'Error Occured' })
    }
    catch (e) {
        throw new Error(e);
    }
}


