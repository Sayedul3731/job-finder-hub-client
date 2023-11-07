import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from "react"
import axios from "axios"
import JobByCategory from './JobByCategory';

const JobsByCategory = () => {


    const [jobs, setJobs] = useState([])
    const [onSiteJobs, setOnSiteJobs] = useState([])
    const [remoteJobs, setRemoteJobs] = useState([])
    const [hybridJobs, setHybridJobs] = useState([])
    const [partTimeJobs, setPartTimeJobs] = useState([])
    const [fullTimeJobs, setFullTimeJobs] = useState([])
    const [contractJobs, setContractJobs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/allJobs')
            .then(res => {
                setJobs(res.data);
            })
    }, [])
    console.log(jobs.length);

    const handleOnSiteJobs = () => {
        console.log('clicked on site job');
        const onSiteJobs = jobs.filter(job => job.category === 'On Site Job')
        setOnSiteJobs(onSiteJobs)
    }
    const handleRemoteJobs = () => {
        console.log('clicked on remote job');
        const remoteJobs = jobs.filter(job => job.category === 'Remote Job')
        setRemoteJobs(remoteJobs)
    }
    const handleHybridJobs = () => {
        const hybridJobs = jobs.filter(job => job.category === 'Hybrid Job')
        setHybridJobs(hybridJobs)
    }
    const handlePartTimeJobs = () => {
        console.log('clicked on remote job');
        const partTimeJobs = jobs.filter(job => job.category === 'Part Time Job')
        setPartTimeJobs(partTimeJobs)
    }
    const handleFullTimeJobs = () => {
        console.log('clicked on remote job');
        const fullTimeJobs = jobs.filter(job => job.category === 'Full Time Job')
        setFullTimeJobs(fullTimeJobs)
    }
    const handleContractJobs = () => {
        console.log('clicked on remote job');
        const contractJobs = jobs.filter(job => job.category === 'Contract Job')
        setContractJobs(contractJobs)
    }

    return (
        <Tabs className="text-center my-10">
            <h1 className='text-4xl font-semibold mb-5'>Jobs By Category</h1>
            <div className='flex justify-center'>
                <TabList className="flex gap-5 mb-5">
                    <Tab onClick={handleOnSiteJobs} className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">On Site Job</Tab>
                    <Tab onClick={handleRemoteJobs} className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Remote Job</Tab>
                    <Tab onClick={handleHybridJobs} className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Hybrid</Tab>
                    <Tab onClick={handlePartTimeJobs} className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Part Time</Tab>
                    <Tab onClick={handleFullTimeJobs} className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Full Time</Tab>
                    <Tab onClick={handleContractJobs} className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Contract</Tab>
                </TabList>
            </div>

            <TabPanel>
                <h2>On site Job</h2>
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
                <h2>Remote Job</h2>
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
                <h2>Hybrid</h2>
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
                <h2>Part Time</h2>
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
                <h2>Full Time</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        fullTimeJobs.map(fullTimeJob => <JobByCategory
                            key={fullTimeJob._id}
                            fullTimeJob={fullTimeJob}
                        ></JobByCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <h2>Contract</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        contractJobs.map(contractJob => <JobByCategory
                            key={contractJob._id}
                            contractJob={contractJob}
                        ></JobByCategory>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default JobsByCategory;