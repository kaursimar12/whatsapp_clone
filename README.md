WhatsApp Clone (React Native)
This is a WhatsApp-inspired mobile application built with React Native, featuring a familiar user interface and essential functionalities. The app allows users to simulate a WhatsApp experience, including chatting, viewing statuses, managing calls, and more. Authentication is enabled through Clerk, where users receive an OTP upon login. The app currently uses dummy data to simulate interactions, as it doesn’t connect to a backend server.

Features
Authentication with OTP: Users can log in with their phone number and an OTP sent via Clerk.
Chat Screen: Displays a list of conversations, including sample messages, timestamps, and chat bubbles.
Status Screen: Shows sample status updates.
Calls Screen: Lists recent calls, with details like call time and type (missed, incoming, outgoing).
Settings: Profile settings screen for user information.
Note: This version uses sample data and does not support real-time messaging. A backend integration is required for full functionality.

Prerequisites
Node.js and npm (or yarn)
Expo CLI globally installed
Clerk account with API keys for OTP login
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/whatsapp-clone.git
cd whatsapp-clone
Install Dependencies:

bash
Copy code
npm install
or if using yarn:

bash
Copy code
yarn install
Configure Clerk:

Sign up at Clerk.dev and create an application to generate OTP login keys.
Create a .env file in the root directory and add the following:
plaintext
Copy code
CLERK_FRONTEND_API=<Your Clerk Frontend API>
CLERK_API_KEY=<Your Clerk API Key>
Run the App:

Start the Expo development server:
bash
Copy code
npm start
Use Expo Go or an emulator to view the app.
Usage
Login:

Enter a phone number to receive an OTP, log in, and access the app.
Explore the App:

Navigate through Chats, Status, Calls, and Settings.
Each section is pre-populated with sample data to demonstrate the app’s flow and layout.
Technologies Used
React Native
Expo
Clerk for authentication
@expo/vector-icons for a polished UI
React Navigation for smooth navigation