import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { verifyFields } from './utils';
import Product from '../models/Product';

class ProductController {
    async listAll(req: Request, res: Response) { // list all products
        const list = await Product.list();

        return res.send({ listProducts: list });
    }

    async listById(req: Request, res: Response) { // list products by Id

            let { id } = req.params;

            if(isNaN(id as any)) { // checking if the id is valid
                return res.status(400).send({ error: 'Invalid Id' });
            }

        const product = await Product.list(id);

        return res.send({ product });
    }

    async store(req: Request, res: Response) {
        const product = req.body;
        const requiredFields = [ 'name', 'value' ];

        const invalidFields = verifyFields(product, requiredFields);

        if(invalidFields.error)
            return res.status(400).send({ invalidFields }); // bad request

        const productExists = await Product.findByName(product.name)

        if(productExists) { // implementation of the Singleton design pattern
            return res.status(409).send({ error: 'Já existe um usuário com este nome' }); // status 409: conflict
        }

        const newProduct = await Product.insert(product);

        return res.json(newProduct);
    }

    async update(req: Request, res: Response) {

        if(JSON.stringify(req.query) === "{}") // if the Params object is empty
            return res.status(400).send({ error: 'No params received' })

        const repository = getRepository(Product);

        const { id } = req.params;
        const auxProduct = req.query;
        // console.log(auxProduct)

        try{
            const updatedProduct = await Product.update(id, auxProduct);

            // console.log('UPDATE: ', updatedProduct);

            return res.json({ message: 'Produto Atualizado!' });

        }catch(err) {
            /*const { name, message } = err;
            console.log({ name, message })*/

            return res.status(400).send({ error: err.message });
        }
    }

    async delete(req: Request, res: Response) { // delete Product
        const { id } = req.params;

        const deleteRes = await Product.delete(id)
        // console.log(deleteRes)

        return res.send({ deleted: Boolean(deleteRes.affected), id })
    }
}

export default new ProductController();