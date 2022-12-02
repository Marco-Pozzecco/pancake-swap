import { TabPanelUnstyled } from "@mui/base";
import { Box, Card, createTheme, Slider, Tab, Tabs, withTheme } from "@mui/material";
import { useState } from 'react';
import { ConnectWalletBtn } from "../buttons/ConnectWalletBtn";
import { Container } from "../container/Container";
import "../../pages/perpetual/_perpetual.scss"

export function OrderBook () {
    const [tab, setTab] = useState(0);

    function handleValueChange(event, newValue) {
        setTab(newValue);
    }

    function TabPanel (props) {
        const {children, value, index } = props;

        return(
            <div hidden={value !== index}>
                {value === index && children }
            </div>
        )
    }

    const theme = createTheme({

    })

    return (
        <Container className="perpetual-item">
            <Tabs value={tab} onChange={handleValueChange}>
                <Tab label="Limit" />
                <Tab label="Market" />
                <Tab label="Stop Limit"/>
                {/* Dropdown menu */}
                {/* info svg */}
            </Tabs>
            <TabPanel value={tab} index={0}>
                Some content
            </TabPanel>
            <TabPanel value={tab} index={1}>
                Some other content
            </TabPanel>
            <Slider />
            <ConnectWalletBtn />

        </Container>
    )
}