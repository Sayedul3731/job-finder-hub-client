import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const JobByCategory = () => {
    return (
        <Tabs className="text-center my-10">
            <h1 className='text-4xl font-semibold mb-5'>Jobs By Category</h1>
          <div className='flex justify-center'>
          <TabList className="flex gap-5 mb-5">
                <Tab className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">On Site Job</Tab>
                <Tab className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Remote Job</Tab>
                <Tab className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Hybrid</Tab>
                <Tab className="cursor-pointer text-xl font-medium bg-sky-300 hover:bg-sky-500 px-5 py-2">Part Time</Tab>
            </TabList>
          </div>

            <TabPanel>
                <h2>On site Job</h2>
            </TabPanel>
            <TabPanel>
                <h2>Remote Job</h2>
            </TabPanel>
            <TabPanel>
                <h2>Hybrid</h2>
            </TabPanel>
            <TabPanel>
                <h2>Part Time</h2>
            </TabPanel>
        </Tabs>
    );
};

export default JobByCategory;