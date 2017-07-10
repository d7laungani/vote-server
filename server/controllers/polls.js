
import models from '../models'

class PollsControllers {

    /**
     * Get all cities
     * @param {ctx} Koa Context
     */
    async find(ctx) {

        ctx.body = await models.poll.findAll({
            where: {
                active: true
            }
        });
    }

    /**
     * Find a poll
     * @param {ctx} Koa Context
     */
    async findById(ctx) {
        try {
            console.log('reached here ')
            const poll = await models.poll.findById(ctx.params.id)

            if (!poll) {
                ctx.throw(404)
            }
            ctx.body = poll
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404)
            }
            ctx.throw(500)
        }
    }

    /**
     * Add a poll
     * @param {ctx} Koa Context
     */
    async add(ctx) {
        try {
            const poll = await models.poll.create(ctx.request.body)
            ctx.body = poll
        } catch (err) {
            ctx.throw(422)
        }
    }

    /**
     * Update a poll
     * @param {ctx} Koa Context
     */
    async update(ctx) {
        try {
            const foundPoll = await models.poll.findById(ctx.params.id);
            const result = await foundPoll.updateAttributes(ctx.request.body);
            if (!result) {
                ctx.throw(404)
            }
            ctx.body = result
        } catch (err) {
            console.log(err)
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404)
            }
            ctx.throw(500)
        }
    }

    /*
     * Delete a poll
     * @param {ctx} Koa Context
        */
    async delete(ctx) {
        try {
            const poll = await models.poll.findById(ctx.params.id);
            poll.destroy()
            if (!poll) {
                ctx.throw(404)
            }
            ctx.body = "Successfully deleted"
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404)
            }
            ctx.throw(500)
        }
    }


}

export default new PollsControllers()
