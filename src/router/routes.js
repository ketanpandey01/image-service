import {rootRouter} from './root.js'
import {jobRouter} from './jobs.js'

export const routes = (app, authentication) => {
    app.use('/', rootRouter(authentication))

    app.use('/job', jobRouter(authentication))
}