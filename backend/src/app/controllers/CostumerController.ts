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
}

export default new CostumerController();