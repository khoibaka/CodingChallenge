addEventListener('fetch', event => {

  event.respondWith(handleRequest(event.request))

})

class TitleHandler{
  element(element){
    element.replace("<title>Hi I'm Khoi</title>", {html:true})
  }
}

class H1Handler {
  element(element) {
    element.replace("<h1 id='title'>Thank you for providing me with this opportunity</h1>", { html: true })
  }
}

class Descriptionhandler{
  element(element) {
    element.replace("<p id='description'>COVID 19 hit me hard with my internship got cancelled. After seeing the course of actions that aim to help students get through this dark time, I truly admire Cloudflare and would like to contribute to the growth of Cloudflare</p>", { html: true })
  }
}

class UrlHandler{
  element(element){
    element.replace("<a id='url' href='https://khoibaka.github.io/InteractiveResume' style='text-align: center; background-color: teal; margin: 0 auto; border-radius: 5px'>Please have a look at my Website</a>",{html:true})
  }
}



/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  let old_response = await fetch("https://cfw-takehome.developers.workers.dev/api/variants", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    return response.json()
  }).then(data => {
    return fetch(data.variants[Math.floor(Math.random() * 2)], {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      return response

    })
  })
  let new_response = new HTMLRewriter()
    .on('title',new TitleHandler())
    .on('h1#title', new H1Handler())
    .on('p#description', new Descriptionhandler())
    .on('a#url', new UrlHandler())
    .transform(old_response)
  return new_response
}

