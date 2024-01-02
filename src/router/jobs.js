import {Router} from 'express'
import * as Job from '../controllers/jobs.js'

export const jobRouter = (authentication) => {
  const router = Router();
//   router.use(authentication);

  router.post('/v1', Job.submitJob)

  router.get('/v1', Job.getJobData)
  
  router.get('/v1/status', Job.getJobStatus)

  return router
};