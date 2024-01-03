import {Router} from 'express'
import * as Job from '../controllers/jobs.js'

export const jobRouter = (authentication) => {
  const router = Router();
  router.use(authentication);

  router.post('/', Job.submitJob)
  
  router.get('/status/:jobId', Job.getJobStatus)

  router.get('/data/:jobId', Job.getJobData)

  return router
};