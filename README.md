# `Task. React Testing Library`

We have an application with next - 3 tabs.<br/> 
On activation any of them only corresponding component is displayed.

<img src="./public/images/app-demo.gif" width=200px>

## `Please, test the components of the application`

### `1. App component`
Write tests for App component in 'App.test.js'<br/>
The test should check 
 - if image is displayed when the first tab is selected
 - if Calculation component is displayed when the second is selected
 - if ButtonGroup component is displayed when the third tab is selected<br/>
 Also, test should check if components are not displayed if they do not correspond to the currenc active tab.

### `2. Calculations component`
<img src="./public/images/calculations.gif" width=200px><br>
Write tests for Calculations component in 'Calculations.test.js'<br/>
The test should check if evaluation of the result is correct

### `3. ButtonGroup component`
<img src="./public/images/alignment.gif" width=200px><br>
Write tests for ButtonGroup component in 'ButtonGroup.test.js'<br/>
The test should check if text alignment in the paragraph is correct, corresponding to selected option.

*Note: there are components in the folder __brokenComponents__.<br/> These components are similar to the original ones, but they are with mistakes.<br/> These mistakes are described in component files.<br> You can use these broken components to check if your tests will find the mistakes. To do this, just replace the original components with the broken ones and run your tests.*
