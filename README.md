# Daily Event Scheduler

- [Description](#description)
- [Visualization and Usage](#visualization-and-usage)
  - [Overview](#overview)
  - [Schedule a Event](#schedule-a-event)
  - [Clearing the Schedule](#clearing-the-schedule)
- [Contribution](#contribution)
- [License](#license)

## Description

- Daily event scheduler is a web-application developed using jQuery and Bootstrap library.
- It allows user to schedule the event for today's working hours, and also automaticly refreshes when it reaches the next day.

## Visualization and Usage

[View Deployed Project](https://hmhtom.github.io/daily-scheduler/)

### Overview

> Here is the application interface when launched
>
> <img src="assets/img/screenshot.png" width="60%">

> Current date time information will be shown in the header area
>
> <img src="assets/img/header.png" width="60%">

> Different colored box in the scheduler shows event in different time
>
> Gray(Disabled) area shows the past event
>
> <img src="assets/img/gray.png" width="70%">

> Yellow area is the current hour
>
> <img src="assets/img/yellow.png" width="70%">

> Green area is the future event for today
>
> <img src="assets/img/green.png" width="70%">

> Scheduler is based on 9-5 working hours

### Schedule a Event

> Click the input box area where you want to schedule your event
>
> <img src="assets/img/choose-input.png" width="70%">

> Input the event detail
>
> <img src="assets/img/input-event.png" width="70%">

> Click SAVE !
>
> <img src="assets/img/savebtn.png" width="10%">

> Note: Once passed 5pm each day, event scheduler will be disabled, you are not able to change any past events
>
> <img src="assets/img/evening-after.png" width="70%">

> Once passed midnight, your event scheduler will reset and you can start schedule for your next day's event
>
> <img src="assets/img/morning-before.png" width="70%">

### Clearing the Schedule

> Scheduler will reset on its own once past midnight, so you don't have to do the reset yourself

> In the case you want to manually reset today's schedule, click the clear button at the very bottom
>
> <img src="assets/img/clearbtn.png" width="20%">

## Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License ![APM](https://img.shields.io/apm/l/vim-mode)

Copyright (c) 2022 hmhtom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
