# Image Service

## High level architecture

![High level design](docs\HLD.png)

## Client
Client upload binary image data to Image Service

## Image Service 
This Service:
 - Stores binary payload to blob store
 - Creates job object and submits to worker service
 - Query job status from worker service
 - Get image binary data from blob store

 ## Worker Service
 This service is already existing

 ## Blob Service
 This servie is already existing
