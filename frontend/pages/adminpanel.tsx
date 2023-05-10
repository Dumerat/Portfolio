import Head from 'next/head'
import { NextPage } from 'next'
import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react'
import Router from 'next/router'

const Admin:NextPage = ():JSX.Element => {
  const {status, data} = useSession()
  
  useEffect(() => {
    if (status === 'unauthenticated') Router.replace("/auth/signin")
  })

  var createProject = function (event) {
    event.preventDefault()
    fetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-ezpcy/endpoint/data/v1/action/insertOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': process.env.API_KEY,
      },
      body: JSON.stringify({
        "dataSource": "Portfolio",
        "database": "Portfolio",
        "collection": "Project",
        "document":{
          "id": "6",
          "image": "/images/project/Grim.PNG",
          "git": "https://github.com/Dumerat/Projet-7",
          "name": "Mon viieux Grimoire",
          "desc": "Building the back-end of a book rating site",
          "details": "nothing",
          "skill": "any"
        }
      }
      )
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error(error));
  }

  const [id, setId] = useState('')
  const [name, setName] = useState('')

  var deleteSkill = function(event){
    event.preventDefault();
    fetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-ezpcy/endpoint/data/v1/action/updateOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': process.env.API_KEY,
      },
      body: JSON.stringify({
        dataSource: 'Portfolio',
        database: 'Portfolio',
        collection: 'skills',
        query: { id: id },
        update: { $pull: { skills: {name: name} } },
      })
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error(error));
  };


  var createSkill = function (event) {
    event.preventDefault()
    fetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-ezpcy/endpoint/data/v1/action/insertOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': process.env.API_KEY,
      },
      body: JSON.stringify({
        "dataSource": "Portfolio",
        "database": "Portfolio",
        "collection": "Skill",
        "document":{
          "id": "1",
          "image": "/images/project/Grim.PNG",
          "git": "https://github.com/Dumerat/Projet-7",
          "name": "Mon viieux Grimoire",
          "desc": "Building the back-end of a book rating site"
        }
      }
      )
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error(error));
  }

  const [projectId, setProjectId] = useState('')

  var deleteProject = function(event){
    event.preventDefault();
    fetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-ezpcy/endpoint/data/v1/action/deleteOne', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': process.env.API_KEY,
      },
      body: JSON.stringify({
        "dataSource": 'Portfolio',
        "database": 'Portfolio',
        "collection": 'Project',
        "filter": {id: id}
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error(error));
  };

  return(
  <>
    <Head>
      <title>ADMIN PANEL</title>
      <meta name="description" content="Portfolio de Dumerat" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <section className='admin'>
      <h1 className='admin-title'>ADMIN</h1>
      <div className='admin-action'>

        <section className='add-project'>
          <h2>add new project</h2>
          <form onSubmit={(e) => {createProject(e); e.preventDefault();}}>
            <input type="text" placeholder="id surement générer ailleurs qu'ici"/>
            <input type="file" placeholder="image" accept="image/*"/>
            <input type="text" placeholder="link project if exist"/>
            <input type="text" placeholder="link to git"/>
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="description"/>
            <input type="text" placeholder="skill learned"/>
            <input type="text" placeholder="problem encounter"/>
            <input type="submit" value="ADD" />
          </form>
        </section>

        <section className='remove-project'>
          <h2>remove project</h2>
          <form onSubmit={deleteProject}>
            <input type="text" placeholder="id" onChange={(event) => setProjectId(event.target.value)}/>
            <input type="submit" value="REMOVE" />
          </form>
        </section>

        <section className='add-skill'>
          <h2>add new skill</h2>
          <form>
            <input type="text" placeholder="id surement générer ailleurs qu'ici"/>
            <input type="text" placeholder="category ID"/>
            <input type="text" placeholder="name"/>
            <input type="file" placeholder="image" accept="image/*"/>
            <input type="img" placeholder="link to skill"/>
            <input type="submit" value="ADD" />
          </form>
        </section>

        <section className='remove-skill'>
          <h2>remove skill</h2>
          <form onSubmit={deleteSkill}>
            <input type="text" name="id" placeholder="id" onChange={(event) => setId(event.target.value)}/>
            <input type="text" name="name" placeholder="name" onChange={(event) => setName(event.target.value)}/>
            <input type="submit" value="REMOVE" />
          </form>
        </section>

      </div>
    </section>
  </>
  )
}

export default Admin
