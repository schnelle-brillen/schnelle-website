import React from 'react';
import { Query } from 'react-apollo';
import { GET_GLASSES } from '../../services/queries'
import { GlassCard, SocialMediaSideBar, Icon } from '../../components'
import './Home.css';

export default ({ addItemToBasket }) => {

    return (
        <div>
            <div className="sb-de-glasses-container">
                <Query query={GET_GLASSES}>
                    {
                        ({loading, error, data}) => {
                            if(loading || error ) {
                                return null;
                            }
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