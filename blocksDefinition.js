Blockly.common.defineBlocksWithJsonArray(
  [{

    "type": "tone",
    "message0": "play tone %1 for %2 of measure",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "note",
        "options": [
          [
            "G3",
            "55"
          ],
          [
            "A3",
            "57"
          ],
          [
            "B3",
            "59"
          ],
          [
            "C4",
            "60"
          ],
          [
            "D4",
            "62"
          ],
          [
            "E4",
            "64"
          ],
          [
            "F4",
            "65"
          ],
          [
            "G4",
            "67"
          ],
          [
            "A4",
            "69"
          ],
          [
            "B4",
            "71"
          ],
          [
            "C5",
            "72"
          ],
          [
            "D5",
            "74"
          ],
          [
            "E5",
            "76"
          ],
          [
            "F5",
            "77"
          ],
          [
            "G5",
            "79"
          ],
          [
            "A5",
            "81"
          ],
          [
            "B5",
            "83"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "time",
        "options": [
          [
            "1/8",
            "0.125"
          ],
          [
            "1/4",
            "0.25"
          ],
          [
            "3/8",
            "0.375"
          ],
          [
            "1/2",
            "0.5"
          ],
          [
            "5/8",
            "0.65"
          ],
          [
            "3/4",
            "0.75"
          ],
          [
            "7/8",
            "0.875"
          ],
          [
            "1",
            "1"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "semitone",
    "message0": "play semitone %1 for %2 of measure",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "tone",
        "options": [
          [
            "G#3",
            "56"
          ],
          [
            "A#3",
            "58"
          ],
          [
            "C#4",
            "61"
          ],
          [
            "D#4",
            "63"
          ],
          [
            "F#4",
            "66"
          ],
          [
            "G#4",
            "68"
          ],
          [
            "A#4",
            "70"
          ],
          [
            "C#5",
            "73"
          ],
          [
            "D#5",
            "75"
          ],
          [
            "F#5",
            "78"
          ],
          [
            "G#5",
            "80"
          ],
          [
            "A#5",
            "82"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "time",
        "options": [
          [
            "1/8",
            "0.125"
          ],
          [
            "1/4",
            "0.25"
          ],
          [
            "3/8",
            "0.375"
          ],
          [
            "1/2",
            "0.5"
          ],
          [
            "5/8",
            "0.625"
          ],
          [
            "3/4",
            "0.75"
          ],
          [
            "7/8",
            "0.875"
          ],
          [
            "1",
            "1"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "pause",
    "message0": "pause for %1 of measure",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "time",
        "options": [
          [
            "1/8",
            "0.125"
          ],
          [
            "1/4",
            "0.25"
          ],
          [
            "3/8",
            "0.375"
          ],
          [
            "1/2",
            "0.5"
          ],
          [
            "5/8",
            "0.625"
          ],
          [
            "3/4",
            "0.75"
          ],
          [
            "7/8",
            "0.875"
          ],
          [
            "1",
            "1"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "midi",
    "message0": "play MIDI %1 for %2 of measure",
    "args0": [
      {
        "type": "field_number",
        "name": "tone",
        "value": 69,
        "min": 55,
        "max": 83
      },
      {
        "type": "field_dropdown",
        "name": "time",
        "options": [
          [
            "1/8",
            "0.125"
          ],
          [
            "1/4",
            "0.25"
          ],
          [
            "3/8",
            "0.375"
          ],
          [
            "1/2",
            "0.5"
          ],
          [
            "5/8",
            "0.625"
          ],
          [
            "3/4",
            "0.75"
          ],
          [
            "7/8",
            "0.875"
          ],
          [
            "1",
            "1"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "repeat",
    "message0": "repeat %1 times %2 %3",
    "args0": [
      {
        "type": "field_number",
        "name": "rep",
        "value": 2,
        "min": 2,
        "max": 8
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "code"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);

