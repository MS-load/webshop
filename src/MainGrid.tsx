import React from "react";
import { Box, Heading, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { ResponsiveGrid } from "./ResponsiveGrid";

// set custom breakpoints so we can see the changes
const customBreakpoints = deepMerge(grommet, {
    global: {
        breakpoints: {
            small: {
                value: 600
            },
            medium: {
                value: 900
            },
            large: 3000
        }
    }
});

// let's say this is returned from an API
const animals = [
    "dog",
    "cat",
    "pig",
    "cow",
    "giraffe",
    "elephant",
    "dinosaur",
    "chicken",
    "duck",
    "tiger",
    "lion",
    "cheetah"
];

const listAnimalsBoxes = animals.map(animalName => (
    <Box
        elevation="large"
        key={animalName}
        background="light-3"
        flex={false}
        justify="center"
        align="center"
    >
        <Heading level={2}>{animalName}</Heading>
    </Box>
));

// this is an example for a responsive Grid.
// with this example, you can either have a fixed Grid (with a known number content)
// or generic one (with unkown number of contents like a list that renders)
export default function MainGiid() {
    return (
        <Grommet theme={customBreakpoints}>
            <Box>

                <ResponsiveGrid
                    gap="small"
                    margin="medium"
                    columns="medium"
                    rows="xsmall"
                >
                    {listAnimalsBoxes}
                </ResponsiveGrid>
            </Box>
        </Grommet>
    );
}

