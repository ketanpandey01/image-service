import * as JobService from '../services/jobService.js'

export const submitJob = async (req, res) => {
    console.log('Submitting jobs')
    const {binaryImageData} = req.body;
    const result = await JobService.submitJobs(binaryImageData);
    return res.json(result);
}

export const getJobStatus = async (req, res) => {
    console.log('Getting job status')
    const {jobId} = req.params
    const result = await JobService.getJobStatus(jobId);
    return res.json(result);
}

export const getJobData = async (req, res) => {
    console.log('Getting job data')
    const {jobId} = req.params
    const result = await JobService.getJobData(jobId);
    return res.json(result);
}