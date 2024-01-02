import * as JobService from '../services/jobService.js'

export const submitJob = async (req, res) => {
    console.log('Submitting jobs')
    const result = await JobService.submitJobs();
    return res.json(result);
}

export const getJobStatus = async (req, res) => {
    console.log('Getting job status')
    const result = await JobService.getJobStatus();
    return res.json(result);
}

export const getJobData = async (req, res) => {
    console.log('Getting job data')
    const result = await JobService.getJobData();
    return res.json(result);
}