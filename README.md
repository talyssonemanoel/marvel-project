# Marvel Directory - Vue.js Single-Page Application

**Marvel Directory** is a single-page application built with Vue3.js and Vue Router4, which consumes Marvel's API to provide information about characters, comics, events, and more. This project features a responsive design, following the Marvel UI Style Guide, and includes several bonus features. It's a great resource for Marvel fans to explore their favorite characters and comics.

**Note**: This project was created as part of the application process for a Front-End position at Bee Delivery.

## Configuration

Before running the application, make sure to provide your Marvel API keys in the `apiConfig.js` file located in the `src/config` directory. You need to supply your public and private keys to authenticate with the Marvel API. Here's how to set it up:

1. Navigate to the `src/config` directory in your project.

2. Create a file named `apiConfig.js` if it doesn't already exist.

3. Inside `apiConfig.js`, define your Marvel API keys as follows:

```javascript
// src/config/apiConfig.js

import md5 from 'md5';

const publicKey = 'SuaChavePública';
const privateKey = 'SuaChavePrivada';
const timestamp = Number(new Date());
const hash = md5(timestamp + privateKey + publicKey);

export const apiConfig = {
  publicKey,
  privateKey,
  timestamp,
  hash,
};
```
Replace 'SuaChavePública' and 'SuaChavePrivada' with your actual Marvel API keys. Ensure that you keep these keys confidential.

## Features

### General Features
- Responsive design for both web and mobile versions.
- Code reusability through Vue3.js components.
- UI styling with Bootstrap 5.3 and icons from [HERE](https://ionic.io/ionicons).
- Follows Bootstrap 5.3 grid system.

### Pages
1. **Welcome Page**
   - Displays a welcome message: "WELCOME TO MARVEL'S DIRECTORY."

2. **Characters Page**
   - Shows a list of characters from Marvel's API with thumbnails and names.
   - Users can click on a character to view detailed information on the Character Detail Page.

3. **Character Detail Page**
   - Loaded when a user clicks on a character.
   - Displays the character's thumbnail, name, description, and list of associated comics.

4. **Comics Page**
   - Shows a list of comics from Marvel's API with thumbnails, titles, and the number of pages.

5. **Events Page**
   - Displays a list of events from Marvel's API with thumbnails, titles, descriptions, and dates.

6. **Contact Page**
   - Allows users to provide their name, email, phone, and a message.
   - Validates email and phone number patterns.
   - Form fields are validated on leaving the input.
   - The "Send" button is disabled if any validation fails.
   - Upon successful validation, clicking "Send" triggers an alert with a thank you message.

## UI Style Guide

The UI design and style of this project adhere to the Marvel UI Style Guide. Refer to the provided web and mobile prototypes in Figma for design details.

- [Web Prototype](https://www.figma.com/proto/IivV2Vq6MJ6a24usioCuUk/Prot%C3%B3tipos-teste-Frontend---Bee-Delivery?type=design&node-id=212-63&viewport=1176%2C813%2C0.33&t=qEb3f4U1t5a4suOv-0&scaling=scale-down&starting-point-node-id=212%3A45)
- [Mobile Prototype](https://www.figma.com/file/b21cB6Ph702fL11DqwoyWP/Teste-Frontend---Bee-Delivery?type=design&node-id=7-10&mode=design&t=kfMaOsZL9enV94hq-0)


### Installation

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/your-username/marvel-directory.git
