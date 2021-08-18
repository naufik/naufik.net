# PTV Departure Paperboard

The PTV departure paperboard is a personal IoT project to create a bus departure board at home, displayed on an ePaper screen. It is written in TypeScript and utilizes the Public Transport Victoria API to obtain departure data, while being hosted online using AWS Lambda and API Gateway.

The plan is to have a Raspberry Pi hooked up with an ePaper Screen that will (via cron) download the rendered image. This image is then sent to the ePaper screen using SPI.

The ePaper screen used for this experiment is the Waveshare 7.5" monochromatic ePaper screen ([see specifications](https://www.waveshare.com/wiki/7.5inch_e-Paper_HAT))

## Limitations

Node modules often get really big, this is the case for this project as well and loading the image library into the RAM is an issue. The application can have a high 200MB RAM usage. (My poor Raspberry Pi Zero only has 500MB of RAM!) Other than simply learning, this was the second excuse to do all theprocessing in AWS Lambda.

## Up Next

That said, here is what's next for the application:

- Perform low-level bitmap manipulation instead of relying on Jimp. I assume this will reduce a lot of overhead, but who knows until I try.
- Support tracking only few routes from a stop.

[See code on GitHub](https://github.com/naufik/ptv-departure-paperboard)