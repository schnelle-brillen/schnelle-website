import React from 'react';
import { Query } from 'react-apollo';
import { getGlasses } from '../../services/queries'
import { GlassCard, SocialMediaSideBar, Icon } from '../../components'
import './Home.css';

export default ({ addItemToBasket }) => {

    return (
        <div>
            <div className="sb-de-glasses-container">
                <Query query={getGlasses}>
                    {
                        ({loading, error, data}) => {
                            if(loading || error ) {
                                return null;
                            }
                            console.log(data);
                            return data.glasses.map(glass => <GlassCard  onClick={() => addItemToBasket(glass)} glass={glass} key={glass.id} />);
                        }
                    }
                </Query>
            </div>
            <SocialMediaSideBar elements={[
                {
                    icon: <Icon.Instagram />,
                    link: 'https://www.instagram.com/schnelle_brillen/'
                }
            ]}/>
        </div>
    );
}