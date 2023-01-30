import { type Request, type Response, Router } from 'express';

// import { ThreadModel } from '../models/ThreadModel'; // TODO with ORM

export const threadsRoute = Router()
    .get('', async (_: Request, res: Response): Promise<Response> => {
        // const allThreads: ThreadModel[] = await ThreadModel.findAll();
        const allThreads = { 'resp': 'all threads should be here...' }; //temp

        return res.status(200).json(allThreads);
    })
    .get('/:id', async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        // const thread: ThreadModel | null = await ThreadModel.findByPk(id);
        const thread = { 'get thread by id': id }; //temp

        return res.status(200).json(thread);
    })
    .post('', async (req: Request, res: Response): Promise<Response> => {
        // const newThread: ThreadModel = await ThreadModel.create(req.body);
        const newThread = { 'posted body': req.body };  //temp

        return res.status(201).json(newThread);
    })
    .put('/:id', async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        // await ThreadModel.update({ ...req.body }, { where: { id } });
        // const updatedThread: ThreadModel | null = await ThreadModel.findByPk(id);
        const updatedThread = { 'updated by id': id, 'body': req.body }; //temp

        return res.status(200).json(updatedThread);
    })
    .delete('/:id', async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        // const deletedThread: ThreadModel | null = await ThreadModel.findByPk(id);
        // await ThreadModel.destroy({ where: { id } });
        const deletedThread = { 'deleted id': id };  //temp

        return res.status(200).json(deletedThread);
    });
