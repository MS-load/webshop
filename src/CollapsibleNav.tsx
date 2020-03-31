import React from "react";

import {
    Anchor,
    Box,
    Button,
    Grommet,
    Header,
    Nav,
    Menu,
    ResponsiveContext,
    Text
} from "grommet";

import { CheckoutButton } from "./CheckoutButton";


interface Props {
    showCart: boolean
}

const CollapsibleNav = (props: Props) => (
    <ResponsiveContext.Consumer>
        {responsive =>
            responsive === "small" ? (
                <Header background="brand" pad="medium">
                    <Box direction="row">
                        <Menu
                            label="Click me"
                            items={[
                                { label: "Bed", onClick: () => { } },
                                { label: "Lamp", onClick: () => { } },
                                { label: "Table", onClick: () => { } },
                                { label: "Carpet", onClick: () => { } },
                                { label: "Pillow", onClick: () => { } }
                            ]}
                        />
                    </Box>
                    <Box direction="row" align="center" gap="small">
                        the shop
                         </Box >
                    <span style={props.showCart ? { display: 'block' } : { display: 'none' }}>
                        <CheckoutButton showLabel={false} />
                    </span>
                </Header>
            ) : (
                    <Header background="brand" pad="medium" >
                        <Box direction="row" align="center" gap="small">
                            <Anchor href="#" label='The Shop' />
                        </Box >
                        <Box direction='row' align='center' justify='stretch' >
                            <Nav direction="row" align='center'>
                                <Anchor href="#" label="Bed" color='light-1' />
                                <Anchor href="#" label="Lamp" color='light-1' />
                                <Anchor href="#" label="Table" color='light-1' />
                                <Anchor href="#" label="Carpet" color='light-1' />
                                <Anchor href="#" label="Pillow" color='light-1' />
                            </Nav>
                        </Box>
                        <span style={props.showCart ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                            <CheckoutButton showLabel={true} />
                        </span>
                    </Header>
                )
        }
    </ResponsiveContext.Consumer>
);

export default CollapsibleNav