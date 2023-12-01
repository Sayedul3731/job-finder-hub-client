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
    const [toggleTab, setToggleTab] = useState(0)

    useEffect(() => {
        axios.get('https://job-finder-hub-server.vercel.app/allJobs')
            .then(res => {
                setJobs(res.data);
            })
    }, [])

    const handleAllJobs = (index) => {
        const allCategoryJobs = jobs.filter(job => job.category !== 'all jobs')
        setAllJobs(allCategoryJobs)
        setToggleTab(index);
    }
    console.log(toggleTab);

    const handleOnSiteJobs = (index) => {
        const onSiteJobs = jobs.filter(job => job.category === 'On Site Job')
        setOnSiteJobs(onSiteJobs)
        setToggleTab(index);
    }
    const handleRemoteJobs = (index) => {
        const remoteJobs = jobs.filter(job => job.category === 'Remote Job')
        setRemoteJobs(remoteJobs)
         setToggleTab(index);
    }
    const handleHybridJobs = (index) => {
        const hybridJobs = jobs.filter(job => job.category === 'Hybrid Job')
        setHybridJobs(hybridJobs)
         setToggleTab(index);
    }
    const handlePartTimeJobs = (index) => {
        const partTimeJobs = jobs.filter(job => job.category === 'Part Time Job')
        setPartTimeJobs(partTimeJobs)
         setToggleTab(index);
    }
    const handleFullTimeJobs = (index) => {
        const fullTimeJobs = jobs.filter(job => job.category === 'Full Time Job')
        setFullTimeJobs(fullTimeJobs)
         setToggleTab(index);
    }
   

    return (
        <Tabs className="text-center my-10">
            <h1 className='text-4xl font-semibold mb-5'>Jobs By Category</h1>
            <div className='flex justify-center container'>
                <TabList className="flex gap-5 flex-col md:flex-row lg:flex-row mb-5">
                    <Tab onClick={() => handleAllJobs(1)} className={toggleTab == 1 ? "active bg-green-400 " : "inActive bg-sky-400 pb-1"}>All Jobs</Tab>
                    <Tab onClick={() => handleOnSiteJobs(2)} className={toggleTab == 2 ? "active bg-green-400 " : "inActive bg-sky-400 pb-1"}>On Site Job</Tab>
                    <Tab onClick={() => handleRemoteJobs(3)} className={toggleTab == 3 ? "active bg-green-400 " : "inActive bg-sky-400 pb-1"}>Remote Job</Tab>
                    <Tab onClick={() => handleHybridJobs(4)} className={toggleTab == 4 ? "active bg-green-400 " : "inActive bg-sky-400 pb-1"}>Hybrid</Tab>
                    <Tab onClick={() => handlePartTimeJobs(5)} className={toggleTab == 5 ? "active bg-green-400 " : "inActive bg-sky-400 pb-1"}>Part Time</Tab>
                    <Tab onClick={() => handleFullTimeJobs(6)} className={toggleTab == 6 ? "active bg-green-400 " : "inActive bg-sky-400 pb-1"}>Full Time</Tab>
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