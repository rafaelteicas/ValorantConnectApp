<div style="text-align: center;">

![Valorant Connect](/src/assets/brand/Logo.png)

</div>

## Table of Contents
-[Technologies and Libraries](#🏗️-technologies)
-[Features](#🔥-features)
-[Structure](#📁-structure)
-[Installation](#⬇️-installation)
-[Screenshots](#📷-screenshots)

## 🏗️ Technologies

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Restyle](https://shopify.github.io/restyle/)
- [Firebase](https://firebase.google.com/?hl=pt-br)
- [Reanimated v3](https://docs.swmansion.com/react-native-reanimated/)
- [Skia](https://shopify.github.io/react-native-skia/)
- [React Navigation](https://reactnavigation.org/)
- [TanStack Query v3](https://tanstack.com/query/v3/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Jest](https://jestjs.io)

## 🔥 Features

- Authentication
- Posts
- Messages
- Upload of Photos
- Data Update
- Home with Agents, Maps, and Weapons
- Valorant Skins

## 📁 Structure
``````
project
  ├─ __mocks__              ## Mock async storage
  ├─ .husky                 ## Husky lib for pre-commit hook
  ├─ coverage               ## Coverage from jest library
  ├─ src                    ## Source code from project
    ├─ api                  ## Api calls
    ├─ assets               
    ├─ brand                ## Brand design
    ├─ components           ## Components from UI
    ├─ domain               ## The scope and context of application
    ├─ hooks                ## Custom hooks
    ├─ infra                ## The infrastructure of application
    ├─ routes               ## Routes from application (BottomTab, Stack)
    ├─ screens              ## Screens are divided by AuthStack and AppStack
    ├─ services             ## The services from application
    ├─ test                 ## Jest setup and utils
    ├─ theme                ## Theme config with Restyle lib
    ├─ types                
    ├─ utils        
  ├─ App.tsx                ## Entry point with the providers
  ├─ jest.config.js
  ├─ tsconfig.json          ## Config of typescript and absolute paths
  ├─ babel.config.js        ## Babel and absolute paths
``````

## ⬇️ Installation
Clone the repository
```
git clone https://github.com/rafaelteicas/nubbleapp
```
Project directory
```
cd project
```
Install dependencies 
```
npm install or yarn
```


## 📱 Screenshots

<div>
<img src="https://i.ibb.co/K5cNb5T/simulator-screenshot-CF017296-92-C3-4-C96-99-A5-6-C24-AD05-DDAE.png" width="215" height="466">
<img src="https://i.ibb.co/CJV1MNj/simulator-screenshot-0-E8-F4-F73-ACBE-44-D4-B3-D8-7-DB69-A9-F9-FB0.png" width="215" height="466">
<img src="https://i.ibb.co/9H8dJZX/simulator-screenshot-D70-B7-F1-C-E188-4-C7-F-99-F5-61-F17-E2-EA8-DB.png" width="215" height="466">
</div>