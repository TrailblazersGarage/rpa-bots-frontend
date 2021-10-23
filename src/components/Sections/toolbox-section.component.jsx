import React from 'react';
import './sections.style.css';

const ToolboxSection = () => {
    return (
        <div>
            <div className="section_features">
                <section className="row">
                    <h3 className="heading-tertiary white center">Toolbox</h3>
                    <div className="flex">
                        <div className="w-25 pa3 mr2 feature-box">
                                <div className="pa4 tc">
                                    <img src="https://elasticbeanstalk-us-east-2-958052075682.s3.us-east-2.amazonaws.com/apps/images/mongodb.png" className="br-150 h4 w4 dib" alt="Mongo Database" />
                                </div>
                                MongoDB
                        </div>
                        <div className="w-25 pa3 mr2 feature-box">
                                <div className="pa4 tc">
                                    <img src="https://elasticbeanstalk-us-east-2-958052075682.s3.us-east-2.amazonaws.com/apps/images/react-native_256.png" className="br-150 h4 w4 dib" alt="React Native mobile app" />
                                </div>
                                React.js
                        </div>
                        <div className="w-25 pa3 mr2 feature-box">
                                <div className="pa4 tc">
                                    <img src="https://elasticbeanstalk-us-east-2-958052075682.s3.us-east-2.amazonaws.com/apps/images/flutter.png" className="br-150 h4 w4 dib" alt="Flutter mobile app" />
                                </div>
                                Flutter
                        </div>
                        <div className="w-25 pa3 mr2 feature-box">
                                <div className="pa4 tc">
                                    <img src="https://elasticbeanstalk-us-east-2-958052075682.s3.us-east-2.amazonaws.com/apps/images/nodejs.png" className="br-150 h4 w4 dib" alt="Node Backend" />
                                </div>
                                Node.js
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ToolboxSection;