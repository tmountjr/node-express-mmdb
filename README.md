# IPinfo MMDB Middleware Demo

This project provides an Express.js server that retrieves IP information using an IPinfo mmdb file.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory:
   ```sh
   cd path/to/your/project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Download an IPinfo mmdb file. You can download the IPinfo Lite database here: https://ipinfo.io/lite.
5. Update the `src/index.ts` file to set the path to the downloaded database.

## Running the Development Server

To start a development instance of the server, run:

```sh
npm run dev
```

This will start the server on port 3000.

## Testing with cURL and Custom x-forwarded-for Header

You can test the server using `curl` by sending a request with a custom `x-forwarded-for` header. For example:

```sh
curl -H "X-Forwarded-For: 8.8.8.8" http://localhost:3000/
```

This will return the IP information for the IP address `8.8.8.8`.

## Contributing

Feel free to contribute by submitting issues or pull requests.