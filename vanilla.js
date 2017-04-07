/* Author : Aalind Singh (aalind0) */
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('aside-hidden');
    })

    document.getElementById('submit').addEventListener('click',function(event){
        event.preventDefault();
        var term=document.getElementById('article-input').value
        var lang=document.getElementById('language-input').value
        console.log(term,lang)
        if(term==''&&lang==''){
            window.alert('Enter the values');
        }
        else{
            var endpoint = "https://" + lang + ".wikipedia.org/api/rest_v1/page/summary/";
            var request_url = endpoint + term;
            var httpRequest=new XMLHttpRequest()
            httpRequest.onreadystatechange=function(data){
                console.log(data.currentTarget.response)
                var final=JSON.parse(data.currentTarget.response)
                console.log(final)
                document.getElementById('article-text').innerHTML=final.extract
                document.getElementById('header-title').innerHTML=final.title
                document.getElementById('thumbnail').setAttribute('src',final.thumbnail.source)
            }
            httpRequest.open('GET',request_url)
            httpRequest.send()
        }
    })
})
