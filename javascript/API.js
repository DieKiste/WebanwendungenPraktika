function getData(url) {
    // Default options are marked with *
    return fetch(url, {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *omit
        headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'none',
        },
        method: 'GET', // *GET, PUT, DELETE, etc.
        mode: 'same-origin', // no-cors, *same-origin
        redirect: 'follow', // *manual, error
        referrer: 'no-referrer', // *client
    })
    .then(response => response.json()) // parses response to JSON
    }

window.onload = function() {
    // getData('https://scl.fh-bielefeld.de/WBA/projects.json').then(
    // function(data) {
    //     console.log(data);
    // }) // JSON from `response.json()` call
    //     .catch(error => console.error(error))
    this.fetch('../json/projects.json')
    .then(response => response.json())
    .then(data => {
        const projects = data.map(project => new Projekt(
            project.id,
            project.name,
            project.shortdesc,
            project.logourl,
            project.start
        )); 

        console.log(projects)
        }
    )
    .catch(err => console.error(err));
    this.fetch('../json/tasks.json')
    .then(response => response.json())
    .then(data => {
        const tasks = data.map(task => new Aufgabenbereich(
            task.id,
            task.name,
            task.shortdesc,
        )); 
        const tasks_projects = data.map(task => new Projekt_Aufgabenbereich(
            task.project,
            task.id
        ))

        console.log(tasks)
        console.log(tasks_projects)
        }
    )
    .catch(err => console.error(err));
    this.fetch('../json/artefacts.json')
    .then(response => response.json())
    .then(data => {
        const artefacts = data.map(artefact => new Artefakt(
            artefact.id,
            artefact.name,
            artefact.shortdesc,
            artefact.taskid,
            artefact.planedtime
        )); 
        const artefacts_task = data.map(artefact => new Projekt_Artefakt(
            artefact.project,
            artefact.id
        ))

        console.log(artefacts)
        console.log(artefacts_task)
        }
    )
    .catch(err => console.error(err));
    };