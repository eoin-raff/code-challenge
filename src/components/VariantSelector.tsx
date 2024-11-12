import { Box, Typography, Slider, Button } from "@mui/material";
import React from "react";
import { BrickVariant } from "../../types";

interface VariantSelectorProps extends BrickVariant {
    handleSelect: (value: number) => void
}

const VariantSelector = ({ color, count, handleSelect }: VariantSelectorProps) => {
    const [value, setValue] = React.useState<number>(0)
    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: count,
            label: count.toString(),
        },
    ]


    const handleChange = (_event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    }

    return (<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateAreas: `"label main main main button"`, }}>
        <Typography sx={{

            gridArea: 'label'
        }}>Color #{color}: {value}</Typography>
        <Slider
            sx={{

                gridArea: 'main'
            }}
            valueLabelDisplay="auto"
            max={count}
            marks={marks}
            getAriaValueText={value => value.toString()}
            onChange={handleChange}
        />
        <Button
            sx={{
                gridArea: 'button'
            }}
            variant='contained'
            onClick={() => handleSelect(value)}
        >
            Add {value} to set
        </Button>
    </Box>)
}

export default VariantSelector