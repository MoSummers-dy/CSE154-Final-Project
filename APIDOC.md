# LOL Store API Documentation
This API provides information about the items in the game: League of Legends (LOL).

## /items
**Request Format:** /items

**Request Type:** Get

**Returned Data Format**: JSON

**Description:** Fetches all items in LOL with information including name, shortname, cost, and type. There is also an array with all item names.

**Example Request:** /items

**Example Response:** (shortened version)

```JSON
{
    "Abyssal Mask": {
        "name": "Abyssal Mask",
        "shortname": "am",
        "cost": 3000,
        "type": [
            "health",
            "mana",
            "magic-resist",
            "cooldown-reduction"
        ]
    },
    "Adaptive Helm": {
        "name": "Adaptive Helm",
        "shortname": "ah",
        "cost": 2800,
        "type": [
            "health",
            "magic-resist",
            "health-regen",
            "cooldown-reduction"
        ]
    },
    "name": [
        "Abyssal Mask",
        "Adaptive Helm"
    ]
}
```

**Error Handling:**
Responds with a 500 status plain text message if the server is down.

## /items/:name
**Request Format:** /items/:name

**Request Type:** Get

**Returned Data Format**: JSON

**Description:** Retrieves the detailed information from the server about a LOL store item, including name, shorname, cost, type, and effect.

**Example Request:** /items/ss

**Example Response:**

```JSON
{
    "name": "Statikk Shiv",
    "cost": 2600,
    "type": [
        "Attack speed",
        "Critical strike"
    ],
    "effect": [
        "",
        " Passive - Energized: Moving and attacking will make an attack Energized. Your Energized attacks deal 60~140 bonus magic damage (based on level) on hit. ",
        " Passive: Energized damage bounces to 5 targets and can critically strike."
    ],
    "shortname": "ss"
}
```

**Error Handling:**
Responds with a 500 status plain text message if the server is down. Responds with a 400 status plain text message if the item name is not in the LOL store.

## /items/category/:type
**Request Format:** /items/category/:type

**Request Type:** Get

**Returned Data Format**: JSON

**Description:** Retrieves the short names for all the items with specific type.

**Example Request:** /items/category/health

**Example Response:**

```JSON
{
    "match": [
        "am",
        "ah",
        "fm",
        "kv",
        "lt",
        "rh",
        "sv",
        "tf",
        "wa"
    ]
}
```

**Error Handling:**
Responds with a 500 status plain text message if the server is down. Responds with a 400 status plain text message if no items with the type are in the LOL store.

## /types
**Request Format:** /types

**Request Type:** Get

**Returned Data Format**: JSON

**Description:** Retrieves all the type names in the LOL store.

**Example Request:** /types

**Example Response:**

```JSON
{
    "type": [
        "Health",
        "Magic Resist",
        "Health Regen",
        "Armor",
        "Attack Damage",
        "Critical Strike",
        "Attack Speed",
        "Life Steal",
        "Ability Power",
        "Cooldown Reduction",
        "Mana",
        "Mana Regen"
    ]
}
```

**Error Handling:**
Responds with a 500 status plain text message if the server is down.

## /qa
**Request Format:** /qa

**Request Type:** Get

**Returned Data Format**: JSON

**Description:** Retrieves the question and answer pairs list from the server.

**Example Request:** /qa

**Example Response:** (shortened version)

```JSON
{
  "QA": [
    {
    "Question": "Why choosing Diana's LOL store?",
    "Answer": "Everything is better with Diana industry!"
    },
    {
    "Question": "Who should I contact?",
    "Answer": "Click on the contact us tab on the navigation bar!"
    }
  ]
}
```

**Error Handling:**
Responds with a 500 status plain text message if the questions and answers list is not found.

## /contactMsg
**Request Format:** /contactMsg

**Request Type:** Post

**Returned Data Format**: Plain Text

**Description:** Adds the entry to the messages list with the given name, phone, email, and message.
All but email are required.

**Example Request:** /contactMsg

**Example Response:** Dina's message successfully sent to Diana's LOL store!

**Error Handling:**
Responds with a 500 status plain text message if the server is down. Responds with a 400 status plain text message if any of the required parameters (name, phone, or message) is missing. Email is optional.

## /signUp
**Request Format:** /signUp

**Request Type:** Post

**Returned Data Format**: Plain Text

**Description:** Adds the entry to the messages list with the given name, phone, email, and message.

**Example Request:** /contactMsg

**Example Response:** Elan has successfully become the loyal member of Diana's LOL store!

**Error Handling:**
Responds with a 500 status plain text message if the server is down. Responds with a 400 status plain text message if any of the required parameters (name, phone, email, address, or password) is missing.
