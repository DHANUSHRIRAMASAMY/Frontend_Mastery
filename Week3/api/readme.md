
### Fetch API

```javascript
fetch(url)
```

### Calling a Public API

```javascript
fetch("https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=API_KEY&units=metric")
```

### Handling the Response

```javascript
.then(function(response){
    return response.json();
})
```

### JSON Data

```javascript
.then(function(data){
    console.log(data);
})
```

### Promise Chaining

```javascript
fetch(url)
.then(...)
.catch(...)
```

### DOM Manipulation

```javascript
document.getElementById("result").innerHTML = "Weather Details";
```

### Event Handling

```javascript
button.addEventListener("click", function(){
    // code
});
```

### Basic Error Handling

```javascript
.catch(function(error){
    console.log(error);
})
```

### Displaying Weather Data

```javascript
result.innerHTML = `
<h2>${data.name}</h2>
<p>${data.main.temp} °C</p>
`;
```
