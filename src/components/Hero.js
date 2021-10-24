import { TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react'

export const Hero = ({ title }) => (
  <>
    <Tabs  borderTop="1px" borderColor="twitter.900">
      <TabList fontSize={10} color="whatsapp.100">
        <Tab  fontSize={12}>All Categories</Tab>
        <Tab fontSize={12}>Electronics</Tab>
        <Tab fontSize={12}>Women</Tab>
        <Tab fontSize={12}>Men</Tab>
        <Tab fontSize={12}>Baby & Toys</Tab>
        <Tab fontSize={12}>Grocery</Tab>
        <Tab fontSize={12}>Winery</Tab>
      </TabList>

      <TabPanels>
        {/* <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel> */}
      </TabPanels>
    </Tabs>
  </>
)

Hero.defaultProps = {
  title: 'with-chakra-ui',
}
