import React from 'react';
import ProjectContainer from './ProjectContainer';
import Grid from 'semantic-ui-react';


const ListofProjects = () => {
    return (
        <div>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <ProjectContainer />
                    </Grid.Column>
                    <Grid.Column>
                        <ProjectContainer />
                    </Grid.Column>
                    <Grid.Column>
                        <ProjectContainer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default ListofProjects;