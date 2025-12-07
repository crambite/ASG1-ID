# Vortex Web (h1)
Vortex Web is a modern web platform designed to showcase the game engine, Vortex Engine, in a clear and engaging way. The project focuses on combining clean and minimalistic design with a informational webpage. By keeping the interface simple, the project aims to clearly communicate what Vortrex Engine offers and why it is worth Purchasing.

In short, Vortex acts as both a product marketing site, demonstrating to keen game developers and hobbyists what Vortex Engine is capable of.

# Design Process (h1)

# Target Users (h2)
Vortex Web is designed for game developers or hobbyists who are looking for a game engine and may be interested in Vortex Engine

# User Goals (h2)
Users visiting Vortex Web want to understand what Vortex Engine does quickly, compare available plans and features and have a seamless experience between desktop and mobile.

# Design Decisions (h2)
To meet these requests, Vortex Web uses a card based layout to present information. A minimalistic, yet techy colour scheme was chosen to not push users away with an overly decorated website. To ensure seamless switching of desktop and mobile, the menu bar was pushed to the top of the page permanently on the desktop layout; while the mobile uses a drop down button which when clicked, the menu opens from the left side. A simple checkout modal was used to not break the browsing flow.

# User Stories (h2)
As a new user, I want to view the product features, so that I can understand what the service offers.
As a potential customer, I want to compare plans, so that I can choose the option that suits me best.
As a customer, I want to apply a promo code during checkout, so that I can receive a discount.
As a mobile user, I want the website to work well on smaller screens, so that I can use it anywhere.

# Wireframe (h2)
Figma Link = https://www.figma.com/design/UJArasxPPeJY0yApQe0mTk/ID_S10272167C_DavenLim_Assg1_wireframe?node-id=0-1&t=md9R3nnf3GCeH0HV-1

# Features (h1)

# Existing Features (h2)
ALL featuers were implemented with the help of AI, however personal changes were made
Login System
Allows registered users to log in using stored credentials. Use these to test (left is username, right is password):
"admin": "admin123",
"deo": "demo123",
"testuser": "password123"

Register System
Allows new users to create an account, with validation for mismatched passwords and blank fields.

(The 2 above allows you to login and register, however they do not save as I do not understand localStorage and don't want to implement something I don't understand)

Responsive Navigation Menu
Allows users to navigate between pages easily, with a collapsible menu on mobile and a horizontal menu on desktop.

Product Plans Display
Presents multiple plans in a clear card layout, allowing users to compare pricing and features.

Checkout Modal
Allows users to complete payment without leaving the current page, improving user flow.

Promo Code System
Allows users to apply a valid promo code (e.g. NEWMEMBER) to receive a discount.

Scroll-to-Top Button
Improves usability on longer pages by allowing quick navigation back to the

# Features Left to Implement (h2)
Properly working Login and Register system that validates dupe usernames and saves accross refresh.

# Technologies Used (h1)
HTML
CSS
JavaScript

# Testing (h1)

# Login Page (h2)
Attempted login with empty fields - error message shown
Attempted login with incorrect credentials - error message shown
Attempted login with valid credentials - successful login and redirect

# Registration Page
Submitted form with empty fields - validation error shown
Submitted form with mismatched passwords - validation error shown
Successfully registered a new user - redirected to login page

# Checkout (h2)
Opened checkout from different plans - correct plan name and price displayed
Applied valid promo code - discounted price applied
Applied invalid promo code - error message displayed

# Cross-Browser & Responsive Testing (h2)
Tested on Chrome, Edge, and Brave
Tested on multiple screen sizes using browser dev tools
Layout adapts correctly for mobile, tablet, and desktop views

# Known Issues / Limitations (h2)
Login system is client-side only and not suitable for production use
No backend validation or payment processing implemented

# Credits (h1)

# Media (h2)
Menu icon - https://nohat.cc/f/call-610-465-white-hamburger-menu-icon-png/m2i8G6G6b1m2A0G6-201907232310.html 
X logo - https://commons.wikimedia.org/wiki/File:X_logo.jpg 
FaceBook Logo - https://commons.wikimedia.org/wiki/File:2021_Facebook_icon.svg 
Instagram Logo - https://commons.wikimedia.org/wiki/File:Instagram_logo_2022.svg
Get In Touch Picture - https://www.kindpng.com/imgv/hTiwJow_get-in-touch-get-in-touch-png-transparent/
Product Image - Original Work (created by me in blender)

Special thanks Adam, Joshua, Marcus and Zakir for letting me use their pictures

# Acknowledgements (h2)
I received inspiration for this project from https://flutel.com/ and https://unity.com/