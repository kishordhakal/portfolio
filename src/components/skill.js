import React from "react";
import {IoGameControllerSharp} from 'react-icons/io5';
import { MdOutlinePets } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { PythonOriginalWordmark,CplusplusOriginal, COriginal, JavaOriginal,
JavascriptOriginal, ReactOriginalWordmark, ScikitlearnOriginal,NumpyLineWordmark, PandasOriginalWordmark, ExpressOriginalWordmark, MongodbOriginalWordmark, MysqlOriginal, 
DockerOriginal, AndroidstudioOriginalWordmark, TrelloOriginal, GithubOriginal, GitlabOriginal, FigmaOriginal, FirebaseOriginal  } from 'devicons-react'
import './skill.css'


export default function Skills() {
    return(
        <div className="skills-projects">
            <div className="skills">
                <h1>Programming Languages and Techonologies</h1>
                <p>We can always learn new a programming languages and use new techonologies.</p>
                <div className="Pro-languages">
                    <PythonOriginalWordmark color="red" size="80" />
                    <CplusplusOriginal color="black" size="80" />
                    <COriginal color="black" size="80" />
                    <JavaOriginal color="black" size="80" />
                    <JavascriptOriginal color="black" size="80" />
                    <ReactOriginalWordmark color="black" size="80" />
                    <ScikitlearnOriginal color="black" size="80" />
                    <PandasOriginalWordmark color="black" size="80" />
                    <NumpyLineWordmark color="white" size="80" />
                    <ExpressOriginalWordmark color="black" size="80" />
                </div>
                <div className="Databases">
                    <MongodbOriginalWordmark color="green" size="80" />
                    <MysqlOriginal color="green" size="80" />
                    <FirebaseOriginal color="red" size="80" />
                    <DockerOriginal color="green" size="80" />
                    <AndroidstudioOriginalWordmark color="green" size="80" />
                    <TrelloOriginal color="green" size="80" />
                    <GithubOriginal color="green" size="80" />
                    <GitlabOriginal color="green" size="80" />
                    <FigmaOriginal  size= "80" />
                </div>
            </div>
            <div className="projects">
                <h1>Some Sample Proejcts</h1>
                <p>These are very simple projects that I have devleoped with very cool group of people during my university time.</p>
                <div className="pet-app">
                    <MdOutlinePets size={20} color="yellow"/><h2>Pet Adoption APP</h2>
                    <p>Andorid app, developed to make the pet adoption process easy and fast. The app allows its user to
                        post a pet for adoption or find a pet to adopt </p>
                    <h3><a href="https://github.com/CS481group2/petAdoption">Link to github</a></h3>
                </div>
                <div className="woods-stone">
                    <IoGameControllerSharp size={20} color="yellow"/><h2>Woods and Stones</h2>
                    <p>Computer based multiplayer board game based on Nepali Traditional game.
                        The game had 2 different modes and 3 different diffculty level.
                    </p>
                    <h3><a href="https://github.com/kishordhakal/Woods-and-Stones">Link to github</a></h3>

                </div>
                <div className="ta-assigner">
                    <GiTeacher size={20} color="yellow"/><h2>Teaching Assistant Assigner</h2>
                    <p> Java solution for TA assignment task, build for CWU Computer Science department.
                        The solution would consider multiple factors and find optimal match.
                    </p>
                    <h3><a href="https://github.com/CS481group2/petAdoption">Link to github</a></h3>
                    
                </div>
            </div>
        </div>
    );
}