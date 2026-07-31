import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from "@mui/material";


const data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 203
      },
      {
        "x": "helicopter",
        "y": 80
      },
      {
        "x": "boat",
        "y": 184
      },
      {
        "x": "train",
        "y": 250
      },
      {
        "x": "subway",
        "y": 250
      },
      {
        "x": "bus",
        "y": 34
      },
      {
        "x": "car",
        "y": 169
      },
      {
        "x": "moto",
        "y": 188
      },
      {
        "x": "bicycle",
        "y": 197
      },
      {
        "x": "horse",
        "y": 147
      },
      {
        "x": "skateboard",
        "y": 17
      },
      {
        "x": "others",
        "y": 7
      }
    ]
  },
  {
    "id": "france",
    "data": [
      {
        "x": "plane",
        "y": 70
      },
      {
        "x": "helicopter",
        "y": 91
      },
      {
        "x": "boat",
        "y": 216
      },
      {
        "x": "train",
        "y": 168
      },
      {
        "x": "subway",
        "y": 172
      },
      {
        "x": "bus",
        "y": 172
      },
      {
        "x": "car",
        "y": 114
      },
      {
        "x": "moto",
        "y": 2
      },
      {
        "x": "bicycle",
        "y": 222
      },
      {
        "x": "horse",
        "y": 292
      },
      {
        "x": "skateboard",
        "y": 100
      },
      {
        "x": "others",
        "y": 117
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 130
      },
      {
        "x": "helicopter",
        "y": 173
      },
      {
        "x": "boat",
        "y": 220
      },
      {
        "x": "train",
        "y": 259
      },
      {
        "x": "subway",
        "y": 159
      },
      {
        "x": "bus",
        "y": 78
      },
      {
        "x": "car",
        "y": 33
      },
      {
        "x": "moto",
        "y": 272
      },
      {
        "x": "bicycle",
        "y": 41
      },
      {
        "x": "horse",
        "y": 136
      },
      {
        "x": "skateboard",
        "y": 16
      },
      {
        "x": "others",
        "y": 177
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 89
      },
      {
        "x": "helicopter",
        "y": 131
      },
      {
        "x": "boat",
        "y": 172
      },
      {
        "x": "train",
        "y": 138
      },
      {
        "x": "subway",
        "y": 274
      },
      {
        "x": "bus",
        "y": 65
      },
      {
        "x": "car",
        "y": 179
      },
      {
        "x": "moto",
        "y": 46
      },
      {
        "x": "bicycle",
        "y": 163
      },
      {
        "x": "horse",
        "y": 88
      },
      {
        "x": "skateboard",
        "y": 8
      },
      {
        "x": "others",
        "y": 34
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 127
      },
      {
        "x": "helicopter",
        "y": 192
      },
      {
        "x": "boat",
        "y": 61
      },
      {
        "x": "train",
        "y": 160
      },
      {
        "x": "subway",
        "y": 221
      },
      {
        "x": "bus",
        "y": 199
      },
      {
        "x": "car",
        "y": 202
      },
      {
        "x": "moto",
        "y": 56
      },
      {
        "x": "bicycle",
        "y": 145
      },
      {
        "x": "horse",
        "y": 235
      },
      {
        "x": "skateboard",
        "y": 266
      },
      {
        "x": "others",
        "y": 197
      }
    ]
  }
]

export default function LineChartSection() {
    const theme = useTheme();
  return (
    <Box sx={{height: '74vh'}}>
        <ResponsiveLine 
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
            "strokeWidth": 0
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
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="catmullRom"
        axisBottom={{ legend: 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
    </Box>
  )
}
