import {Products} from '../../models/products';

export const fetchData = (query) => {
    return Products.find(query);
}

export const saveData = (query) => {
    return new Products(query).save();
}

export const findupdateData = (query,setValue) => {
    return Products.findOneAndUpdate(query,setValue,{ new: true })
}