import {rangeEnum, activeEnum} from "../models/constants.js";

export const heroesSchema = {
    "type": "array",
    "items": {
        "properties": {
            "name": {"type": "string"},
            "velocity": {"type": "integer", "minimum": 1, "maximum": 1000},
            "range": {
                "type": "string",
                "enum": rangeEnum
            },
            "damage": {"type": "integer", "minimum": 0, "maximum": 5},
            "active": {
                "type": "string",
                "enum": activeEnum
            },
            "health": {"type": "integer", "minimum": 0, "maximum": 5},
            "info": {"type": "string"}
        },
        "required": [
            "name",
            "velocity",
            "range",
            "damage",
            "active",
            "health",
            "info"
        ]
    }

};