# hng13-user-profile

# NestJS USER PROFILE API

A simple **NestJS** application for user profile and fetches random cat facts from the [Cat Fact API](https://catfact.ninja/fact).  
This project demonstrates best practices for using **HttpService**, **RxJS Observables**, and **controllers/services structure** in NestJS.

---

## Features

- Fetches a random cat fact from an external API  
- Implements proper NestJS module architecture  
- Uses `HttpService` (via `@nestjs/axios`) for external requests  
- Returns structured JSON responses with metadata  
- Demonstrates RxJS `map` and `lastValueFrom` usage  
- Follows professional NestJS conventions  

---

## 🛠️ Technologies Used

- [NestJS](https://nestjs.com/)
- [Axios](https://axios-http.com/)
- [RxJS](https://rxjs.dev/)
- TypeScript

---

## Project Structure

src/
├── app.controller.ts # Handles incoming HTTP requests
├── app.service.ts # Business logic for fetching cat facts
└── main.ts # Application entry point

## ⚙️ Installation

###  Clone the Repository

- git clone https://github.com/Admayah/hng13-user-profile.git
- cd user-profile-api
- npm install
- npm run start:dev

## Usage

GET /me
