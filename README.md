# Tasks manager

The project built using React Native with Expo. 

It allows users to:
- Create, edit, delete and view tasks
- Manage task status
- Schedule tasks using a date picker
- Sort tasks by status and date created

The main logic includes:
- A global state management system for tasks using Zustand
- Forms with validation and submission using react-hook-form
- A clean and responsive UI with UI Kitten

The architecture of code follows the FSD methodology. This structure improves scalability and maintainability by organizing code into clear layers: 
- entities/ - includes state and simple ui components
- features/ - UI logic for task editing and rendering list with sort
- shared/ - common UI components, data and types

Demo is [here](/demo.mp4)

## Technology Stack

- React Native	
Cross-platform mobile development	                   
Fast dev and native performance
- Expo	        
Simplifies development and deployment	               
Easy setup, OTA updates, dev tools
- Zustand  	    
Lightweight global state management	                 
Simple API, avoids Redux boilerplate
- react-hook-form	
Manage form state and validation	                 
Minimal re-renders, better performance
- UI Kitten	    
UI framework for consistent and styled components	   
Theme support and production-ready UI
