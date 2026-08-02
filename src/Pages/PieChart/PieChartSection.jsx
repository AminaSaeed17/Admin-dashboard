import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from '@nivo/pie'


const data = [
  {
    "id": "hack",
    "label": "hack",
    "value": 495,
    "color": "hsl(114, 70%, 50%)"
  },
  {
    "id": "make",
    "label": "make",
    "value": 75,
    "color": "hsl(28, 70%, 50%)"
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 94,
    "color": "hsl(91, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 115,
    "color": "hsl(109, 70%, 50%)"
  },
  {
    "id": "javascript",
    "label": "javascript",
    "value": 426,
    "color": "hsl(137, 70%, 50%)"
  }
]


export default function PieChartSection({isDashboard = false}) {
    const theme = useTheme();
  return (
    <Box sx={{height: isDashboard ? '230px' : '74vh'}}>
      <ResponsivePie
        data={data}
        theme={{
    "text": {
        "fontSize": 11,
        "fill": "#333333",
        "outlineWidth": 0,
        "outlineColor": "#ffffff"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": theme.palette.secondary.light,
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "ticks": {
            "line": {
                "stroke": theme.palette.secondary.light,
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": theme.palette.secondary.light,
            "strokeWidth": 1
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "#ffffff"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": "#333333",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        // @ts-ignore
        "wrapper": {},
        "container": {
            "background": theme.palette.background.default,
            "color": theme.palette.text.primary,
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}}
        margin={isDashboard? { top: 10, right: 0, bottom: 10, left: 0 } : { top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={isDashboard? 0.8 : 0.5}
        padAngle={0.6}
        cornerRadius={2}
          enableArcLabels={isDashboard? false : true}
            enableArcLinkLabels={isDashboard? false : true}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={ isDashboard? [] : [
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />
    </Box>
  )
}
