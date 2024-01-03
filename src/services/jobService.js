import axios from 'axios';
import { memoryCache } from '../utils/cache.js'

export const submitJobs = async (imageData)=>{
    try{

        const blobResponse = await axios.get('http://worker.blob.net/api/v1/blob', {imageData}, {
            headers: {
                'Content-Type': 'image/jpeg',
                'Content-Length': imageData.length
            }
        })

        const job = {
            tenentId: memoryCache.get('tenentId'),
            clientId: memoryCache.get('clientId'),
            payloadLocation: `http://worker.blob.net/api/v1/blob/${blobResponse.data.blobId}`,
            payloadSize: imageData.length
        }
        const workerResponse = await axios.post('http://worker.cloud.net/api/v1/job', {
            job
        })
        return {
            jobId: workerResponse.data.jobId,
            message: 'Job submitted successfully'
        }
    } catch (error) {
        throw error
    }
}

export const getJobStatus = async (jobId)=>{
    try{
        const workerStatus = await axios.get(`http://worker.cloud.net/api/v1/job/${jobId}/status`)
        return {
            jobStatus: workerStatus.data
        }
    } catch(error){
        throw error
    }
}

export const getJobData = async (jobId)=>{
    try{
        const blobResponse = await axios.get(`http://worker.blob.net/api/v1/blob/${jobId}`)
        return {
            blob: blobResponse.data
        }
    } catch(error){
        throw error
    }
}