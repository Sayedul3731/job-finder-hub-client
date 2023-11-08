import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from "react"
import axios from "axios"
import JobByCategory from './JobByCategory';
import  './JobsByCategory.css'

const JobsByCategory = () => {


    const [jobs, setJobs] = useState([])

    const [allJobs, setAllJobs] = useState([])
    const [onSiteJobs, setOnSiteJobs] = useState([])
    const [remoteJobs, setRemoteJobs] = useState([])
    const [hybridJobs, setHybridJobs] = useState([])
    const [partTimeJobs, setPartTimeJobs] = useState([])
    const [fullTimeJobs, setFullTimeJobs] = useState([])

    useEffect(() => {
        axios.get('https://job-finder-hub-server.vercel.app/allJobs')
            .then(res => {
                setJobs(res.data);
            })
    }, [])
    console.log(jobs.length);

    const handleAllJobs = () => {
        const allCategoryJobs = jobs.filter(job => job.category !== 'all jobs')
        setAllJobs(allCategoryJobs)
    }

    const handleOnSiteJobs = () => {
        const onSiteJobs = jobs.filter(job => job.category === 'On Site Job')
        setOnSiteJobs(onSiteJobs)
    }
    const handleRemoteJobs = () => {
        const remoteJobs = jobs.filter(job => job.category === 'Remote Job')
        setRemoteJobs(remoteJobs)
    }
    const handleHybridJobs = () => {
        const hybridJobs = jobs.filter(job => job.category === 'Hybrid Job')
        setHybridJobs(hybridJobs)
    }
    const handlePartTimeJobs = () => {
        const partTimeJobs = jobs.filter(job => job.category === 'Part Time Job')
        setPartTimeJobs(partTimeJobs)
    }
    const handleFullTimeJobs = () => {
        const fullTimeJobs = jobs.filter(job => job.category === 'Full Time Job')
        setFullTimeJobs(fullTimeJobs)
    }
   

    return (
        <Tabs className="text-center my-10">
            <h1 className='text-4xl font-semibold mb-5'>Jobs By Category</h1>
            <div className='flex justify-center container'>
                <TabList className="flex gap-5 mb-5">
                    <Tab onClick={handleAllJobs} className="text-xl font-semibold bg-gray-300 px-4 py-1 cursor-pointer">All Jobs</Tab>
                    <Tab onClick={handleOnSiteJobs} className="text-xl font-semibold bg-gray-300 px-4 py-1 cursor-pointer">On Site Job</Tab>
                    <Tab onClick={handleRemoteJobs} className="text-xl font-semibold bg-gray-300 px-4 py-1 cursor-pointer">Remote Job</Tab>
                    <Tab onClick={handleHybridJobs}  className="text-xl font-semibold bg-gray-300 px-4 py-1 cursor-pointer">Hybrid</Tab>
                    <Tab onClick={handlePartTimeJobs} className="text-xl font-semibold bg-gray-300 px-4 py-1 cursor-pointer">Part Time</Tab>
                    <Tab onClick={handleFullTimeJobs} className="text-xl font-semibold bg-gray-300 px-4 py-1 cursor-pointer">Full Time</Tab>
                </TabList>
            </div>

            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        allJobs.map(allJob => <JobByCategory
                            key={allJob._id}
                            allJob={allJob}
                        ></JobByCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        onSiteJobs.map(onSiteJob => <JobByCategory
                            key={onSiteJob._id}
                            onSiteJob={onSiteJob}
                        ></JobByCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        remoteJobs.map(remoteJob => <JobByCategory
                            key={remoteJob._id}
                            remoteJob={remoteJob}
                        ></JobByCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        hybridJobs.map(hybridJob => <JobByCategory
                            key={hybridJob._id}
                            hybridJob={hybridJob}
                        ></JobByCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        partTimeJobs.map(partTimeJob => <JobByCategory
                            key={partTimeJob._id}
                            partTimeJob={partTimeJob}
                        ></JobByCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        fullTimeJobs.map(fullTimeJob => <JobByCategory
                            key={fullTimeJob._id}
                            fullTimeJob={fullTimeJob}
                        ></JobByCategory>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default JobsByCategory;