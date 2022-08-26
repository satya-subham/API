var q=""
    var inputClass = document.querySelector('.inputClass');
    var buttonClass = document.querySelector('.buttonClass');
    var container = document.querySelector('.container');
    
    buttonClass.addEventListener('click',function(event){
        container.innerHTML =""

        fetch(`https://newsapi.org/v2/everything?q=${inputClass.value}&from=2022-07-25&sortBy=publishedAt&apiKey=7f0bf7b97fdf4346b992decbdaa0c15b`)
        .then(result=>result.json())
        .then(data=>{
            let articles = data["articles"]
            
            for(let i=0;i<10;i++){
                let article = articles[i]
                let html = `<div class="img">
                    <img src="${article["urlToImage"]}" width="500px" height="300px">
                    </div>
                    <div class="data">
                    <h1>${article["title"]} </h1>
                    <p>${article["author"]}</p>
                    <p>${article["description"]} <a href=${article["url"]}>Read more</a> </p>
                  </div>`

                container.innerHTML+=html
              
                
            }
        }).catch(err=>alert("error"))
    })

