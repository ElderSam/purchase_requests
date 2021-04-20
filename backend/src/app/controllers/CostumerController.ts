import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Costumer from '../models/Costumer';

class CostumerController {
    async listAll(req: Request, res: Response) { // list all costumers
        const list = await Costumer.list();

        return res.send({ listCostumers: list });
    }

    async listById(req: Request, res: Response) { // list costumers by Id

            let { id } = req.params;

            if(isNaN(id as any)) { // checking if the id is valid
                return res.status(400).send({ error: 'Invalid Id' });
            }

        const costumer = await Costumer.list(id);

        return res.send({ costumer: costumer });
    }

    async store(req: Request, res: Response) {
        const costumer = req.body;

        const invalidFields = CostumerController.verifyFields(costumer);

        if(invalidFields.error)
            return res.status(400).send({ invalidFields }); // bad request

        const costumerExists = await Costumer.findByName(costumer.name)

        if(costumerExists) { // implementation of the Singleton design pattern
            return res.status(409).send({ error: 'Já existe um usuário com este nome' }); // status 409: conflict
        }

        const newCostumer = await Costumer.insert(costumer);

        return res.json(newCostumer);
    }

    async update(req: Request, res: Response) {

        if(JSON.stringify(req.query) === "{}") // if the Params object is empty
            return res.status(400).send({ error: 'No params received' })

        const repository = getRepository(Costumer);

        const { id } = req.params;
        const auxCostumer = req.query;
        // console.log(auxCostumer)

        try{
            const updatedCostumer = await Costumer.update(id, auxCostumer);

            // console.log('UPDATE: ', updatedCostumer);

            return res.json({ message: 'Cliente Atualizado!' });

        }catch(err) {
            /*const { name, message } = err;
            console.log({ name, message })*/

            return res.status(400).send({ error: err.message });
        }
    }

    async delete(req: Request, res: Response) { // delete Costumer
        const { id } = req.params;

        const deleteRes = await Costumer.delete(id)
        // console.log(deleteRes)

        return res.send({ deleted: Boolean(deleteRes.affected), id })
    }

    static verifyFields(user: any) {
        let error = false;
        const incorrectFields = Array();

        try {
            const requiredFields = [ 'name', 'phone', 'birth_date' ];

            requiredFields.forEach((field, index) => {

                if((user[field] === undefined) || (user[field] === '')) {

                    if(!error)
                        error = true;

                    incorrectFields.push(field)
                }
            })

        }catch {
            error = true;
        }

        if(error) {
            return { error, incorrectFields }

        }else {
            return { error }
        }
    }
}

export default new CostumerController();