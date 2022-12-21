# route-easy

This is my answer to the fullstack web developer challenge, proposed by Route Easy.

The original challenge repository can be seen [here](https://github.com/RoutEasy/challenge-fullstack)

<details><summary><strong>Challenge description</strong></summary>

## Description

The goal of the challenge is to build a fullstack application with a layout alike to the following:

![challenge ui](https://raw.githubusercontent.com/RoutEasy/challenge-fullstack/master/challenge.png)

The user of the app must be capable of signing-on clients through the form. Upon saving the form data, the map must be updated with a marker on the informed address. Also, a table must also be displayed with the clients' data, and be updated upon each new register. On each table row, there must be a button to delete the client's data (that must be removed from the table, map and database).

The _reset_ form button delete all deliveries from the database, map and table.

## Tech stack

The project is required to be built with the following tech stack (other libraries/tools could be used at the developer discretion):

- MERN stack (MongoDB, Express.js, React.js and Node.js);
- Mongoose;
- HTML and CSS;
- [Google Geocode API](https://developers.google.com/maps/documentation/geocoding/intro?hl=pt-br);
- [Leaflet](http://leafletjs.com/) to manipulate the map.

## API details

The delivery register must have the following fiels:

- Client's name
- Weight in _kg_
- Address:
  - Street
  - Number
  - Neighbourhood
  - Complement
  - City
  - State
  - Country
  - Geolocation
    - Latitude
    - Longitude

These data must be stored into a collection named _deliveries_. Note that the form has a single input field for the address: the user must fill his address in that single input. The address data must come from the Google API. Upon clicking the _search_ button, the _latitude_ and _longitude_ ui components (inputs) must be _disabled_ to the user. Upon clicking the _save_ button, the data must be persisted to the db, the form input fields must be reset and map and table must be updated. The _reset register_ button must delete all deleveries from db, map and table.

</details>

## Development

![challenge ui - dark mode](https://i.ibb.co/SNPG63V/Screenshot-from-2022-12-17-18-11-16.png)

All required features were implemented using the MERN stack.

## Other technologies I used

- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Next (senior) features

- [ ] Tests (unit/integration) using Vitest, Cypress, Mocha, Chai and Sinon;
- [ ] Authentication/authorization as microservice;
- [ ] Continuous delivery workflow

## If you want to check the app running locally

### Pre-requisites

- [Docker](https://docs.docker.com/get-docker/)

## Instructions to run the app locally

0. Get yourself a key for the [Google Geocode API](https://developers.google.com/maps/documentation/geocoding/intro?hl=pt-br). Once you have it, create a `.env` file on `./frontend` according to `.env.example`:

```.env
VITE_API_KEY=YOUR_API_KEY_HERE
VITE_GEO_URL='https://maps.googleapis.com/maps/api/geocode/json?address='
VITE_DB_API_HOST='localhost:3001'
VITE_DB_API_PROTOCOL='http'
```

1. Download the code or _clone_ this repository into your machine:

```bash
git clone https://github.com/andersonfpcorrea/route-easy.git
```

2. Change directory into the project

```bash
cd route-easy
```

3. Run the `docker compose` command

```bash
docker compose up -d
```

4. Access [localhost:5173](http://localhost:5173)

## Instructions for developing the app

The first thing you need to do to develop this app is getting a key for the [Google Geocode API](https://developers.google.com/maps/documentation/geocoding/intro?hl=pt-br). Once you have it, create a `.env` file on `./frontend` according to `.env.example`:

```.env
VITE_API_KEY=YOUR_API_KEY_HERE
VITE_GEO_URL='https://maps.googleapis.com/maps/api/geocode/json?address='
VITE_DB_API_HOST='localhost:3001'
VITE_DB_API_PROTOCOL='http'
```

**To start development** use the `docker-compose.dev.yml` file. This one, not like the other `docker-compose.yml` file, has _bind volumes_ set up for the **src** folder of both subdirectories (_frontend_ and _backend_). Therefore, you will need to run on the project's root:

```bash
docker compose -f docker-compose.dev.yml up -d
```

Note that, during development, if you make changes to the files outside of the **src** folders, you will need to put down the containers and compose them up again.

Why not just bind-mount the entire subdirectories (frontend/backend), including **node_modules**, into the container 🤔? Well, I tryed 😆, but that is not a good idea for a couple of reasons, but the most import one is this:

> Some dependencies are **platform-specific** (for instance, _esbuild_ used by Vite), and therefore depend on native packages to run. If you run `npm i` on the _frontend_ subdirectory -- **not using a Linux machine** -- and map everything (using bind volume) into the container, the app is going to crash.

There are some workarounds, but for this small project I thought it was not worth the effort.
