import React from 'react';
import projects from './projects';

export default function Portfolio() {
    return (
        <section class="align-center">
            <h2 class="m-4"> Projects </h2>
            <div className='d-flex flex-wrap flex-row justify-content-center'>
            {projects.map((project) => (
                <h3>{project}</h3>
            ))}
            </div>
        </section>
    )
};