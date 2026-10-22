# UBus — Public Transportation Platform

UBus is a team-built public transportation web application developed as an Information Technology Institute project. It was designed to help passengers explore routes and stops, search for destinations, and view bus locations, while giving drivers and administrators role-specific workflows.

## Project overview

Public transportation information can be difficult to navigate when route, stop, and vehicle information are separated. UBus brings several of these workflows together in one application.

## Features documented in this project

- **Passenger and driver accounts:** Registration and login flows with validation.
- **Routes and stops:** Browse transportation lines and stations.
- **Destination search:** Search for a destination from a user's location.
- **Bus location:** Display current bus locations on a map.
- **Driver workflow:** Drivers can indicate when a trip starts and ends so their bus location can be tracked.
- **Administration:** Manage users, drivers, buses, lines, and stops.
- **Additional interaction:** The original project documentation also describes chat/contact functionality and a dark-mode option.

## Technology

| Layer | Technologies |
| --- | --- |
| Frontend | React, HTML, CSS, Bootstrap |
| Backend | Python, Django |
| Database | PostgreSQL |

## How the application is organized

The repository contains a Django project with separate areas for user management, route/stop information, and map-related functionality. The frontend uses React for the passenger-facing interface.

## Team

Developed as a collaborative project for the Information Technology Institute.

- [Mostafa Youssef](https://github.com/Mostafa-YMS)
- [Mohamed Amin](https://github.com/mohamed000123)
- [Aya Ehab](https://github.com/ayyaehab)
- [Marwa Farag](https://github.com/marwafarg)
- [Anas Rafat](https://github.com/anasRafat)

**Supervisor:** [Noha Shehab](https://github.com/NohaAShehab)

## Running the project

The repository currently does not document a complete, verified local setup for both frontend and backend. Before using this project as a portfolio demonstration, add the exact setup steps for the current codebase, including:

1. Python version and backend dependency installation.
2. Required environment variables and database configuration.
3. Database migration and sample-data instructions.
4. Frontend dependency installation and development command.
5. Any map, authentication, or external-service configuration.
6. Screenshots or a demonstration of the working application.

Do not publish real credentials or service keys in the README.

## Project status

This repository documents an academic team project. Feature descriptions above reflect the existing project documentation; they should not be read as a claim that every external integration is currently deployable without additional setup.

## What this project demonstrates

- Integrating a React frontend with a Django backend.
- Modeling role-specific workflows for passengers, drivers, and administrators.
- Working with relational data for routes, stops, buses, and users.
- Designing map-based transportation interactions.
