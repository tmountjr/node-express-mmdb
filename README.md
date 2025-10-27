# IP Info Server

This project provides an Express.js server that retrieves IP information using the MaxMind GeoIP2 database.

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