This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## About components

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

### Summary
Devide components into 
* Representational (_pure functional components, mostly how things look_)
* Containers (_pure class components, mostly how things work_)

All components should be made as representational, until some of them appear to be in need of state,
lifecycles or main thing that they do is such that they only pass data to nested components.