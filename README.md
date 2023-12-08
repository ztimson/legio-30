<!-- Header -->
<div id="top" align="center">
  <br />

  <!-- Logo -->
  <img src="./src/assets/img/eagle.png" alt="Logo" width="200" height="200">

  <!-- Title -->
  ### Legio • XXX

  <!-- Description -->
  Roman Re-Enactment Website

  <!-- Repo badges -->
  [![Version](https://img.shields.io/badge/dynamic/json.svg?label=Version&style=for-the-badge&url=https://git.zakscode.com/api/v1/repos/ztimson/legio-30/tags&query=$[0].name)](https://git.zakscode.com/ztimson/legio-30/tags)
  [![Pull Requests](https://img.shields.io/badge/dynamic/json.svg?label=Pull%20Requests&style=for-the-badge&url=https://git.zakscode.com/api/v1/repos/ztimson/legio-30&query=open_pr_counter)](https://git.zakscode.com/ztimson/legio-30/pulls)
  [![Issues](https://img.shields.io/badge/dynamic/json.svg?label=Issues&style=for-the-badge&url=https://git.zakscode.com/api/v1/repos/ztimson/legio-30&query=open_issues_count)](https://git.zakscode.com/ztimson/legio-30/issues)

  <!-- Links -->

  ---
  <div>
    <a href="https://git.zakscode.com/ztimson/legio-30/releases" target="_blank">Release Notes</a>
    • <a href="https://git.zakscode.com/ztimson/legio-30/issues/new?template=.github%2fissue_template%2fbug.md" target="_blank">Report a Bug</a>
    • <a href="https://git.zakscode.com/ztimson/legio-30/issues/new?template=.github%2fissue_template%2fenhancement.md" target="_blank">Request a Feature</a>
  </div>

  ---
</div>

## Table of Contents
- [Legio • XXX](#top)
	- [About](#about)
        - [Demo](#demo)
		- [Built With](#built-with)
	- [Setup](#setup)
        - [Production](#production)
		- [Development](#development)
	- [License](#license)

## About

Legio XXX is a non-profit re-enactment group from southern Ontario & the north-eastern USA.

This website was built to help educate the public and advertise events.

The website was written using Angular.

### Demo

Website: https://legio-30.org

### Built With
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular)](https://angular.io/)
[![Docker](https://img.shields.io/badge/Docker-384d54?style=for-the-badge&logo=docker)](https://docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)

## Setup

<details>
<summary>
  <h3 id="production" style="display: inline">
    Production
  </h3>
</summary>

#### Prerequisites
- [Docker](https://docs.docker.com/install/)

#### Instructions
1. Run the docker image: `docker run -p 80:80 git.zakscode.com/ztimson/legio-30:latest`
2. Open [http://localhost](http://localhost)
</details>

<details>
<summary>
  <h3 id="development" style="display: inline">
    Development
  </h3>
</summary>

#### Prerequisites
- [Node.js](https://nodejs.org/en/download)

#### Instructions
1. Install the dependencies: `npm install`
2. Start the Angular server: `npm run start`
3. Open [http://localhost:4200](http://localhost:4200)

</details>

## License
Copyright © 2023 Zakary Timson | All Rights Reserved

See the [license](./LICENSE) for more information.
