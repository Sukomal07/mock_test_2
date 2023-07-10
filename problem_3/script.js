const dataContainer = document.getElementById('data-container')

function showSkeletonLoader(){
    dataContainer.innerHTML = `<div class="skeleton-loader"></div>`
}

function fetchData(){
    showSkeletonLoader()
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>{
        setTimeout(()=>{
            display(data)
        },2000)
    })
    .catch((err) => {
        console.log(err)
        showSkeletonLoader()
    })
}
function display(data){
    dataContainer.innerHTML = ''

    data.forEach(item => {
        const title = item.title
        const body = item.body

        const itemElement = document.createElement('div')
        itemElement.innerHTML= `<h2>${title}</h2><p>${body}</p>`
        dataContainer.appendChild(itemElement)
    });
}
fetchData()