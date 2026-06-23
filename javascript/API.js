window.onload = function() {
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

    
    sendUnsentData();
    sendProjectToAPI(projekt2)
    sendArtefactToAPI(artefakt21)
    };