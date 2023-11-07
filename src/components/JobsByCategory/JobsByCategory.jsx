import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {useEffect, useState} from "react"
import axios from "axios"
import JobByCategory from './JobByCategory';

const JobsByCategory = () => {

    
    const [jobs, setJobs] = useState([])
    const [onSiteJobs, setOnSiteJobs] = useState([])
    const [remoteJobs, setRemoteJobs] = useState([])

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
    console.log(onSiteJobs.length);
    return (
        <Tabs className="text-center my-10">
            <h1 className='text-4xl font-semibold mb-5'>Jobs By Category</h1>
          <div className='flex justify-center'>
          <TabList className="flex gap-5 mb-5">
                <Tab onClick={handleOnSiteJobs} className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">On Site Job</Tab>
                <Tab onClick={handleRemoteJobs} className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Remote Job</Tab>
                <Tab className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Hybrid</Tab>
                <Tab className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Part Time</Tab>
                <Tab className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Full Time</Tab>
                <Tab className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Contract</Tab>
            </TabList>
          </div>

            <TabPanel>
                <h2>On site Job</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {
                    onSiteJobs.map(onSiteJob => <JobByCategory 
                        key={onSiteJob._id}
                        onSiteJob={onSiteJob}
                        ></JobByCategory> )
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
                        ></JobByCategory> )
                }
              </div>
            </TabPanel>
            <TabPanel>
                <h2>Hybrid</h2>
            </TabPanel>
            <TabPanel>
                <h2>Part Time</h2>
            </TabPanel>
            <TabPanel>
                <h2>Full Time</h2>
            </TabPanel>
            <TabPanel>
                <h2>Contract</h2>
            </TabPanel>
        </Tabs>
    );
};

export default JobsByCategory;