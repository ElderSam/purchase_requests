import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Costumer from '../models/Costumer';

class CostumerController {
    async listAll(req: Request, res: Response) { // list all costumers
        const list = await Costumer.list();

        return res.send({ listCostumers: list });
    }

    async store(req: Request, res: Response) {
        const repository = getRepository(Costumer);
        const { name, phone, birth_date, status } = req.body;

        const costumerExists = await repository.createQueryBuilder("costumers")
            .where("LOWER(name) = LOWER(:name)", { name })
            .getOne();

        if(costumerExists) { // implementation of the Singleton design pattern
            return res.status(409).send({ error: 'Já existe um usuário com este nome' }); // status 409: conflict
        }

        const costumer = repository.create({ name, phone, birth_date, status });
        await repository.save(costumer); // save on Database

        return res.json(costumer);
    }

    async update(req: Request, res: Response) {

        if(JSON.stringify(req.query) === "{}") // if the Params object is empty
            return res.status(400).send({ error: 'No params received' })

        const repository = getRepository(Costumer);

        const { id } = req.params;
        const auxCostumer = req.query;
        // console.log(auxCostumer)

        try{
            const updatedCostumer = await repository.createQueryBuilder("costumers")
                .update(Costumer)
                .set(auxCostumer)
                .where("id = :id", { id })
                .execute();

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

        const repositoty = getRepository(Costumer);
        const deleteRes = await repositoty.delete(id)
        // console.log(deleteRes)

        return res.send({ deleted: Boolean(deleteRes.affected), id })
    }
}

export default new CostumerController();