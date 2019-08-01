import React from 'react';
import { Query } from 'react-apollo';
import { getGlasses } from '../../services/queries'
import { GlassCard } from '../../components'
import './Home.css';

export default () => {
    return (
        <div>
            <div className="sb-de-home-container">
                <h1>
                    <span role="img" aria-label="An image of a fast car, like the glasses on this page!">🏎️</span>
                    <i>Super schnell, so wie deine Brille!</i>
                    <span role="img" aria-label="Cloud symbolising the speed of the text you just read!">💨</span>
                </h1>
            </div>
            <div className="sb-de-glasses-container">
                <Query query={getGlasses}>
                    {
                        ({loading, error, data}) => {
                            console.log(loading, error, data);
                            if(loading || error ) {
                                return null;
                            }

                            return data.glasses.map(glass => <GlassCard glass={glass} key={glass.id}/>);
                        }
                    }
                </Query>
            </div>
        </div>
    );
}